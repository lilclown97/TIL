## 함수 스코프, 블록 스코프

---

> **지역변수와 전역변수**

- 지역 변수(Local Variable)

  - if문, for문, 함수 등 블록({}) 내부에서 선언된 변수로 함수가 종료되면 소멸하고 함수 외부에서는 접근이 불가능

- 전역 변수(Global Variable)

  - 블록 외부에서 선언된 변수로 프로그램 전체에서 접근할 수 있는 변수

- `var`는 함수 내부에서만 지역 변수가 되고 다른 블록문에서는 전역 변수가 된다

- `let`, `const`는 어떤 블록문에서도 내부에서 선언되면 지역 변수가 된다

- 아주 특별한 경우가 아니면 무분별한 전역 변수의 생성을 자제하고 스코프를 명확하게 하기 위해 되도록 `let`, `const`를 사용하는 습관을 들이는 것이 좋을 것 같다.

<br>

> **함수 스코프**

- 함수가 선언되면 발생하는 접근 범위, 스코프

- 함수 내부에서 선언한 변수는 해당 함수 내에서만 접근 가능

- var은 함수 내부에서만 지역 변수로 유지 되고 나머지 블록에서는 전역 변수로 취급된다.

<br>

> **함수 스코프 예제**

- 함수 내부에서 console.log

```javascript
var scope1 = 'scope1';

function scopeTest() {
  var scope2 = 'scope2';
  console.log(scope1, scope2);
}

scopeTest();

//실행결과
//scope1 scope2
```

- 함수 외부에서 console.log

```javascript
var scope1 = 'scope1';

function scopeTest() {
  var scope2 = 'scope2';
}

console.log(scope1, scope2);

//실행결과
//scope2 is not defined
```

- `var`는 함수 내부에서만 지역 변수

```javascript
if (true) {
  var scope1 = 'scope1';
}
console.log(scope1);

//실행결과
//scope1
```

<br>

> **블록 스코프**

- if문, for문 등 블록 단위 ({}), 내에서만 유효 범위를 갖게 하는 스코프

<br>

> **블록 스코프 예제**

- if문

```javascript
if (true) {
  let scope1 = 'scope1';
  console.log(scope1);
}
console.log(scope1);

//실행결과
//scope1
//scope1 is not defined
```

- for문

```javascript
for (let i = 0; i < 1; i++) {
  console.log(i);
}

console.log(i);

//실행결과
//0
//i is not defined
```

<br>

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[블록 스코프, 함수 스코프의 차이 (javascript)](https://mong-blog.tistory.com/entry/%EB%B8%94%EB%A1%9D-%EC%8A%A4%EC%BD%94%ED%94%84-%ED%95%A8%EC%88%98-%EC%8A%A4%EC%BD%94%ED%94%84%EC%9D%98-%EC%B0%A8%EC%9D%B4-javascript?category=967416)**
