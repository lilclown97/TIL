## 숫자형 메소드(toFixed, toString)

---

> **toFixed()**

- 소수점 자리를 지정해주고 문자형으로 바뀐다

```javascript
const PI = 3.14159265;

console.log(PI.toFixed(2));
console.log(PI.toFixed(5));
console.log(typeof PI.toFixed(2));
console.log(typeof Number(PI.toFixed(2)));

/* 
출력
---
3.14
3.14159
string
number
*/
```

<br>

> **toString()**

- 2~36 범위내의 진수로 바꿔주고 문자형으로 바뀐다.

```javascript
const num = 255;

console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));
console.log(typeof num.toString(2));
console.log(typeof Number(num.toString(2)));

/*
출력
---
11111111
377
ff
string
number
*/
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
