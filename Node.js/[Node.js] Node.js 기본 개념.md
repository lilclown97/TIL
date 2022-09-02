## ⬛ 모듈

---

### ◾ 모듈이란?

<br>

- 전체를 이루는 부품 하나하나(Node.js에서는 Javascript 파일 하나를 의미)

<br>

### ◾ 모듈의 특징

<br>

1. 모듈의 확장자인 .js를 꼭 붙이지 않아도 된다

```javascript
let m = require('./math-tools.js');

let m = require('./math-tools');
```

2. 모듈의 경로를 정확하게 작성해야 한다.

3. require 함수가 리턴하는 객체는 상수로 대입하는 것이 좋다.

```javascript
let m = require('./math-tools.js'); // X

const m = require('./math-tools.js'); // O
```

4. 모듈 안의 모든 것들을 공개할 수 있다.

```javascript
const PI = 3.14;

let author = 'codeIt teacher';

function add(a, b) {
  return a + b;
}

let test = {
  date: '2020-09-20',
  tupes: ['safetyTest', 'performanceTest'],
  printTypes() {
    for (const i in this.types) {
      console.log(this.types[i]);
    }
  },
};

exports.PI = PI;
exports.author = author;
exports.add = add;
exports.test = test;
```

<br>

### ◾ 모듈 내부의 함수 공개하고 불러오기

<br>

- exports : 모듈을 외부에 공개

- require : 외부 모듈을 가져옴

1. 공객하고 싶은 모듈을 하나씩 외부에 공개하는 방법

```javascript
//main-tools.js

function add(a, b) {
  return a + b;
}

exports.add = add;
```

```javascript
//main.js

let m = require('./math-tools.js');

console.log(m.add(1, 2));
```

2. 공개하고 싶은 모듈을 모아서 하나의 객체로 만들고 통째로 외부에 공개하는 방법

```javascript
let calculator = {
  PI: 3.14,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

module.exports = calculator;
```

<br>

### ◾ 코어 모듈

<br>

- 이미 만들어져 있는 모듈 중 Node.js라는 실행 프로그램 안에 이미 포함되어 있는 모듈

![](https://velog.velcdn.com/images/lilclown/post/c7a3595c-9acb-4cce-ab81-0dab83569fb7/image.PNG)

![](https://velog.velcdn.com/images/lilclown/post/9b8bb8e3-fffe-4641-8d7d-1f09dd255e88/image.PNG)

<br>

### ◾ 서드파티 모듈

<br>

- 여러 개발자 또는 회사들(제 3자)이 만들어서 인터넷 공개 저장소에서 제공하는 모듈

![](https://velog.velcdn.com/images/lilclown/post/f5fbfaf3-5051-4c70-8c63-c96edce20b45/image.PNG)

<br><br>

## ⬛ 비동기 프로그래밍과 콜백

---

### ◾ 비동기 실행

<br>

- 특정 작업이 완료되었을 때 실행할 콜백을 등록해두고 바로 다음 코드로 실행을 넘기는 것

```javascript
//동기 실행

const fs = require('fs');

console.log('Start');

let content = fs.readFileSync('./new', 'utf8');
console.log(content);

console.log('Finish');

// Start
// Hello Node.js!
// Finish
```

```javascript
//비동기 실행

const fs = require('fs');

console.log('Start');

let content = fs.readFile('./new', 'utf8');
console.log(content);

console.log('Finish');

// Start
// Finish
// Hello Node.js!
```

<br>

### ◾ 비동기 프로그래밍의 장점

<br>

![](https://velog.velcdn.com/images/lilclown/post/2e29dd29-5e57-439d-a3fc-a27eeb0913c8/image.PNG)

![](https://velog.velcdn.com/images/lilclown/post/c578edb0-1238-44b3-ab0e-9c768c1ab3e5/image.PNG)

- 결과가 주어지는 시간동안 다른 작업을 수행할 수 있어 전체 시간이 훨씬 단축된다.

<br><br>

## ⬛ EventEmitter 객체

---

### ◾ on 메소드

- 이벤트 핸들러를 설정하는 메소드.

```javascript
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('test', () => {
  console.log('Success!');
});

myEmitter.emit('test');
```

<br>

### ◾ emit 메소드

<br>

- 인위적으로 이벤트를 발생시키기 위해 쓰는 메소드

<br>

### ◾ once 메소드

<br>

- 특정 이벤트에 대한 이벤트 핸들러를 등록한다는 점에서 on 메소드와 유사한 메소드이나 이벤트 핸들러가 해당 이벤트에 대해서 딱 한 번만 반응해서 실행되도록 한다.

```javascript
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('test', () => {
  console.log('Success!');
});

myEmitter.emit('test');
myEmitter.emit('test');
myEmitter.emit('test');

// Success!
//
//
```

<br>

### ◾ listeners 메소드

<br>

- 특정 이벤트에 대한 이벤트 핸들러들을 출력해주는 메소드.

```javascript
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('test', () => {
  console.log('A');
});

myEmitter.once('test', () => {
  console.log('B');
});

myEmitter.once('test', () => {
  console.log('C');
});

// [Function], [Function], [Function]
```

<br>

### ◾ off 메소드

<br>

- 이벤트 핸들러를 해제하는 메소드

```javascript
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const callback = () => {
  console.log('Success!');
};

myEmitter.on('test', callback);

myEmitter.off('test', callback);

myEmitter.emit('test');
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
