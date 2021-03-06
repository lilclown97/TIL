## JavaScript의 자료형과 JavaScript만의 특성

> **느슨한 타입(loosely typed)의 동적(dynamic) 언어**

1. 동적 타입

- javascript의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당, 재할당이 가능

```javascript
let foo = 42; // foo가 숫자
foo = 'bar'; // foo가 이제 문자열
foo = true; // foo가 이제 불리언
```

2. 원시 값

- Boolean : 논리 요소를 나타내며 `true`, `false` 두 가지 값을 가짐.

- Null : `null` 하나의 값만 가짐.

- Undefined : 값을 할당하지 않은 변수는 `undefined` 값을 가짐.

- Number : [부동소수점 숫자](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) 외 `+infinity`, `-infinity`, `NaN` 세 개의 상징적인 값을 가짐.

- BigInt : 임의 정밀도로 정수를 나타낼 수 있는 원시 값으로 `Number`의 안전한계를 넘어서는 큰 정수도 안전하게 저장하고 연산. 정수 끝에 `n`을 추가하거나 생성자를 호출해 생성.

- String : 문자열로 각각의 요소가 `string`의 한 자리를 차지. 첫 번째 요소부터 `index 0`. javascript의 문자열은 불변하지만 원본 문자열을 사용해 새로운 문자열을 생성하는 것은 가능.

- Symbol : 고유하고 변경 불가능한 원시 값으로 객체의 속성키로 사용 가능.

3. 객체

- 식별자로 참조할 수 있는 메모리 상의 값. 함수, 배열 등

4. 동적 타입의 장단점

- 어떤 타입의 데이터 값이라도 자유롭게 할당할 수 있어 편리하지만 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되는 경우가 발생.

<br>

> **JavaScript 형변환**

1. 암시적변환

- 예시 : + 연산자는 문자형을 우선시, 다른 연산자는 숫자령을 우선시.

```javascript
number + number; // number
number + string; // string
string + string; // string
string + boolean; // string
number + boolean; // number

string * number; // number
string * string; // number
number * number; // number
string * boolean; //number
number * boolean; //number
```

2. 명시적변환

- Number() : 정수, 실수형으로 변환
- parseIng() : 정수형으로 변환
- String() : 문자열로 변환
- toString() : 문자열로 변환
- Boolean() : 불리언 타입으로 변환

<br>

> **==, ===**

1. ==

- 숫자나 문자의 값이 같다는 의미.

2. ===

- 숫자나 문자의 값이 같을 뿐 아니라 해당 타입 또한 같아야 `true` 반환

<br>

> **undefined와 null의 미세한 차이**

- `undefined`는 변수를 선언하고 값을 할당하지 않은 상태, `null`은 변수를 선언하고 빈값을 할당한 상태.

<br>

## JavaScript 객체와 불변성이란 ?

> **기본형 데이터와 참조형 데이터**

