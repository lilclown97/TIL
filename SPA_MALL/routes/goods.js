const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("this is root page");
})

router.get("/goods", (req,res )=>{
    res.send("this is goods page");
})

module.exports = router;