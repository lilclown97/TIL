const express = require('express');
const Posts = require('../schemas/posts');
const Comments = require('../schemas/comments');
const router = express.Router();

//post 전체 조회(완료)
router.get('/posts', async (req, res) => {
    const posts = await Posts.find({}, { _id: 0, postsId: 1, title: 1, name: 1, date: 1 }).sort({ date: -1 });

    res.json({
        posts,
    });
});

//post 상세 조회, 댓글 조회(완료)
router.get('/posts/:postsId', async (req, res) => {
    const { postsId } = req.params;

    const posts = await Posts.find(
        { postsId: Number(postsId) },
        { _id: 0, postsId: 1, title: 1, name: 1, date: 1, posts: 1 }
    );
    const comments = await Comments.find({ postsId: Number(postsId) }, { _id: 0, __v: 0, postsId: 0 }).sort({
        date: -1,
    });

    res.json({
        posts,
        comments,
    });
});

//게시글 작성 - 토큰추가
router.post('/posts', async (req, res) => {
    const { title, name, posts, password } = req.body;

    //postsId 자동증가
    const maxPostsId = await Posts.findOne().sort('-postsId').exec();
    let postsId = 1;

    if (maxPostsId) {
        postsId = maxPostsId.postsId + 1;
    }

    const createdPosts = await Posts.create({ postsId, title, name, posts, password });

    res.json({ posts: createdPosts });
});

//게시글 수정 - 토큰추가
router.put('/posts/:postsId', async (req, res) => {
    const { postsId } = req.params;
    const { password, title, posts } = req.body;

    const checkpassword = await Posts.findOne({ postsId: Number(postsId) });
    if (checkpassword['password'] === Number(password)) {
        await Posts.updateOne({ postsId: Number(postsId) }, { $set: { title, posts } });
    } else {
        return res.status(400).json({ success: false, errorMessage: '비밀번호가 다릅니다.' });
    }

    res.json({ success: true });
});

//게시글 삭제 - 토큰추가
router.delete('/posts/:postsId', async (req, res) => {
    const { postsId } = req.params;
    const { password } = req.body;

    const checkpassword = await Posts.findOne({ postsId: Number(postsId) });
    if (checkpassword['password'] === Number(password)) {
        await Posts.deleteOne({ postsId: Number(postsId) });
        //게시글 삭제되면 댓글 전부 삭제
        await Comments.deleteMany({ postsId: Number(postsId) });
    } else {
        return res.status(400).json({ success: false, errorMessage: '비밀번호가 다릅니다.' });
    }

    res.json({ success: true });
});

module.exports = router;
