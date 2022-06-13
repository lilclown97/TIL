## ORM

---

> **ORM이란?**

- `Object Relational Mapping`의 약자로 SQL DBMS, 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑해주는 것을 말한다.

  - 객체 지향 프로그래밍은 **클래스**를 사용, 관계형 데이터베이스는 **테이블**을 사용

  - 객체 모델과 관계형 모델 간에 불일치가 존재하는데 ORM을 통해 객체 간의 관계를 바탕으로 SQL을 자동으로 생성하여 불일치를 해결

![](https://velog.velcdn.com/images/lilclown/post/7ec9bb4c-adb4-42d6-b020-4f2686a75099/image.png)

<br>

> **Sequelize**

- 현재 Node.js를 학습하고 있는 관계로 실제로 사용해본 **Sequelize**가 사용해본 유일한 ORM이라고 할 수 있다.

- 도커를 사용하여 MySQL만 이용해 보았는데 PostgreSQL, MariaDB, SQLite, MSSQL 같은 여러 DBMS를 지원한다

-

```javascript
//모듈설치
npm i sequelize mysql2 -S
npm i sequelize-cli -D

//초기화
npx sequelize init

//데이터베이스 생성
npx sequelize db:create

//모델 생성
npx sequelize model:generate --name User --attributes email:string,nickname:string,password:string

//테이블 생성
npx sequelize db:migrate
```

<br><br>

## ODM

---

> **ODM이란?**

- `Object-Document Mapper`의 약자로 NoSQL에서 Document Database를 지원하기 위해 데이터를 변환하는 프로그래밍 기법

<br>

> **mongoose**

- 현재 가장 많이 사용하고 있는 MongoDB ODM 라이브러리

- **MongoDB에 있는 데이터를 Node.js에서 javascript 객체로 사용할 수 있게 해준다.**

- 데이터베이스 연결, 스키마 정의, 스카마에서 모델로 변환, 모델을 이용해 데이터를 다룬다.

- 프로미스와 콜백 사용이 가능하다.

```javascript
//모듈 설치
npm i mongoose

//Schema 파일 생성 users.js
const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
UsersSchema.virtual('userId').get(function () {
    return this._id.toHexString();
});
UsersSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Users', UsersSchema);
```

<br><br>

## 장단점

---

> **장점**

- SQL의 경우 별도의 SQL문을 사용하지 않아도 구현이 가능하다

  - [Sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

  - [mongoose](https://www.mongodb.com/docs/manual/crud/)

- 재사용 및 유지보수가 편리하다

- DBMS에 대한 종속성이 줄어든다

<br>

> **단점**

- SQL문을 직접 작성하는 것보다 상대적으로 복잡할 수 있고 프로젝트의 복잡성이 높아질 경우 난이도가 올라간다.

- DB와 바로 연결하는 것보다 초기설정이 많아지거나 복잡해 질 수 있다.

- DB와 ORM/ODM의 내부코드에 대한 충분한 이해가 없는 경우 문제 해결이 힘들다

- DB에 직접 Query문을 보내는 것이 아니기 때문에 성능 저하가 발생한다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[[DB] ORM이란](https://gmlwjd9405.github.io/2019/02/01/orm.html)** > **[ODM, ORM](https://velog.io/@namezin/ODM-ORM)** > **[Mongoose 사용하기](https://velog.io/@ckstn0777/Mongoose-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)**
