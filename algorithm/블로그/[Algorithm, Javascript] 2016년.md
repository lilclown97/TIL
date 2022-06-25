## ⬛ 2016년

---

### ◾ 문제 설명

- [2016년](https://programmers.co.kr/learn/courses/30/lessons/12901)

- 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
  두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
  요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
  예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

<br>

### ◾ 제한 조건

- 2016년은 윤년입니다.

- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

<br>

### ◾ 입출력 예

|  a  |  b  | result |
| :-: | :-: | :----: |
|  5  | 24  | "TUE"  |

<br>

### ◾ 문제 풀이

```javascript
function solution(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return day[new Date(2016, a - 1, b).getDay()];
}
```

1. `getDay()`를 사용하면 요일이 0~6, 일~월 순서대로 결과값이 나오므로 day라는 배열에 일요일부터 토요일까지 순서대로 선언

2. `new Date(2016,a-1,b).getDay()`로 해당 요일 index 값을 가져오고 day 배열에서 해당 index와 일치하는 요일을 return

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

console.log(solution(1, 1));
```

1. date 변수에 해당 날짜를 선언

2. `2015-12-31T15:00:00.000Z`와 이 나오는 date 변수를 `.toString` 사용하여 `Fri Jan 01 2016 00:00:00 GMT+0900 (대한민국 표준시)`와 같이 문자열로 변경

3. `.slice(0, 3)`를 사용하여 제일 앞부분의 요일을 제외한 나머지 부분을 제거

4. `.toUpperCase()`를 이용하여 대문자로 변환 후 return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
