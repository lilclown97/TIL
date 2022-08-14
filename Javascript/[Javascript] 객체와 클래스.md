## ⬛ 객체 지향 프로그래밍

---

### ◾ 객체

<br>

- 객체의 상태를 나타내는 변수(프로퍼티), 객체의 행동을 나타내는 함수(메소드)로 이루어진 집합

<br>

### ◾ 객체 지향 프로그래밍이란?

<br>

- '객체'간의 상호작용을 중심으로 하는 프로그래밍

<br><br>

## ⬛ 객체 만들기

---

### ◾ Object-Literal

<br>

- 객체를 나타내는 문자열

```javascript
const user = {
  email: 'chris123@google.com',
  birthdate: '1992-03-21',
  buy(item) {
    console.log('${this.email} buys ${item.name}');
  },
};
```

<br>

### ◾ Factory function

<br>

- 객체를 생성하는 Factory function을 만들고, 그 안에서 Object literal로 객체를 생성하여 리턴하는 방법

```javascript
function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
const user2 = createUser('jerry99@google.com', '19950719');
const user3 = createUser('alice@google.com', '19931224');
```

<br>

### ◾ Constructor function

<br>

- 객체를 생성하는 용도로 사용하는 Constructor function을 정의하고, 그 안에서 this 키워드를 사용하여 생성될 객체의 프로퍼티와 메소드를 설정하는 방법.

```javascript
function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
```

<br>

### ◾ Class

<br>

- class 키워드를 사용해서 객체의 틀을 정의하고, 마찬가지로 그 앞에 new를 붙여서 객체를 생성하는 방법

```javascript
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
