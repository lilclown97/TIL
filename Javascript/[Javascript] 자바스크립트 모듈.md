## ⬛ 모듈

---

<br>

- 간단하게 자바스크립트 파일 하나라고 할 수 있다

- 기능에 따라 각각의 파일로 나눠 관리하면 코드를 좀 더 효율적으로 관리할 수 있고, 비슷한 기능이 필요할 때 다른 프로그램에서 재사용 할 수도 있다는 장점이 있다.

<br><br>

## ⬛ 모듈 스코프

---

<br>

- 모듈 파일 안에서 선언한 변수는 외부에서 자유롭게 접근할 수 없도록 막아야 한다

```javascript
<body>
  <script type="module" src="index.js"></script>
</body>
```

<br><br>

## ⬛ 모듈 문법

---

### ◾ export

<br>

- 모듈 스코프를 가진 파일에서 외부로 내보내고자 하는 변수나 함수를 내보낼 때 사용

```javascript
// printer.js
export const title = 'CodeitPrinter';

export function print(value) {
  console.log(value);
}
```

<br>

### ◾ import

<br>

- 모듈 파일에서 내보낸 변수나 함수들을 다른 파일에서 사용

```javascript
// index.js
import { title, print } from './printer.js';

print(title);
```

<br><br>

## ⬛ 이름 바꿔 import 하기

---

<br>

- `import` 키워드를 통해 모듈을 불러올 때 `as` 키워드를 활용하면 `import` 하는 대상들의 이름을 변경할 수 있다.

- 여러 파일에서 불러오는 대상들의 이름이 중복되는 문제 해결 가능

```javascript
import { title as printerTitle, print, printArr } from './printer.js';
import { title, data as members } from './members.js';

printer(title);
arrPrinter(members);
```

<br><br>

## ⬛ 한꺼번에 import 하기

---

<br>

- `import`할 때 와일드카드 문자 `*`와 `as`를 활용하면 모듈 파일에서 `export`하는 모든 대상을 하나의 객체로 불러올 수 있다.

```javascript
import * as printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
```

<br><br>

## ⬛ 한꺼번에 export 하기

---

<br>

- 변수나 함수 앞에 `export` 키워드를 붙일 수도 있지만 선언된 변수나 함수를 하나의 객체로 모아 한꺼번에 내보낼 수 있다

```javascript
const title = 'CodeitPrinter';

function print(value) {
  console.log(value);
}

function printArr(arr) {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  });
}

export { title as printerTitle, print, printArr };
```

<br><br>

## ⬛ default export

---

<br>

- `export`할 때 `default` 키워드를 함께 사용하면 모듈 파일에서 기본적으로 `export`할 대상을 정할 수 있다.

```javascript
const title = 'CodeitPrinter';

function print(value) {
  console.log(value);
}

export default print;
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
