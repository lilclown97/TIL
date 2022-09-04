## ⬛ async/await

---

### ◾ async/await 구문

<br>

- Promise 객체를 사용할 때 then 메소드 등을 사용하지 않고 코드를 작성

- 동기 실행 코드처럼 코드를 훨씬 더 간단하고 편하게 작성할 수 있으며 가독성이 향상

```javascript
//Promise

/* fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); }); */

function fetchAndPrint() {
  console.log(2);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(7);
      return response.text();
    })
    .then((result) => {
      console.log(result);
    });
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
```

```javascript
//async/await

/* fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); }); */

async function fetchAndPrint() {
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7);
  const result = await response.text();
  console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
```

<br>

### ◾ async 함수가 리턴하는 Promise 객체

<br>

1. 어떤 값을 리턴하는 경우

   - Promise 객체를 리턴하는 경우

     - 해당 Promise 객체와 동일한 상태와 작업 성공/실패 결과를 가진 Promise 객체를 리턴

     ![](https://velog.velcdn.com/images/lilclown/post/5989e662-4c59-4778-bc67-a2ed9bd71cd2/image.PNG)

   - Promise 객체 이외의 값을 리턴하는 경우

     - fulfilled 상태이면서 리턴된 값을 작업 성공 결과로 가진 Promise 객체를 리턴

     ![](https://velog.velcdn.com/images/lilclown/post/171dd78d-07b9-4c41-8cc1-27705c3302aa/image.PNG)

2. 아무 값도 리턴하지 않는 경우

   - 자바스크립트에서는 아무런 값도 리턴하지 않는 함수에서는 undefined를 리턴.

   - fulfilled 상태이면서 undefined를 작업 성공 결과로 가진 Promise 객체가 리턴

   ![](https://velog.velcdn.com/images/lilclown/post/c13ab199-3ae5-4fe3-858a-f2843ab4b6c3/image.PNG)

3. async 함수 내부에서 에러가 발생했을 때

   - rejected 상태이면서 해당 에러 객체를 작업 실패 정보로 가진 Promise 객체가 리턴

   ![](https://velog.velcdn.com/images/lilclown/post/55e9f8fc-a8c6-4509-9883-bc5b8cb90d14/image.PNG)

<br>

### ◾ async를 붙이는 위치

<br>

```javascript
// 1) Function Declaration (함수 선언식)
async function example1(a, b) {
  return a + b;
}

// 2-1) Function Expression(Named) (함수 표현식)
const example2_1 = async function add(a, b) {
  return a + b;
};

// 2-2) Function Expression(Anonymous) (함수 표현식)
const example2_2 = async function (a, b) {
  return a + b;
};

// 3-1) Arrow Function (화살표 함수)
const example3_1 = async (a, b) => {
  return a + b;
};

// 3-2) Arrow Function(shortened) (화살표 함수)
const example3_2 = async (a, b) => a + b;
```

<br><br>

## ⬛ catch, finally

---

- Promise와 동일하게 에러를 잡아내는 catch문은 try~catch문으로 Promise 객체의 상태와 상관없이 항상 실행하는 finally문을 사용할 수 있다.

```javascript
async function fetchAndPrint() {
  try {
    const response = await fetch('URL');
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
