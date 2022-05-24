const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods.js");

const requestMiddleware = (req, res, next) => {
    console.log("request URL:", req.originalUrl, "-", new Date());
    next();
}

app.use(requestMiddleware);

app.use("/api", [goodsRouter]);

app.get('/', (req, res) => {
    res.send("Hello World@@");
})

app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요!");
});