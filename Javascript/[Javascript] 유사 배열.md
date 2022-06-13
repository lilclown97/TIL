## 유사 배열

---

> **유사 배열이란?**

- Array-Like Object, 유사 객체 배열이라는 뜻으로 배열처럼 보이지만 `key`에 index 값으로 되어있는 length 값을 가진 객체라고 볼 수 있다.

- javascript에서 [태그 선택](https://velog.io/@lilclown/Javascript23)으로 element를 가져오면 유사 배열의 형태로 가져온다.

<br>

> **유사 배열 특징**

- 숫자 형태의 indexing이 가능

- length 프로퍼티 존재

- 배열의 기본 메소드를 사용할 수 없다.

- `Array.isArray(유사배열)`의 리턴값은 false

<br>

> **예제**

- index.html

```javascript
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>버튼 클릭 이벤트</title>
  </head>
  <body>
    <h2 id="title">정답일까?</h2>
    <button id="grade" class="btn">채점</button>
    <button id="grade" class="btn">채점2</button>
    <button id="grade" class="btn">채점3</button>
    <script src="index.js"></script>
  </body>
</html>
```

- index.js

```javascript
const Id = document.getElementById('title');
const Class = document.getElementsByClassName('btn');
const Tag = document.getElementsByTagName('h2');
const Css = document.querySelector('.btn');
const Css2 = document.querySelectorAll('.btn');

console.log(Id);
console.log(Class);
console.log(Tag);
console.log(Css);
console.log(Css2);
```

- 유사 배열

![](https://velog.velcdn.com/images/lilclown/post/b9979007-892a-45fd-a9d7-a7a6733837b7/image.PNG)

배열처럼 보이고 대괄호 표기법으로 접근이 가능하나 사실은

```javascript
{
  0: button#grade.btn,
  1: button#grade.btn,
  2: button#grade.btn,
  length: 3
}
```

이렇게 생긴 객체라고 할 수 있다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
