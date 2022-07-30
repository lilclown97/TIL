## ⬛ 조건부 연산자(Conditional operator)

---

### ◾ 삼항 연산자(Ternary operator)

<br>

- 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자

- if 문과 같은 원리로 조건에 따라 값을 결정할 때 활용

- 간단한 조건식의 경우 if문 보다 훨씬 더 간결하게 표현할 수 있지만 내부에 변수나 함수를 선언한다거나 반복문 같은 표현식이 아닌 문장을 작성할 수 없다.

```javascript
const cutOff = 80;

const passChecker = (score) => (score > cutOff ? '합격입니다!' : '불합격입니다!');

console.log(passChecker(75));
```

<br><br>

## ⬛ Spread 구문

---

### ◾ 배열의 Spread

<br>

- 여러 개의 값을 묶어놓은 배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여 펼칠 수 있다.

- 배열은 객체로 펼칠 수도 있다.

```javascript
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
```

<br>

### ◾ 객체의 Spread

<br>

- 배열과 같은 방법으로 마침표 세 개를 붙여서 펼칠 수 있다.

```javascript
const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript',
};
const newArray = [...topic]; // TypeError!
```

- 객체는 배열로 펼칠 수 없고 함수의 아규먼트로 사용할 수 없다.

```javascript
milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

[...latte]; // Error

(function (...args) {
  for (const arg of args) {
    console.log(arg);
  }
})(...cafeMocha); // Error
```

<br><br>

## ⬛ 모던한 프로퍼티 표기법

---

### ◾ 변수나 함수를 활용한 프로퍼티 생성

<br>

- 프로퍼티 네임과 변수나 함수 이름이 같다면 축약해서 사용할 수 있다.

```javascript
function sayHi() {
  console.log('Hi!');
}

const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title,
  birth,
  job,
  sayHi,
};

console.log(user); // {title: "codeit", birth: 2017, job: "프로그래밍 강사", sayHi: ƒ}
```

<br>

### ◾ 메소드 작성시 `function` 키워드 생략

<br>

```javascript
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // Tess Jang
```

<br>

### ◾ 대괄호를 활용한 표현식의 프로퍼티 네임

<br>

```javascript
const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [myFunction()]: '프로그래밍 강사',
};

console.log(user);
```

<br>

### ◾ 옵셔널 체이닝(Optional Chaining)

<br>

- 중첩 된 객체의 프로퍼티에 접근할 때 상위 프로퍼티의 값이 `undefined`, `null` 값이라면 존재하지 않는 프로퍼티의 하위 프로퍼티에 접근하게 되는 것이므로 에러 발생

```javascript
function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  },
};

printCatName(user1); // Crew

const user2 = {
  name: 'Young',
};

console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined
```

- 위의 예문으로 봤을 때 `user.cat.name`에 접근하기 전에 `user.cat`이 `null`, `undefined`가 아니라는 것을 검증하고 접근해야 에러 방지 가능

- if문이나 AND 연산자를 활용하여 해결 가능하지만 가독성의 문제로 간결하게 사용할 수 있는 문법인 옵셔널 체이닝 연산자를 사용

```javascript
// AND 연산자 사용
function printCatName(user) {
  console.log(user.cat && user.cat.name);
}

// 옵셔널 체이닝 연산자 사용
function printCatName(user) {
  console.log(user.cat?.name);
}
```

- 삼항 연산자를 사용하여 구체적으로 표현하면 다음과 같다.

```javascript
function printCatName(user) {
  console.log(user.cat === null || user.cat === undefined ? undefined : user.cat.name);
}
```

- null 병합 연산자와 함께 활용하면 다음과 같이 응용이 가능하다.

```javascript
function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

const user2 = {
  name: 'Young',
};

printCatName(user2); // 함께 지내는 고양이가 없습니다.
```

<br><br>

## ⬛ 구조 분해 (Destructuring)

---

### ◾ 구조 분해 (Destructuring)

<br>

- 배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하여 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 할당해서 다룰 수 있다.

```javascript
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
};

const { title, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
```

- 함수에서 default parameter, rest parameter를 다루듯 Destructuring 문법을 활용할 떄도 기본값과 rest 문법을 활용 가능

```javascript
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16 GB 2667 MHz DDR4',
  storage: '1TB SSD 저장 장치',
};

const { title, price, color = 'silver', ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}
```

<br><br>

## ⬛ 에러와 에러 객체

---

### ◾ 에러와 에러 객체

<br>

- 자바스크립트에서 에러가 발생하면 프로그램 자체가 멈춰버리고 이후의 코드가 동작하지 않는다.

- 발생한 에러는 에러에 대한 정보를 `name`와 `message` 라는 프로퍼티로 담고 있는 에러 객체가 만들어진다.

- 대표적인 에러 객체로는 SyntaxError, ReferenceError, TypeError가 있다.

<br>

### ◾

<br>

- 에러 객체는 직접 만드는 것도 가능하다

```javascript
throw new TypeError('타입 에러가 발생했습니다.');
```

<br><br>

## ⬛ try catch 문

---

### ◾ try catch문

<br>

- try catch문은 자바스크립트에서 대표적인 에러 처리 방법

- try문에서 발생한 에러 객체가 catch 문의 첫 번째 파라미터로 전달, try 문에서 에러가 발생하지 않을 경우 catch 문의 코드는 동작하지 않는다.

```javascript
try {
  // 실행할 코드
} catch (error) {
  // 에러 발생 시 동작할 코드
}
```

<br>

### ◾ finally문

<br>

- try문에서 에러가 발생하지 않는다면 try문의 코드가 모두 실행된 다음에, try문에서 에러가 발생한다면 catch문의 코드가 모두 실행된 다음 실행할 코드를 finally문에 작성.

```javascript
try {
  // 실행할 코드
} catch (err) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}
```

- finally문에서의 에러처리는 아래와 같이 한다.

```javascript
try {
  try {
    // 실행할 코드
  } catch (err) {
    // 에러가 발상했을 때 실행할 코드
  } finally {
    // 항상 실행할 코드
  }
} catch (err) {
  // finall문에서 에러가 발생했을 때 실행할 코드
}
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
