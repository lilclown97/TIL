## CORS

---

> **CORS란?**

- 교차 출처 리소스 공유 (Cross-origin resource sharing)의 약자

- 현재 브라우저로 접속중인 페이지에서 자바스크립트를 이용해 다른 도메인 또는 포트를 가진 주소로 요청을 하는 경우, 해당 리소스에 접근을 허용했는지 확인해 보안을 높이는 동작

<br>

> **HTTP 요청 특징**

- HTML ➡ 기본적으로 Cross-Origin 정책을 따름

  - link 태그에서 다른 origin의 css 등의 리소스에 접근하느 것이 가능

  - img 태그 등에서 다른 리소스에 접근하는 것이 가능

- script 태그 내 ➡ 기본적으로 Same-Origin 정책을 따름

  - 자바스크립트는 서로 다른 도메인에 대한 요청을 보안상 제한

  - 이 정책을 Same-Origin-Policy라 한다.

<br>

> **CORS 문제가 발생하는 이유**

- 브라우저는 주소(origin)가 다른 경우 리소스의 출처가 다르다고 판단

  - 브라우저가 요청하려고 시도했던 주소에 "OPTIONS" 메서드를 이용해 요청을 의도적으로 허용하고 있는게 맞는지 확인

  - 요청을 받은 서버는 평소와 똑같이 응답

  - 응답을 받은 브라우저는 요청에 대한 허가를 받지 못했다고 판단하고 CORS 에러 발생

---

**브라우저에 구현된 비동기 요청 API에서만 동작하는 규칙으로 Thunder Client와 같은 API Client를 이용해 요청하는 경우에는 발생하지 않는다**

---

<br>

> **Origin**

![](https://velog.velcdn.com/images/lilclown/post/56efc8d8-629a-446e-a18f-8196cd3176ce/image.PNG)

<br>

> **CORS 문제 발생 테스트**

1. 서버 켜기

```
nodemon app.js
```

2. CORS test

- [test-cors](https://www.test-cors.org/)

- 서버 입력 창에 `http://localhost:3000/cors-test` 를 입력하고 'Send Request'를 누르면 CORS 에러가 발생한다

![](https://velog.velcdn.com/images/lilclown/post/99380579-f890-4632-9fef-b4c23b8854ee/image.PNG)

3. CORS 문제 해결

---

서버에 Access-Control-Allow-Origin 응답 헤더를 추가하면 해결된다

모든 요청에 위와 같은 헤더를 추가하는 모듈인 `cors` 모듈을 사용한다

---

- cors 모듈 설치

```
npm install cors
```

- 미들웨어 추가

```javascript
//cors 모듈 require
const cors = require('cors');

//모든 요청 허용
app.use(cors());

//특정 도메인만 허용
const corsOption = {
  origin: 'https://www.test-cors.org',
  credentials: true,
};

app.use(cors(corsOption));
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[[WEB] 📚 CORS 개념 💯 완벽 정리 & 해결 방법 👏](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou)**