- 기본형에는 바로 값을 그대로 할당, 참조형에는 값이 저장된 주소값을 할당.
- [기본형, 참조형](https://webclub.tistory.com/638)

<br>

> **불변 객체를 만드는 방법**

1. const

- 변수를 상수로 선언
- 객체 재할당은 불가능하지만 속성은 변경가능.

2. Object.freeze()

- 객체를 동결하기 위한 메소드
- 객체의 속성의 변경은 불가능하지만 객체의 재할당 가능.

3. const, Object.freeze()

- 객체 재할당이 불가능한 `const`, 속성 변경이 불가능한 `Object.freeze`를 같이 사용 하면 불변 객체 생성 가능.

<br>

> **얕은 복사와 깊은 복사**

1. 얕은 복사(shallow copy)

- 데이터가 그대로 생성되는 것이 아닌 해당 데이터의 참조 값을 전달하여 데이터를 공유. 참조형.

2. 깊은 복사(deep copy)

- 독립적인 메모리에 값 자체를 할당하여 생성. 기본형

<br>

## 호이스팅과 TDZ?

> **스코프, 호이스팅, TDZ**

1. 스코프

- 전역 스코프 : 코드의 어느곳에서든 참조할 수 있는 범위. 이곳에 선언된 변수는 전역 변수가 되며 코드 어디에서든 참조가 가능.
- 지역 스코프 : 코드블록, 함수내에서의 범위이며 자기자신과 하위 범위에서만 참조. 선언된 변수는 지역 변수가 됨.

2. 호이스팅 (var)

- 인터프리터가 변수와 함수의 메모리 공간을 선언전에 미리 할당하는 것.
- 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는 것.

```javascript
function catName(name) {
    console.log("제 고양이의 이름은 " + name + "입니다");
  }
  catName("호랑이");
//제 고양이의 이름은 호랑이입니다

  dogName("클로이");

function dogName(name) {
  console.log("제 강아지의 이름은 " + name + "입니다");
}제 강아지의 이름은 클로이입니다
//

```

3. TDZ (let,const)

- `temporal dead zone`, 변수의 선언과 변수의 초기화 사이의 변수에 접근할 수 없는 지점.

```javascript
# 이 코드는 문제가 없다.
let age = 10;
function showYourAge() {
	console.log(age);
}
showYourAge(); // 10

# 이 코드는 문제가 있다.
let age = 10;
function showYourAge() {
  console.log(age);
  let age = 20;
}
```

<br>

> **함수 선언문과 함수 표현식에서 호이스팅 방식의 차이**

- function name() : 함수 선언문
- let name = function() : 함수 표현식
- `var`, `함수선언문`은 호이스팅 대상, `let`, `const`, `함수표현식`은 대상이 아니다.

<br>

> **실행 컨텍스트와 콜 스택**

1. 실행 컨텍스트 (Execution context)

- 코드를 실행하기 위해 필요한 환경

2. 콜 스택 (callstack)

- 함수 호출을 기록하기 위해 사용하는 우물 형태의 데이터 구조

<br>

> **스코프 체인**

1. 스코프 체인

- 해당 코드의 유효 범위 안에 있는 변수를 정의하는 객체의 체인

<br>

## 실습 과제

> **콘솔에 찍힐 b 값을 예상해보고, 어디에서 선언된 “b”가 몇번째 라인에서 호출한 console.log에 찍혔는지, 왜 그런지 설명.주석을 풀어보고 오류가 난다면 왜 오류가 나는 지 설명하고 오류를 수정해보세요.**

```javascript
let b = 1;

function hi() {
  const a = 1;
  let b = 100;
  b++;
  console.log(a, b);
}

//console.log(a);
console.log(b); //첫줄 let b = 1
hi(); //console 1 101
console.log(b); //첫줄 let b = 1
```

```javascript
let b = 1;

function hi() {
  const a = 1;
  let b = 100;
  b++;
  console.log(a, b);
}

console.log(a);
console.log(b);
hi();
console.log(b);
// a가 지역스코프로 선언되어 그 바깥의 범위에서는 console 불가
```

```javascript
let b = 1;
const a = 1;
function hi() {
  let b = 100;
  b++;
  console.log(a, b);
}

console.log(a);
console.log(b);
hi();
console.log(b);
```

<br>

> **Tomorrow better than today, Laugh at myself**

> **출처**<br> > **[동적타입에 대하여](https://mingoogle.tistory.com/15)**<br> > **[자바스크립트 형변환](https://medium.com/gdana/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%ED%98%95%EB%B3%80%ED%99%98%EC%9D%80-%EB%91%90%EA%B0%80%EC%A7%80%EB%8B%A4-b46875be4a88)**<br> > **[==, ===](https://velog.io/@filoscoder/-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4-oak1091tes)**<br> > **[undefined, null](https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/13_undefined&null.html)**<br> > **[자료형](https://ko.javascript.info/types)**<br> > **[javascript의 타입과 자료구조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)**<br> > **[불변객체 만들기](https://spiderwebcoding.tistory.com/8)**<br> > **[얕은 복사, 깊은 복사](https://velog.io/@recordboy/JavaScript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%ACShallow-Copy%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%ACDeep-Copy)**<br> > **[스코프](https://velog.io/@bsjp400/JavaScript-%EC%8A%A4%EC%BD%94%ED%94%84Scope%EB%9E%80)**<br> > **[호이스팅](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)**<br> > **[TDZ](https://velog.io/@zeebeck/TDZTemporal-Dead-Zone%EB%A5%BC-%ED%86%B5%ED%95%B4-%EB%B0%9D%ED%98%80%EC%A7%84-let%EA%B3%BC-const%EC%9D%98-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85hoisting)**<br> > **[함수선언문, 함수표현식 호이스팅](https://velog.io/@hyun-jii/%ED%95%A8%EC%88%98%EC%84%A0%EC%96%B8%EB%AC%B8-%ED%95%A8%EC%88%98%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)**<br> > **[실행 컨텍스트, 콜 스택](https://velog.io/@wonseok2877/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%94%EC%A7%84-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80-%EC%BD%9C-%EC%8A%A4%ED%83%9D)**<br> > **[스코프, 스코프 체인, 클로저](https://developer-alle.tistory.com/369)**<br>
