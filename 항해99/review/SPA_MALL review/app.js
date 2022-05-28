const express = require('express');
const connect = require('./schemas');
const app = express();
const port = 5000;

connect(); //connect schemas

//routes/goods 선언
const goodsRouter = require('./routes/goods');

//console.log URL,Date
const requestMiddleware = (req, res, next) => {
    console.log('request URL:', req.originalUrl, '-', new Date());
    next();
};

//ust static
app.use(express.static('static'));
//json 해석
app.use(express.json());
//x-www-form-urlencoded형태 해석
app.use(express.urlencoded());
app.use(requestMiddleware);

//'/api'에서  goodsRouter middleware
app.use('/api', [goodsRouter]);

//메인페이지 Hello World@@ response
app.get('/', (req, res) => {
    res.send('Hello World@@');
});

//포트 정보
app.listen(port, () => {
    console.log(port, '포트로 서버가 켜졌어요!');
});
