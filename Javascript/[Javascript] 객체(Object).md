## 객체(Object)

---

> **객체란**

- 자바스크립트는 객체 기반 프로그래밍 언어로 자바스크립트를 구성하는 거의 모든 것을 객체라고 볼 수 있다.

- `key`와 `value`로 이루어진 `property`, 즉 속성으로 구성된 집합

```javascript
object = {
  key: value, //property
};
```

<br>

> **객체 속성 네이밍 조건**

- 첫 번째 글자는 문자, 밑줄, 달러 기호 중 하나로 시작

- 띄어쓰기 금지 (어쩔 수 없이 사용해야 할 경우 `''`를 사용하여 문자열로 사용)

- 하이픈 금지 (어쩔 수 없이 사용해야 할 경우 `''`를 사용하여 문자열로 사용)

<br>

> **객체 속성 접근**

- 점 표기법

```javascript
let myInfo = {
  name: '윤영성',
  age: 26,
  gender: '남',
};

console.log(myInfo.name); //'윤영성'
```

- 대괄호 표기법

  - 점 표기법과 대괄호 표기법 둘다 같은 값을 가져올 수 있으나 `key`값이 `''`를 사용하여 추가된 경우 대괄호 표기법을 사용하여 접근해야한다.

```javascript
let myInfo = {
  'na-me': '윤영성',
  age: 26,
  gender: '남',
};

console.log(myInfo.name); //undefined
console.log(myInfo['na-me']); //'윤영성'
```

<br>

> **속성 추가, 변경, 삭제, 확인**

- 추가

```javascript
let myInfo = {
  name: '윤영성',
};

myInfo.age = 26; //age 속성 추가
myInfo['gender'] = '남'; //gender 속성 추가

console.log(myInfo.age); //26
console.log(myInfo.gender); //'남'
```

- 변경

```javascript
let myInfo = {
  name: '윤영성',
};

myInfo.name = '홍길동'; //이미 존재하는 속성일 경우 value 값이 변경

console.log(myInfo.name); //'홍길동'
```

- 삭제

```javascript
let myInfo = {
  name: '윤영성',
  age: 26,
  gender: '남',
};

delete myInfo.name; //name 속성 삭제

console.log(myInfo.name); //undefined
```

- 확인

  - `key in object`를 이용하여 속성이 있다면 `true`, 없다면 `false`를 출력

```javascript
let myInfo = {넓이
  name: '윤영성',
  age: 26,
  gender: '남',
};

console.log('name' in myInfo); //true
```

<br>

> **객체 메소드**

- 객체의 `value` 부분에 함수를 생성하여 `key` 값으로 함수를 선언하는 것도 가능하다

- 함수의 이름이 같아야 하는 경우, 예를 들면 삼각형의 넓이와 사각형의 넓이를 구하는 함수인데 함수 이름을 `area`라고 하고 도형이라는 뜻의 `figure` 라는 객체에 각각 `triangle`, `square`라는 `key` 값을 가진 속성으로 추가하여 사용할 수 있다.

```javascript
let figure = {
  triangle: function area(width, height) {
    return (width * height) / 2;
  },
  square: function area(width, height) {
    return width * height;
  },
};

console.log(figure.triangle(3, 2)); //3
console.log(figure.square(3, 2)); //6
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
