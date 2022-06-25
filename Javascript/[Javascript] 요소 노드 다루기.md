## ⬛ 요소 노드 다루기

---

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
        <li>자바스크립트 공부</li>
        <li>고양이 화장실 청소</li>
        <li>고양이 장난감 쇼핑</li>
      </ol>
      <h1>내일 할 일</h1>
      <ol id="tomorrow">
        <li>자바스크립트 공부</li>
        <li>뮤지컬 공연 예매</li>
        <li>유튜브 시청</li>
      </ol>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

<br>

### ◾ 요소 노드 만들기

```javascript
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');
console.log(first);
```

![](https://velog.velcdn.com/images/lilclown/post/f92e466a-0df3-4fc9-9b4c-f065ee9f9187/image.PNG)

<br>

### ◾ 요소 노드 꾸미기

```javascript
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');
console.log(first);

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';
```

![](https://velog.velcdn.com/images/lilclown/post/5b94b1db-26c1-48a5-884f-eec5d8e58c54/image.PNG)

<br>

### ◾ 요소 노드 추가

```javascript
const tomorrow = document.querySelector('#tomorrow');
console.log(tomorrow);
// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);
```

![](https://velog.velcdn.com/images/lilclown/post/d59f34f8-7d93-426d-8c16-71b683c5b538/image.PNG)

<br>

```javascript
const tomorrow = document.querySelector('#tomorrow');

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);
```

![](https://velog.velcdn.com/images/lilclown/post/8e508dda-16f9-4b7f-a2dc-6f40de1ce290/image.PNG)

<br>

### ◾ 요소 노드 이동

```javascript
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);
```

![](https://velog.velcdn.com/images/lilclown/post/9fee52bf-eb1f-4f6b-82ec-58253b50c818/image.PNG)

```javascript
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 이동하기: prepend, append, before, after
tomorrow.children[1].after(today.children[1]);
```

<br>

아래와 같이 `before`를 사용해서 같은 자리로 이동 하는 것도 가능하다.

<br>

```javascript
tomorrow.children[2].before(today.children[1]);
```

```javascript
tomorrow.lastElementChild.before(today.children[1]);
```

![](https://velog.velcdn.com/images/lilclown/post/f78fc9d4-fcb1-404e-b2be-217ccfac0525/image.PNG)

<br>

### ◾ 요소 노드 삭제

```javascript
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
tomorrow.remove(); //전체 삭제
today.children[2].remove(); //index 값만 삭제
```

![](https://velog.velcdn.com/images/lilclown/post/a254b22c-08ba-4ba8-8e10-49877d5549c8/image.PNG)

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
