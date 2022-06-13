## 초기화

```
npm init
```

## express install

```
npm i express
```

## mongoose install

```
npm i mongoose
```

## nodemon install

```
npm i nodemon -g
```

## JWT 토큰

```
npm i jsonwebtoken -S
```

## Joi 회원가입 조건

```
npm i joi -S
```

## Sequelize 설정

```javascript
npm i sequelize mysql2 -S
npm i sequelize-cli -D

npx sequelize init

//데이터베이스 생성
npx sequelize db:create
npx sequelize db:migrate

//시드파일 생성
npx sequelize-cli seed:generate --name user

//시드 데이터 추가
npx sequelize db:seed:all
```

## socket io

```
npm i socket.io -S
```

## jest

```
npm i jest -D
```

## swagger

```
npm install swagger-ui-express
npm install swagger-autogen

//app.js 상단에 삽입
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


//app.js 하단에 삽입
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))
```
