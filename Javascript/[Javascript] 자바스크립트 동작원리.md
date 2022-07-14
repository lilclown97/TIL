## ⬛ 데이터 타입

---

### ◾ 기본형

<br>

- Number

- String

- Boolean

- Null

- Undefined

- Symbol

  - 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용

  ```javascript
  const user = Symbol();

  const user = Symbol('this is a user');
  ```

  - 위와 같이 `Symbol` 값을 담게 된 `user`라는 이름의 변수는 다른 어떤 값과 비교해도 true가 될수 없는 고유한 변수

  ```javascript
  const user = Symbol('this is a user');

  user === 'this is user'; // false
  user === 'user'; // false
  user === 'Symbol'; // false
  user === true; // false
  user === false; // false
  user === 123; // false
  user === 0; // false
  user === null; // false
  user === undefined; // false
  ```

- BigInt

- 자바스크립트에서 아주 큰 정수를 표현하기 위해 등장한 데이터 타입

- 자바스크립트에서 안전한 최대 정수는 `2^53-1`로 9007199254740991인데 숫자 범위를 초과하는 정수값을 사용하려고 하면 연산에 미세한 오류가 발생

```javascript
console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true
console.log(9007199254740991 + 2); /// 9007199254740992
console.log(9007199254740993); /// 9007199254740992
```

- BigInt 데이터 타입의 값을 사용하여 최대 정수를 초과하는 값을 사용할 수 있다.

```javascript
console.log(9007199254740993n); // 9007199254740993n
console.log(BigInt(9007199254740993)); // 9007199254740993
```

<br>

### ◾ 참조형

<br>

- Object

<br><br>

## ⬛ 논리연산자

---

### ◾ Truthy 값과 Falsy 값

<br>

```javascript
// falsy
Boolean(false);
Boolean(null);
Boolean(undefined);
Boolean(0);
Boolean(NaN);
Boolean('');

// truthy
Boolean(true);
Boolean('codeit');
Boolean(123);
Boolean(-123);
Boolean({});
Boolean([]);
```

<br>

### ◾ 독특한 방식의 논리 연산자

<br>

- AND 연산자는 왼쪽 피연산자가 falsy 값일 때 왼쪽 피연산자를 truthy 값일 때 오른쪽 피연산자를 리턴

- OR 연산자는 왼쪽 피연산자가 truthy 값일 때 왼쪽 피연산자를 falsy 값일 때 오른쪽 피연산자를 리턴

```javascript
console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}
```

<br>

### ◾ AND, OR 연산자의 우선 순위

<br>

- [연산자의 우선 순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```javascript
console.log(true || (false && false)); // true
console.log((true || false) && false); // false

console.log('Codeit' || (NaN && false)); // Codeit
console.log(('Codeit' || NaN) && false); // false
```

<br>

### ◾ null 병합 연산자

<br>

- ES2020에서 추가된 연산자

- `null`, `undefined` 값을 가려내는 연산자

```javascript
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

console.log(example1, example2, example3); // I love Codeit
```

<br><br>

## ⬛ 변수 선언, 스코프

---

**[[Javascript] 함수 스코프, 블록 스코프](https://velog.io/@lilclown/Javascript-%ED%95%A8%EC%88%98-%EC%8A%A4%EC%BD%94%ED%94%84-%EB%B8%94%EB%A1%9D-%EC%8A%A4%EC%BD%94%ED%94%84)**

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
