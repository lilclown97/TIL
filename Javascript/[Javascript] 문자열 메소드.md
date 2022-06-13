## 문자열 메소드

---

> **문자열의 길이**

- `.length` : 공백까지 계산

```javascript
let string = `안녕하세요. lilclown's Dev.log 입니다`;

console.log(string.length); //29
```

<br>

> **요소 접근**

- `charAt()`

- 대괄호 표기법

```javascript
let string = `안녕하세요. lilclown's Dev.log 입니다`;

console.log(string.charAt(4)); //요
console.log(string[4]); //요
```

<br>

> **요소 탐색**

- `indexOf` : 앞에서 부터 요소 탐색
- `lastIndexOf` : 뒤에서 부터 요소 탐색

```javascript
let string = `안녕하세요. lilclown's Dev.log 입니다`;

console.log(string.indexOf('l')); //7
console.log(string.lastIndexOf('l')); //22
```

<br>

> **대,소문자 변환**

- `toUpperCase()` : 소문자를 대문자로

- `toLowerCase()` : 대문자를 소문자로

```javascript
let string = `안녕하세요. lilclown's Dev.log 입니다`;

console.log(string.toUpperCase('l')); //안녕하세요. LILCLOWN'S DEV.LOG 입니다
console.log(string.toLowerCase('l')); //안녕하세요. lilclown's dev.log 입니다
```

<br>

> **양 끝 공백 제거**

- `trim`

```javascript
let string = ` 안녕하세요. lilclown's Dev.log 입니다 `;

console.log(string); //' 안녕하세요. lilclown's Dev.log 입니다 '
console.log(string.trim()); //'안녕하세요. lilclown's Dev.log 입니다'
```

<br>

> **부분 문자열 접근**

- `slice(시작index,끝index)` : 끝 index 직전까지의 문자열을 가져온다.

```javascript
let string = `안녕하세요. lilclown's Dev.log 입니다`;

console.log(string.slice(7, 28)); //lilclown's Dev.log 입니
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
