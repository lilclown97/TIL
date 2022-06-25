## ⬛ HTML 속성 다루기

---

### ◾ HTML 속성

대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환이 되지만 표준 속성이 아닌 경우에는 프로퍼티로 변환이 안된다.

다음과 같은 메소드를 활용하여 표준이 아닌 속성들을 다룰 수 있다.

<br>

### ◾ HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>JS with Codeit</title>
  </head>
  <body>
    <div>
      <h1>오늘 할 일</h1>
      <ol id="today">
        <li class="item">자바스크립트 공부</li>
        <li class="item">고양이 화장실 청소</li>
        <li class="item">고양이 장난감 쇼핑</li>
      </ol>
      <h1>내일 할 일</h1>
      <ol id="tomorrow" href="https://www.codeit.kr">
        <li class="item"><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript">자바스크립트 공부</a></li>
        <li class="item">뮤지컬 공연 예매</li>
        <li class="item">유튜브 시청</li>
      </ol>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

<br>

### ◾ 속성 접근

```javascript
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));
```

![](https://velog.velcdn.com/images/lilclown/post/960e8c1d-538b-4483-b1ec-08e05e577613/image.PNG)

<br>

### ◾ 속성 추가(수정)

```javascript
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 수정

console.log(tomorrow);
```

![](https://velog.velcdn.com/images/lilclown/post/714fd256-7a13-438f-8d4d-e1e57d421c81/image.PNG)

<br>

### ◾ 속성 제거

```javascript
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class');

console.log(tomorrow);
```

![](https://velog.velcdn.com/images/lilclown/post/1bb09f98-2dd5-4f49-80fa-2eea6cb0ef36/image.PNG)

<br><br>

## ⬛ HTML 스타일 다루기

---

### ◾ Html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <title>JS with Codeit</title>
  </head>
  <body>
    <div>
      <h1 class="title">오늘 할 일</h1>
      <ol id="today" class="list today">
        <li class="item">자바스크립트 공부</li>
        <li class="item">고양이 화장실 청소</li>
        <li class="item">고양이 장난감 쇼핑</li>
      </ol>
      <h1 class="title">내일 할 일</h1>
      <ol id="tomorrow" class="list tomorrow">
        <li class="item">자바스크립트 공부</li>
        <li class="item">뮤지컬 공연 예매</li>
        <li class="item">유튜브 시청</li>
      </ol>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

<br>

### ◾ CSS

```css
.done {
  opacity: 0.5;
  text-decoration: line-through;
}
```

<br>

### ◾ ClassList

```javascript
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item = today.children[1];
item.classList.add('done'); //done style 추가
item.classList.remove('done'); //done style 삭제
item.classList.toggle('done'); //done style 추가, 삭제

console.log(today);
```

![](https://velog.velcdn.com/images/lilclown/post/55382033-caa8-4bad-a853-1544c012bd4f/image.PNG)

<br>

### ◾ ClassName

```javascript
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.className
today.children[1].className = 'done'; //done style 추가

console.log(today);
```

![](https://velog.velcdn.com/images/lilclown/post/2051abe1-d057-47e2-b29d-820b56d1772e/image.PNG)

<br>

### ◾ style

```javascript
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';

console.log(today);
```

![](https://velog.velcdn.com/images/lilclown/post/abd524bf-e1ec-4e7d-a9dd-249d3a1edb2b/image.PNG)

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
