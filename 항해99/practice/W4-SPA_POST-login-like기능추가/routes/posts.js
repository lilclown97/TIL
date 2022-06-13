const express = require('express');
const Posts = require('../schemas/posts');
const Comments = require('../schemas/comments');
const Likes = require('../schemas/likes');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middlewares');

//post 전체 조회(완료)
router.get('/posts', async (req, res) => {
  const posts = await Posts.find({}, { _id: 0, postsId: 1, title: 1, nickname: 1, date: 1 }).sort({ date: -1 });
  console.log(posts.length);

  res.json({
    posts,
  });
});

//post 상세 조회(완료)
router.get('/posts/:postsId', async (req, res) => {
  const { postsId } = req.params;

  const posts = await Posts.find(
    { postsId: Number(postsId) },
    { _id: 0, postsId: 1, title: 1, nickname: 1, date: 1, posts: 1 }
  );

  //좋아요 개수
  const likes = await Likes.find({ postsId: Number(postsId), type: 'like' }, { _id: 0, type: 1 });

  res.json({
    posts,
    countLikes: likes.length,
  });
});

//게시글 작성(완료)
router.post('/posts', authMiddleware, async (req, res) => {
  const { nickname } = res.locals.user;
  const { title, posts } = req.body;

  //postsId 자동증가
  const maxPostsId = await Posts.findOne().sort('-postsId').exec();
  let postsId = 1;

  if (maxPostsId) {
    postsId = maxPostsId.postsId + 1;
  }

  const createdPosts = await Posts.create({ postsId, title, nickname, posts });

  res.json({ posts: createdPosts });
});

//게시글 수정(완료)
router.put('/posts/:postsId', authMiddleware, async (req, res) => {
  const { nickname } = res.locals.user;
  const { postsId } = req.params;
  const { title, posts } = req.body;

  //토큰값 nickname이랑 글을 쓴 nickname 비교 - nickname은 unique
  const checkNickname = await Posts.findOne({ postsId: Number(postsId) });
  if (checkNickname['nickname'] !== nickname) {
    res.status(400).send({
      errorMessage: '너가 쓴 글 아니야',
    });
    return;
  }

  await Posts.updateOne({ postsId: Number(postsId) }, { $set: { title, posts } });

  res.json({ success: true });
});

//게시글 삭제(완료)
router.delete('/posts/:postsId', authMiddleware, async (req, res) => {
  const { nickname } = res.locals.user;
  const { postsId } = req.params;

  //토큰값 nickname이랑 글을 쓴 nickname 비교 - nickname은 unique
  const checkNickname = await Posts.findOne({ postsId: Number(postsId) });
  if (checkNickname['nickname'] !== nickname) {
    res.status(400).send({
      errorMessage: '너가 쓴 글 아니야',
    });
    return;
  }

  //게시글 삭제되면 댓글 전부 삭제
  await Posts.deleteOne({ postsId: Number(postsId) });
  await Comments.deleteMany({ postsId: Number(postsId) });

  res.json({ success: true });
});

//좋아요(완료)
router.put('/posts/:postsId/likes', authMiddleware, async (req, res) => {
  const { nickname } = res.locals.user;
  const { postsId } = req.params;

  const likesType = await Likes.findOne({ postsId: Number(postsId), nickname: nickname });

  if (likesType === null) {
    await Likes.create({ postsId, nickname, type: 'like' });
    res.json({ success: true });
    return;
  }

  if (likesType['type'] === 'like') {
    await Likes.updateOne({ postsId: Number(postsId), nickname: nickname }, { $set: { type: 'unlike' } });
  } else {
    await Likes.updateOne({ postsId: Number(postsId), nickname: nickname }, { $set: { type: 'like' } });
  }

  res.json({ success: true });
});

module.exports = router;
