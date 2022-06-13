## Date(), 날짜

---

> **Date 객체 생성**

- month는 index 값으로 1월이 0부터 시작한다

```javascript
let date1 = new Date(); // 현재 날짜 및 시간
let date2 = new Date(1991, 11, 25, 3, 50); // 1991년 12월 25일 3:50:00 (월은 index 값으로 0이 1월)
let date3 = new Date('2014-6-4'); // 2002년 1월 1일 09:00:00
let date4 = new Date('2012-05-17 10:20:30'); // 2012년 5월 17일 10:20:30
```

<br>

> **Date 메소드**

- | get 함수명      | set 함수명      | 의미   | 설명           |
  | --------------- | --------------- | ------ | -------------- |
  | getFullYear()   | setFullYear     | 년도   |
  | getMonth        | setMonth        | 월     | 0~11 : 1월12월 |
  | getDate         | setDate         | 일     |
  | getHours        | setHours        | 요일   | 0~6 : 일~토    |
  | getMilliseconds | setMilliseconds | 밀리초 |
  | getSeconds      | setSeconds      | 초     |

<br>

> **타임스탬프**

- `getTime()` 메소드나 Date끼리의 산술연산이 실행되면 그 값은 문자열로 `31536000000`와 같은 알 수 없는 숫자로 나오게 되는데 이것을 타임스탬프라고 한다.

- 타임스탬프는 밀리초 즉 1초/1000 의 시간으로 표현되기 때문에 예를 들어 일수를 구하고 싶다면 `타임스탬프 / 1000 / 60 / 60 / 24`의 계산을 해주어야한다.

```javascript
let now = new Date(2022, 06, 08, 14, 30);
let lastYear = new Date(2021, 06, 08, 14, 30);

console.log(now); //2022-07-08T05:30:00.000Z
console.log(lastYear); //2021-07-08T05:30:00.000Z

console.log((now - lastYear) / 1000 / 60 / 60 / 24); //365
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
