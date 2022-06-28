## ⬛ 짝수와 홀수

---

### ◾ 문제 설명

- [짝수와 홀수](https://programmers.co.kr/learn/courses/30/lessons/12937)

- 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

<br>

### ◾ 제한 사항

- num은 int 범위의 정수입니다.

- 0은 짝수입니다.

<br>

### ◾ 입출력 예

| num | return |
| :-: | :----: |
|  3  | "Odd"  |
|  4  | "Even" |

<br>

### ◾ 문제 풀이

```javascript
function solution(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
```

1. num을 2로 나눈 나머지가 0이면 'Even'을 return, 그렇지 않다면 'Odd'를 return

<br>

### ◾ 다른 사람의 풀이

**다른 분들의 풀이도 비슷하여 생략**

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
