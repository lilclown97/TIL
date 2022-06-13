## 태그 선택

---

> **태그 선택 메소드**

|                  메소드                  |               의미               |                        결과                         |
| :--------------------------------------: | :------------------------------: | :-------------------------------------------------: |
|      document.getElementById('id')       |  HTML id속성으로 태그 선택하기   |               id에 해당하는 태그 하나               |
| document.getElementsByClassName('class') | HTML class속성으로 태그 선택하기 |     class에 해당하는 태그 모음(HTMLCollection)      |
|   document.getElementsByTagName('tag')   | HTML 태그 이름으로 태그 선택하기 |      tag에 해당하는 태그 모음(HTMLCollection)       |
|      document.querySelector('css')       |    css 선택자로 태그 선택하기    | css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나 |
|     document.querySelectorAll('css')     |    css 선택자로 태그 선택하기    |      css 선택자에 해당하는 태그 모음(NodeList)      |

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

- console

![](https://velog.velcdn.com/images/lilclown/post/f378eb6f-2d0d-408d-bc6f-fa16265d32e2/image.PNG)

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
