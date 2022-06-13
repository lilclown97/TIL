## SQL

---

> **SQL이란?**

- `Structured Query Language`의 약자로 데이터 베이스 자체를 나타내느 것이 아닌, 특정 유형의 데이터 베이스와 상호 작용하는 데 사용하는 **[쿼리(Query)](https://sesok808.tistory.com/36)** 언어.

- **SQL**을 사용하여 관계형 데이터베이스 관리 시스템(RDBMS) 예를 들면 **MySQL** 등에서 데이터를 저장, 수정, 삭제 및 검색이 가능하다

<br>

> **특징**

**1. 데이터는 정해진 데이터 스키마를 따라 데이터 베이스 테이블에 저장**

- 아래 사진과 같이 `Table`에 `Fields`라는 구조 즉 스키마의 형식에 맞는 `Records` 데이터가 저장된다.

![](https://velog.velcdn.com/images/lilclown/post/f24848c4-5909-45c1-a678-cc8bc2f56c32/image.jpg)

- **Sequelize**를 사용하면서 `npx sequelize model:generate --name User --attributes email:string,nickname:string,password:string` 라는 명령어를 통해 **model**과 **migration**을 생성하는데 `npx sequelize db:migrate` 명령어를 입력하여 **Table**을 생성하고 **Fields**는 **migration**에서 정의한 내용을 따른다.

```javascript
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      nickname: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
```

<br>

**2. 데이터는 관계를 통해서 연결된 여러개의 테이블에 분산**

- 데이터들을 여러개의 테이블에 나누어서 데이터들의 중복을 피할 수 있다.(아직 MongoDB만 사용해봐서 여러개의 테이블을 생성하고 관리해보지는 않았다.)

![](https://velog.velcdn.com/images/lilclown/post/73a4a278-65e3-4ed7-869c-91467fc65d80/image.jpg)

- **Orders**이라는 테이블과 **Users**, **Products** 라는 테이블을 각각 생성하여 **Orders** 테이블에서 정확한 **User**, **Product** 데이터를 가져와서 사용 가능

- **User**의 **name**이 변경된다면 **Orders**에서 사용된 **User**의 **name** 또한 같이 변경된다

<br>

> **장점**

- 명확하게 정의 된 스키마로 데이터 무결성 보장

- 관계는 각 데이터를 중복없이 한번만 저장

<br>

> **단점**

- 데이터 스키마는 사전에 계획되고 알려져야 한다. 추후에 수정하기가 번거롭거나 불가능 할 수도 있다.

- 관계를 맺고 있기 때문에 매우 복잡한 쿼리가 생성될 수 있다.

- 수평적 확장이 어렵고 대체로 수직적 확장만 가능하다.

<br><br>

## NoSQL

---

> **NoSQL이란?**

- `No SQL`, `Not Only SQL`, `Non-Relational Operational Database SQL` 등 약자에 대한 의견이 엇갈리지만 대체적으로 `Not Only SQL`로 풀어 설명된다고 한다.

- 단어의 뜻 그대로 관계형 데이터베이스 관리 시스템(RDBMS)이 가지고 있는 특성 뿐만 아니라 다른 특성들을 부가적으로 지원 한다는 것을 의미.

<br>

> **특징**

**1. 스키마 없음 (솔직히 이 부분은 이해가 잘 안간다. Mongoose를 사용하면서 분명 스키마를 사용했다.)**

```javascript
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

![](https://velog.velcdn.com/images/lilclown/post/7817caa7-f4e3-40aa-a75f-fe87b59dee7b/image.jpg)

<br>

**2. 관계 없음**

![](https://velog.velcdn.com/images/lilclown/post/ed7f0760-5ab8-4e4b-a86f-d040c52c226e/image.jpg)

- **Orders**에 데이터를 추가 할때 관계를 통한 데이터 분산이 아닌 **Collections**의 **Documents**를 복제하여 **Orders**에 따로 저장하기 때문에 데이터가 중복 된다.

- **Users**의 데이터가 수정된다면 **Orders**에서 복제했던 **Users**의 데이터 또한 별도로 수정해주어야한다.

<br>

> **장점**

- 스키마가 없기 때문에 유연하게 작동한다. 언제든지 저장된 데이터를 조정하고 새로운 필드 추가 가능 **(mongoose로 MongoDB를 사용할 때 분명 스키마 생성했다니깐.. 스키마랑 양식 다르면 데이터도 안들어가고)**

- 필요로 하는 형식으로 저장되기 때문에 데이터를 읽어오는 속도가 빨라진다.

- 수직, 수평 확장이 가능하므로 데이터베이스가 애플리케이션에서 발생시키는 모든 읽기/쓰기 요청 처리 가능

<br>

> **단점**

- 데이터가 여러 컬렉션에 중복되어 있기 때문에 수정을 해야하는 경우 모든 컬렉션에서 수행해야한다.

<br><br>

## 수직적(Vertical) & 수평적(Horizontal) 확장(Scaling)

---

> **수직적 확장**

- 단순히 데이터 베이스 서버의 성능을 향상시키는 것.

- 하드웨어를 업그레이드 하는 방식을 예로 들 수 있다.

<br>

> **수평적 확장**

- 더 많은 서버가 추가되고 데이터 베이스가 전체적으로 분산됨

- 하나의 데이터 베이스에서 작동하지만 여러 호스트에서 작동

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[SQL vs NoSQL (MySQL vs. MongoDB)](https://siyoon210.tistory.com/130)** > **[NoSQL이란 무엇인가? 대량데이터 동시처리위한 DBMS 종류와 특징](https://www.samsungsds.com/kr/insights/1232564_4627.html)**
