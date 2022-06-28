## ⬛ 문자열을 정수로 바꾸기

---

### ◾ 문제 설명

- [문자열을 정수로 바꾸기](https://programmers.co.kr/learn/courses/30/lessons/12925)

-문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

<br>

### ◾ 제한 사항

- s의 길이는 1 이상 5이하입니다.

- s의 맨앞에는 부호(+, -)가 올 수 있습니다.

- s는 부호와 숫자로만 이루어져있습니다.

- s는 "0"으로 시작하지 않습니다.

<br>

### ◾ 입출력 예

- 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
  str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

<br>

### ◾ 문제 풀이

```javascript
function solution(s) {
  return parseInt(s);
}
```

1. 문자열을 숫자 형태로 변환해주는 parseInt를 사용하여 return

<br>

### ◾ 다른 사람의 풀이

```javascript
function strToInt(s) {
  return s / 1;
}
```

1. 자바스크립트의 형변환을 이용하여 문자열을 숫자로 나누어 숫자형으로 바꾼 후 return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
