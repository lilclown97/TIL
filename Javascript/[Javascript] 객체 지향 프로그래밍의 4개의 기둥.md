## ⬛ 추상화(Abstraction)

---

- 객체를 만드는 과정은 현실 또는 가상의 존재를 프로그램 내에서 사용할 용도에 맞게 적절하게 설계하는 과정.

- 객체를 사용하는 사람은 객체 내부에 존재하는 복잡한 원리를 모르더라도 객체 외부에 공개된 프로퍼티나 메소드만을 가지고도 객체를 문제없이 잘 사용할 수 있어야 한다.

- 프로퍼티와 메소드의 이름을 누구나 이해하기 쉽게 잘 지어야하고 필요한 경우 주석을 달거나 그 내용을 문서화하여 공개하기도 함

```javascript
class User {
  constructor(email, birthdate) {
    // 사용자의 이메일 주소
    this.email = email;
    // 사용자의 생일
    this.birthdate = birthdate;
  }

  // 물건 구매하기
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}
```

<br><br>

## ⬛ 캡슐화(Encapsulation)

---

### ◾ 캡슐화

<br>

- 객체 외부에서 함부로 접근하면 안되는 프로퍼티나 메소드에 직접 접근할 수 없도록 하고, 필요한 경우 공개된 다른 메소드를 통해서만 접근할 수 있도록 하는 것

```javascript
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  get email() {
    return this._email;
  }

  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}
```

- 사용자의 이메일 주소를 나타내는 프로퍼티는 `_email`이고 , getter/setter 메소드의 이름이 `email`이기때문에 email 프로퍼티에 접근하는 코드를 작성하더라도 getter/setter 메소드가 실행

```javascript
const user1 = new User('charlie123@google.com', '2000-12-05');

console.log(user1.email); // email이라는 getter 메소드 실행
user1.email = 'new123@google.com'; // email이라는 setter 메소드 실행
```

- 하지만 `_email` 라는 이름으로 변수에 직접 접근할 수 있기때문에 클로저라는 개념을 사용하여 완벽한 캡슐화를 해주어야한다.

```javascript
console.log(user1._email);
```

<br>

### ◾ 클로저(Closure)

<br>

- 자바스크립트에서 어떤 함수와 그 함수가 참조할 수 있는 값들로 이루어진 환경을 하나로 묶은 것

```javascript
function createUser(email, birthdate) {
  let _email = email;

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
console.log(user1.email);
```

- `createUser` 함수가 실행되는 시점에 `email`이라는 getter/setter 메소드는 `_email`이라는 변수의 값에 접근할 수 있는 상태인데 getter/setter 메소드들은 메소드를 갖고 있는 객체가 리턴된 이후더라도 여전히 `_email`에 접근하는 것이 가능하다

- user1 rorcpdml `_email` 프로퍼티에 접근하려고 하면 `user1` 객체 자체 내에는 `_email`이라고 하는 프로퍼티가 없고 바깥은 `_email` 변수에 접근할수 없기 때문에 `undefined`가 출력된다.

<br><br>

## ⬛ 상속(Inheritance)

---

- 부모 클래스의 프로퍼티와 메소드를 자식 클래스가 그대로 물려받는 것

- 똑같은 코드를 또다시 작성하지 않아도 되고 코드의 재사용성(reusability)이 좋아진다.

- 필요한 경우에 자식 클래스에서 부모 클래스와 동일한 이름의 메소드를 재정의(오버라이딩, overriding)할 수 있다.

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

class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.level = level;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}
```

<br><br>

## ⬛ 다형성(Polymorphism)

---

- 하나의 변수가 다양한 종류의 클래스로 만든 여러 객체를 가리킬 수 있음을 의미

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

class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.level = level;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name} with a 5% discount`);
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = new User('chris123@google.com', '19920321');
const user2 = new User('rachel@google.com', '19880516');
const user3 = new User('brian@google.com', '20051125');
const pUser1 = new PremiumUser('niceguy@google.com', '19891207', 3);
const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
const pUser3 = new PremiumUser('aliceKim@google.com', '20010722', 5);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item);
});
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
