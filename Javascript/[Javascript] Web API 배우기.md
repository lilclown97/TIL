## ⬛ JSON

---

### ◾ JSON이란?

<br>

- JavaScript Object Notation의 약자로 자바스크립트 언어의 문법을 빌려 만들어진 데이터 포멧. 자바스크립트의 문법과 유사

<br>

### ◾ 자바스크립트 객체 표기법과 JSON 문법의 차이

<br>

1. JSON에는 프로퍼티의 이름과 값을 표현하는 방식에 제한이 있다.

   - JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표로 감싸줘야한다.

   - JSON에서는 값이 문자열인 경우 큰따옴표를 사용해야한다.

2. JSON에서는 표현할 수 없는 값들이 있다.

   - undefined, NaN, infinity 등을 JSON에서는 사용할 수 없다.

3. JSON에는 주석을 추가할 수 없다.

<br>

### ◾ JSON 데이터를 객체로 변환하기

<br>

```javascript
fetch('URL')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
  });
```

<br><br>

## ⬛ GET, POST, PUT, DELETE

---

![](https://velog.velcdn.com/images/lilclown/post/9325a493-af25-451d-9242-629a41fce206/image.PNG)

### ◾ GET

<br>

- 기존 데이터를 조회하는 리퀘스트

```javascript
fetch('URL')
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
```

<br>

### ◾ POST

<br>

- 새 데이터를 추가하는 리퀘스트

```javascript
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering',
};

fetch('URL', {
  method: 'POST',
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
```

<br>

### ◾ PUT

<br>

- 기존 데이터를 수정하는 리퀘스트

```javascript
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering',
};

fetch('URL', {
  method: 'PUT',
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
```

<br>

### ◾ DELETE

<br>

- 기존 데이터를 삭제하는 리퀘스트

```javascript
fetch('URL', {
  method: 'DELETE',
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
```

<br><br>

## ⬛ Web API, REST API

---

### ◾ Web API

<br>

- 프론트엔드 개발자들과 백엔드 개발자들이 모여 '프론트엔드에서 이 URL로 이렇게 생긴 리퀘스트를 보내면, 백엔드에서 이런 처리를 하고 이런 리스폰스를 보내주는 것으로 정하자' 와 같은 논의를 하고 이런 내용들을 정리한 후에 개발을 시작

```javascript
직원 정보 추가

https://learn.codeit.kr/api/members

(1) Request
- Head
Method : POST
...

- Body
{
  "name": "Jerry",
  "email: "jerry@codeitshopping.kr",
  "department": "engineering",
}
...

(2) Response
Success인 경우 :
- Head
...
- Body
{
  "id": "[부여된 고유 식별자 값]",
  "name": "Jerry",
  "email": "jerry@codeshopping.kr"
  "department": "engineering",
}
Fail인 경우 :
```

<br>

### ◾REST API

<br>

- Roy Fielding이 제시한 개념으로 웹이 갖추어야 할 이상적인 아키텍처로 6가지의 기준이 있다

  - Client-Server : Client-Server 구조를 통해 양측의 관심사를 분리

  - Stateless : Client가 보낸 각 리퀘스트에 관해서 Server는 그 어떤 context도 저장하지 않는다.

  - Cache : Cache를 활용해서 네트워크 비용을 절감

  - Uniform Interface : 리소스를 URI로 식별할수 있어야한다, Client와 Server는 둘 다 리소스를 직접적으로 다루는 게 아니라 리소스의 표현을 다뤄야한다, Client는 매 리퀘스트마다 필요한 모든 정보를 담아서 전송해야 한다, 리스폰스에는 리소스의 표현, 각종 메타 정보들뿐만 아니라 계속 새로운 상태로 넘어갈 수 있도록 해주는 링크들도 포함되어 있어야 한다.

  - Layered System : Client와 Server 사이에는 프록시, 게이트웨이와 같은 중간 매개 요소를 두고 보안 로드 밸런싱 등을 수행할 수 있어야 한다.

  - Code on Demand : Client는 받아서 바로 실행할 수 있는 applet이나 script 파일을 Server로부터 받을 수 있어야 한다.

<br><br>

## ⬛ Status Code

---

- 요청이 성공적으로 완료되었는지 알려주는 상태 메세지를 담은 코드

- [Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
