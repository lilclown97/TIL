## ⬛ DOM

---

### ◾ DOM이란?

- Document Object Model의 약자로 '문서 객체 모델'

- 웹페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것

<br>

### ◾ document 객체 출력

```javascript
console.log(document); //DOM에 해당하는 HTML 형태로 출력
console.log(typeof document); //Object
console.dir(document); //DOM을 객체 형태로 출력
```

![](https://velog.velcdn.com/images/lilclown/post/aeec11bd-9c03-483a-9488-3771f3c07918/image.PNG)

<br><br>

## ⬛ DOM tree

---

### ◾ 부모 태그, 자식 태그

- 태그 안의 태그 형태의 계층 구조를 이루고 있는데 태그가 태그로 감싸져 있을때 그 관계를 부모태그, 자식 태그라고 한다.

![](https://velog.velcdn.com/images/lilclown/post/c4ed8b60-ebf4-4911-bd25-95a7cbfb1b95/image.PNG)

<br>

### ◾ 노드(node)

- 각 객체를 노드라고 표현

- 부모 노드(Parent Node), 자식 노드(Child Node) : 각 노드간의 관계

- 형제 노드(Sibling Node) : 같은 위치의 노드

- 요소 노드(Element Node) : 태그를 표현하는 노드

- 텍스트 노드(Text Node) : 문자를 표현하는 노드

- 뿌리 노드(Root Node) : 부모 노드가 없는 노드

- 잎 노드(Reaf Node) : 자식 노드가 없는 노드

![](https://velog.velcdn.com/images/lilclown/post/10a0c960-3379-4cdf-ac8c-0f691daaa044/image.PNG)

<br>

### ◾ DOM tree를 활용하여 태그 선택

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>
<body>
  <div id="content">
    <h2 id="title-1">Cat-1</h1>
    <ul id="list-1">
      <li>Ragdoll</li>
      <li>British Shorthair</li>
      <li>Scottish Fold</li>
      <li>Bengal</li>
      <li>Siamese</li>
      <li>Maine Coon</li>
      <li>American Shorthair</li>
      <li>Russian Blue</li>
    </ul>
    <h2 id="title-2">Cat-2</h1>
    <ul id="list-2">
      <li>Sphynx</li>
      <li>Munchkin</li>
      <li>Persian</li>
      <li>Norwegian Forset</li>
      <li>Turkish Angora</li>
      <li>Bombay</li>
      <li>Selkirk Rex</li>
      <li>Munchkin</li>
    </ul>
  </div>
  <script src="index.js"></script>
</body>
</html>
```

**1. 자식 요소 노드**

```javascript
const myTag = document.querySelector('#list-1');

console.log(myTag); //list-1 출력

console.log(myTag.children); //list-1의 자식 노드 출력
console.log(myTag.children[1]); //list-1의 index 1번째 자식 노드 출력
console.log(myTag.firstElementChild); //list-1의 첫번째 자식 노드 출력
console.log(myTag.lastElementChild); //list-1의 마지막 자식 노드 출력
```

![](https://velog.velcdn.com/images/lilclown/post/0b8147f4-f02e-44ae-8c54-07781c139043/image.PNG)

**2. 부모 요소 노드**

```javascript
const myTag = document.querySelector('#list-1');

console.log(myTag.parentElement); //list-1의 부모 노드인 content 출력
```

![](https://velog.velcdn.com/images/lilclown/post/781d42f0-2a64-4794-85c0-08cba6d9925e/image.PNG)

**3. 형제 요소 노드**

```javascript
const myTag = document.querySelector('#list-1');

console.log(myTag.previousElementSibling); //list-1의 이전 형제 노드 출력
console.log(myTag.nextElementSibling); //list-1의 다음 형제 노드 출력
```

![](https://velog.velcdn.com/images/lilclown/post/35f2b31b-4a5c-4de9-9cea-732c9ebd9f47/image.PNG)

<br>

### ◾ 요소 노드 주요 프로퍼티

**1. innerHTML**

- 요소 안에 있는 HTML을 문자열로 리턴(내부에 있는 줄 바꿈이나 들여쓰기 포함)

```javascript
const myTag = document.querySelector('#list-1');

// innerHTML
console.log(myTag.innerHTML);
```

![](https://velog.velcdn.com/images/lilclown/post/9e02ffb5-ec68-41ec-906d-936ae1798f73/image.PNG)

- 요소를 수정하거나 추가가 가능하다.

```javascript
myTag.innerHTML = '<li>Exotic</li>'; //요소 수정
myTag.innerHTML += '<li>Exotic</li>'; //요소 추가
```

**2. outerHTML**

- 해당 요소를 포함한 전체 HTML을 문자열로 리턴(내부에 있는 줄 바꿈이나 들여쓰기 포함)

```javascript
const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);
```

![](https://velog.velcdn.com/images/lilclown/post/b0ddcf96-aa8f-41f7-8341-e076f6731f0c/image.PNG)

- 해당 요소의 수정이 아닌 처음 할당 값이 사라지고 새로운 값을 생성

```javascript
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';
```

**3. textContent**

- 요소 안의 내용 중 HTML 코드를 제외하고 문자열로 리턴(내부에 있는 줄 바꿈이나 들여쓰기 포함)

```javascript
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
```

![](https://velog.velcdn.com/images/lilclown/post/038ccb69-d7a6-44d3-af2d-def8c64e2090/image.PNG)

- innerHTML과 같이 요소의 수정이 가능하지만 태그를 입력하게되면 특수문자 또한 문자로 인식하여 그대로 출력

```javascript
myTag.textContent = 'new text!';
myTag.textContent = '<li>new text!</li>';
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
