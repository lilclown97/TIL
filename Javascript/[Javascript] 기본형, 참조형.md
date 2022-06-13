## 기본형, 참조형

---

> **기본형(Primative Type)**

- 객체가 아닌 데이터 유형

  - Number

  - String

  - Boolean

  - Null

  - Undefined

- 기본형 데이터는 값을 그대로 할당하여 메모리상에 고정된 크기로 저장되며 원시 데이터 값 자체를 보관하므로 불변적이다.

```javascript
let a = 10;
let b = 0;

b = a;
a = 11;

console.log(a); //11
console.log(b); //10
```

- 위의 코드와 같이 `b`에 `a`를 넣으면 `a`의 값이 변해도 `b`의 값은 변하지 않는다.

![](https://velog.velcdn.com/images/lilclown/post/43a8af5f-fd16-4546-8ae5-916f8a64dbdb/image.jpg)

<br>

> **참조형(Reference Type)**

- 객체 데이터 유형

  - Object

  - Array 등

- 참조 타입은 변수에 할당할 때 값이 아닌 데이터의 주소를 저장

- `const`로 선언한 Object, Array에 데이터를 수정할 수 있는 것도 참조 타입이기 때문이다.

```javascript
let object = {
  name: '윤영성',
  age: 26,
};

let object2 = {};

object2 = object;
object.gender = '남';

console.log(object); //{ name: '윤영성', age: 26, gender: '남' }
console.log(object2); //{ name: '윤영성', age: 26, gender: '남' }
```

- 위의 코드와 같이 데이터를 직접 저장한 것이 아닌 주소만 참조한 것이기 때문에 참조된 객체의 값이 변경되면 참조한 객체의 값도 같이 변경된다.

![](https://velog.velcdn.com/images/lilclown/post/32873d0e-8d5d-4d67-97ab-07fdfdca876a/image.jpg)

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[자바스크립트 기본형과 참조형](https://velog.io/@yunsungyang-omc/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8%ED%98%95%EA%B3%BC-%EC%B0%B8%EC%A1%B0%ED%98%95)**
