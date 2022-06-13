const mongoose = require("mongoose");

//------------------------------------------------------------
//  💾 스키마: articles
//------------------------------------------------------------

const commentsSchema = mongoose.Schema({
    commentTargetArticleId:{
        type: Number,
        required: true,
    },
    commentAuthorId:{
        type: String,
        required: true,
    },
    commentContent:{
        type: String,
        required: true,
    },
});

const model = mongoose.model("Comments", commentsSchema);
module.exports = model;