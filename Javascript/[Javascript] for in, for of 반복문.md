## for in, for of 반복문

---

> **for in**

- 객체의 속성들을 반복하여 작업을 수행할 수 있는 반복분

```javascript
let Object = {
  name: '윤영성',
  age: 26,
  gender: '남',
};

for (let key in Object) {
  console.log(key, Object[key]);
}

/*
출력
name 윤영성
age 26
gender 남
*/
```

<br>

> **for of**

- 배열의 요소들을 반복하여 작업을 수행할 수 있는 반복분

- for in 반복문도 사용할 수 있지만 for in 반복문은 객체에 최적화 되어있어 length의 값이 할당되는 등 예기치 못한 문제가 발생할 수 있다.

```javascript
let Array = ['name', 26, true];

for (let element of Array) {
  console.log(element);
}

/*
출력
name
26
true
*/
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
