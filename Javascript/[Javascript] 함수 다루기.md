## ⬛ 함수

---

### ◾ 함수 선언

<br>

- 가장 기본적인 방법으로 `function` 키워드를 통해 함수를 선언

```javascript
// 함수 선언
function sayHi() {
  console.log('Hi!');
}
```

<br>

### ◾ 함수 표현식

<br>

- 함수는 값으로 취급될 수도 있기때문에 변수에 할당해서 함수를 선언

```javascript
// 함수 표현식
const sayHi = function () {
  console.log('Hi!');
};
```

- 함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가진다. 아래와 같이 이름이 없는 함수를 변수에 할당할 때는 변수의 name 프로퍼티는 변수 이름 그 자체를 문자열로 가지게 된다.

```javascript
const sayHi = function () {
  console.log('Hi');
};

console.log(sayHi.name); // sayHi
```

- 함수에 이름을 붙여주게 되면 name 속성을 함수 이름을 문자열로 갖게 된다.

```javascript
const sayHi = function printHiInConsole() {
  console.log('Hi');
};

console.log(sayHi.name); // printHiInConsole
```

- 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 외부에서 함수를 호출할 때 사용할 수는 없다.

```javascript
const sayHi = function printHiInConsole() {
  console.log('Hi');
};

printHiInConsole(); // ReferenceError
```

```javascript
let countdown = function (n) {
  console.log(n);

  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

countdown(5);
```

<br>

### ◾ 즉시 실행 함수 (IIFE)

<br>

- 함수 선언과 동시에 즉시 실행되는 함수를 가리켜 즉시 실행 함수, Immediately Invoked Function Expression, IIFE라고 부른다.

- 함수 선언 부분을 소괄호로 감싼 다음에 바로 뒤에 함수를 실행하는 소괄호를 한번 더 붙여주는 방식

```javascript
(function () {
  console.log('Hi!');
})();
```

<br>

### ◾ 다양한 함수의 형태

<br>

```javascript
// 변수에 할당해서 활용
const printJS = function () {
  console.log('JavaScript');
};

// 객체의 메소드로 활용
const codeit = {
  printTitle: function () {
    console.log('Codeit');
  },
};

// 콜백 함수로 활용
myBtn.addEventListener('click', function () {
  console.log('button is clicked!');
});

// 고차 함수로 활용
function myFunction() {
  return function () {
    console.log('Hi!?');
  };
}
```

<br><br>

## ⬛ Parameter, Arguments

---

### ◾ 파라미터의 기본 값

<br>

- 함수의 파라미터는 기본 값을 가질 수 있는데 기본값이 있는 파라미터는 함수를 호출할 때 아규먼트를 전달하지 않으면 함수 내부의 동작은 이 파라미터의 기본값을 가지고 동작

```javascript
function sayHi(name = 'Codeit') {
  console.log(`Hi! ${name}`);
}

sayHi('JavaScript'); // Hi! JavaScript
sayHi(); // Hi! Codeit
```

<br>

### ◾ arguments 객체

<br>

- 자바스크립트 함수 안에는 `arguments`라는 독특한 객체가 존재.
  `arguments` 객체는 함수를 호출할 때 전달한 아규먼트들을 배열의 형태로 모아둔 유사 배열 객체로 함수를 호출할 때 전달되는 아규먼트의 개수가 불규칙적일 때 유용하게 활용

```javascript
function printArguments() {
  // arguments 객체의 요소들을 하나씩 출력
  for (const arg of arguments) {
    console.log(arg);
  }
}

printArguments('Young', 'Mark', 'Koby');
```

<br>

### ◾ Rest Parameter

<br>

- 파라미터 앞에 마침표 세 개를 붙여주면, 여러 개로 전달되는 아규먼트들을 배열로 다룰 수 있다.
  `arguments` 객체는 유사 배열이기 때문에 배열의 메소드를 활용할 수 없는 반면, rest parameter는 배열이기 때문에 배열의 메소드를 자유롭게 사용할 수 있다.

```javascript
function printArguments(...args) {
  // args 객체의 요소들을 하나씩 출력
  for (const arg of args) {
    console.log(arg);
  }
}

printArguments('Young', 'Mark', 'Koby');
```

- rest parameter는 다른 일반 파라미터들과 함께 사용될 수도 있다

```javascript
function printRankingList(first, second, ...others) {
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRankingList('Tommy', 'Jerry', 'Suri', 'Sunny', 'Jack');
```

<br><br>

## ⬛ Arrow Function

---

### ◾ Arrow Function

<br>

- 익명 함수를 좀 더 간결하게 표현할 수 있도록 ES2015에서 새롭게 등장한 함수 선언 방식
  일반 함수와 다르게 arguments 객체가 없고, this가 가리키는 값이 일반 함수와 다르다.

```javascript
// 화살표 함수 정의
const getTwice = (number) => {
  return number * 2;
};

// 콜백 함수로 활용
myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
});
```

- 화살표 함수는 다양한 상황에 따라 축약형으로 작성될 수 있다.

```javascript
// 1. 함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
  return number * 2;
};

// 파라미터를 감싸는 소괄호 생략 가능
const getTwice = (number) => {
  return number * 2;
};

// 2. 함수 동작 부분이 return문만 있을 때
const sum = (a, b) => {
  return a + b;
};

// return문과 중괄호 생략 가능
const sum = (a, b) => a + b;
```

<br><br>

## ⬛ this

---

### ◾ this

<br>

- 웹 브라우저에서 this가 사용될 때는 전역 객체, Window 객체를 가지게 되지만 객체의 메소드를 정의하기 위한 함수 안에서는 메소드를 호출한 객체를 가리키게 된다

```javascript
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다!
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
