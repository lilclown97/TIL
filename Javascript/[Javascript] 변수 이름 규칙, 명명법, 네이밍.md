## 변수 이름 규칙, 명명법, 네이밍

---

> **식별자는 대소문자 영어, 밑줄, 달러 기호로 시작**

```javascript
let myname; //OK
let Myname; //OK
let _myname; //OK
let $myname; //OK
let 1myname; //NO
let my1name; //OK
```

<br>

> **대소문자는 구별한다**

```javascript
myname !== myName;
```

<br>

> **예약어는 사용할 수 없다**

- 예약어와 대소문자가 구별되면 예약어로 사용되지 않음

```javascript
let let; //NO
let leT; //OK

let const; //NO
let Const; //OK

let function; //NO
let funCtion; //OK
```

<br>

> **너무 추상적이지 않아야 한다**

- `name`이라는 변수명을 사용할 때도 있지만 어떤 것에 대한 이름인지 명확하게 표기해주는 것이 좋다.

```javascript
let name1 = '영성';
let name2 = '강의';
let name3 = '지옥';
```

<br>

> **의미 없는 이름이 아니어야 한다**

```javascript
let a, b, c, d;
```

<br>

> **상수의 이름은 모두 대문자로 사용한다**

- javascript에서 정해진 규칙은 아니지만 가독성 향상을 위한 암묵적인 룰

```javascript
const PI = 3.14;
```

<br>

> **여러 단어로 이루어진 경우 첫 단어 이후의 단어들의 첫 글자를 대문자로 한다**

- javascript에서 정해진 규칙은 아니지만 가독성 향상을 위한 암묵적인 룰

```javascript
let myName;
let yourName;
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
