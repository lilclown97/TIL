## REST

---

> **정의**

- Representational State Transfer의 약자

- 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것.

  - HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시

  - HTTP Method(POST, GET, PUT, DELETE)를 통해

  - 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미

<br>

> **REST 구성 요소**

- 자원(Resource) : HTTP URI

- 자원에 대한 행위(Verb) : HTTP Method

- 자원에 대한 행위의 내용 (Representations) : HTTP Message Pay Load

<br>

> **REST의 특징**

- Server-Client(서버-클라이언트 구조)

- Stateless(무상태)

- Cacheable(캐시 처리 가능)

- Layered System(계층화)

- Uniform Interface(인터페이스 일관성)

<br>

> **REST의 장단점**

- **장점**

  - HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구출할 필요가 없다.

  - HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있게 해 준다.

  - HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능

  - Hypermedia API의 기본을 충실히 지키면서 범용성을 보장

  - REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악.

  - 여러 가지 서비스 디자인에서 생길 수 있는 문제를 최소화

  - 서버와 클라이언트의 역할을 명확하게 분리

- **단점**

  - 표준이 자체가 존재하지 않아 정의가 필요

  - 사용할 수 있는 메소드가 4가지

  - HTTP Method 형태가 제한적

  - 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header 정보의 값을 처리해야 하므로 전문성이 요구

  - 구형 브라우저에서 호환이 되지 않아 지원해주지 못하는 동작이 많다.(익스폴로어)

<br><br>

## REST API

---

> **정의**

- REST의 원리를 따르는 API

<br>

> **REST API 설계 예시**

- URI는 동사보다는 명사를, 대문자보다는 소문자를 사용

```
Bad Example : http://localhost:5000/Posting
Good Example : http://localhost:5000/posts
```

- 마지막에 슬래시 (/)를 포함하지 않는다.

```
Bad Example : http://localhost:5000/posts/
Good Example : http://localhost:5000/posts
```

- 언더바 대신 하이폰을 사용

```
Bad Example : http://localhost:5000/blog_post
Good Example : http://localhost:5000/blog-post
```

- 파일확장자는 URI에 포함하지 않는다.

```
Bad Example : http://localhost:5000/photo.jpg
Good Example : http://localhost:5000/photo
```

- 행위를 포함하지 않는다.

```
Bad Example : http://localhost:5000/delete-post/1
Good Example : http://localhost:5000/post/1
```


<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **1일 1로그 100일 완성 IT지식**
> **[[네트워크] REST API란? REST, RESTful이란?](https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80)**
