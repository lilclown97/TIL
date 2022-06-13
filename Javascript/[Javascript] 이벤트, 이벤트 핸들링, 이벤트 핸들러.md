## 이벤트, 이벤트 핸들링, 이벤트 핸들러

---

> **이벤트**

- 웹 페이지에서 발생하는 대부분의 일
  ex) 클릭, 스크롤, 키보드 입력 등

<br>

> **이벤트 핸들링**

- 자바스크립트를 통해 이벤트를 다루는 일

<br>

> **이벤트 핸들러**

- 이벤트 리스너 라고도 하며, 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 구현한 코드

<br>

> **예제**

- index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>버튼 클릭 이벤트</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h2 id="title">정답일까?</h2>
    <button id="grade">채점</button>
    <script src="index.js"></script>
  </body>
</html>
```

- index.js

```javascript
const btn = document.querySelector('#grade');

console.log(btn);

btn.onclick = () => alert('정답입니다.');
```

- 결과

![](https://velog.velcdn.com/images/lilclown/post/d3744ce6-e92f-4e91-bb37-6ff6ea836836/image.PNG)

- 이벤트 핸들러를 등록하는 다른 방법

  - 자주 쓰이지는 않지만 html 태그에 직접 표시하는 방법도 있다.

```html
<button id="grade" onclick="alert('정답입니다.')">채점</button>
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
