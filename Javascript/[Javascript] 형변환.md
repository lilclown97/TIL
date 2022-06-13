## 형변환

---

> **암시적 변환**

- 자바스크립트 엔진이 필요에 따라 자동으로 데이터 타입을 변환

- 산술 연산자 (+)는 숫자형보다 문자형이 우선시, 숫자형이 문자형으로 변환

```javascript
1 + 1; //2
1 + '1'; //'11'
'1' + '1'; //'11'
1 + false; //1
'1' + false; //'1false'

typeof (1 + 1); //number
typeof (1 + '1'); //string
typeof ('1' + '1'); //string
typeof (1 + false); //number
typeof ('1' + false); //string
```

- 산술 연산자 (-,\*,/,%)는 숫자형이 문자형보다 우선시, 문자형이 숫자형으로 변환

```javascript
1 - 1; //0
1 - '1'; //0
'1' - '1'; //0
1 - false; //1
'1' - false; //1

typeof (1 - 1); //number
typeof (1 - '1'); //number
typeof ('1' - '1'); //number
typeof (1 - false); //number
typeof ('1' - false); //number
```

- 엄격하지 않은 동치 (==) 비교

```javascript
null == undefined; //true
'0' == 0; //true
0 == false; //true
'0' == false; //true
```

<br>

> **명시적 변환**

- `Object()`, `Number()`, `String()`, `Boolean()` 등과 같이 의도를 가지고 데이터 타입을 변환

```javascript
let trans = 1;

console.log(typeof trans); //number
console.log(typeof Object(trans)); //object
console.log(typeof Number(trans)); //number
console.log(typeof String(trans)); //string
console.log(typeof Boolean(trans)); //boolean
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[자바스크립트의 형변환은 두가지다](https://medium.com/gdana/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%ED%98%95%EB%B3%80%ED%99%98%EC%9D%80-%EB%91%90%EA%B0%80%EC%A7%80%EB%8B%A4-b46875be4a88)**
