const express = require('express');
const Comments = require('../schemas/comments');
const router = express.Router();

//댓글 작성 - 토큰추가
router.post('/posts/:postsId', async (req, res) => {
    const { nickname, comments } = req.body;
    const { postsId } = req.params;

    const maxCommentsId = await Comments.findOne().sort('-commentsId').exec();
    let commentsId = 1;

    if (maxCommentsId) {
        commentsId = maxCommentsId.commentsId + 1;
    }

    const createdComments = await Comments.create({ postsId, commentsId, nickname, comments });

    res.json({ comments: createdComments });
});

//댓글 수정 - 토큰추가
router.put('/posts/:postsId/:commentsId', async (req, res) => {
    const { commentsId } = req.params;
    const { comments } = req.body;

    await Comments.updateOne({ commentsId: Number(commentsId) }, { $set: { comments } });

    res.json({ success: true });
});

//댓글 삭제 - 토큰추가
router.delete('/posts/:postsId/:commentsId', async (req, res) => {
    const { commentsId } = req.params;

    await Comments.deleteOne({ commentsId: Number(commentsId) });

    res.json({ success: true });
});

module.exports = router;
