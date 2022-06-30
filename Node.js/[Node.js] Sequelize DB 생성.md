## [Node.js] Sequelize DB 생성 

---

> **sequelize 기본 설정**

1. sequelize 설치

- `npm i --save sequelize mysql2`

- `npm i --g sequelize-cli`

2. 루트 폴더 진입

- `sequelize init`

3. 설정

- config.json 의 devlopment, 즉 개발 부분으로 사용할 것이므로 도커를 연결하면서 사용했던 password 부분에 사용했던 password를 입력.

4. 실행

- `npx sequelize db:create`

<br>

> **sequelize 모델 생성**

1. 모델 생성

```javascript
//name이 User라는 모델
//email,nickname,password가 string
npx sequelize model:generate --name User --attributes goodsId:integer,thumbnailUrl:string,category:string,price:integer,createdAt:date,updatedAt:date
```

2. 테이블 생성

`npx sequelize db:migrate`

<br>

> **시드파일 생성**

- `npx sequelize-cli seed:generate --name user`

- 추가 된 시드 파일을 본인이 생성했던 모델에 맞게 알맞는 값을 넣는다.

- `$ npx sequelize db:seed:all` 시드파일의 데이터를 db에 넣는다.

```
'use strict';
const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Goods',
            [
                {
                    goodsId: 2,
                    name: '시원한 콜라',
                    thumbnailUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc',
                    category: 'drink',
                    price: 3000,
                    createdAt,
                    updatedAt,
                },
                {
                    goodsId: 1,
                    name: '시원한 콜라',
                    thumbnailUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc',
                    category: 'drink',
                    price: 2000,
                    createdAt,
                    updatedAt,
                },
                {
                    goodsId: 3,
                    name: '시원한 콜라',
                    thumbnailUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc',
                    category: 'drink',
                    price: 1000,
                    createdAt,
                    updatedAt,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Goods', null, {});
    },
};
```

- 강의 영상을 따라하면서 그동안 MongoDB를 사용해서 데이터를 넣고 조회하는 기능을 수행했었기에 MySQL로 DB를 바꾸면서 안에 있는 데이터는 아무것도 없는 상태이다.

- 강의 영상은 바꿨는데 안에 데이터 잘 들어있다. 어떻게 넣는지는 알려주지도 않고 그냥 있는 상태로 강의를 진행한다. **망할 항해99**

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[Sequelize - 관계설정 및 DB생성](https://velog.io/@yesparrot/sequelizeDB)**
