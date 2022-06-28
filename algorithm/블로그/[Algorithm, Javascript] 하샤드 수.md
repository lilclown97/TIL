## ⬛ 하샤드 수

---

### ◾ 문제 설명

- [하샤드 수](https://programmers.co.kr/learn/courses/30/lessons/12947)

- 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

<br>

### ◾ 제한 사항

- x는 1 이상, 10000 이하인 정수입니다.

<br>

### ◾ 입출력 예

| arr | return |
| :-: | :----: |
| 10  |  true  |
| 12  |  true  |
| 11  | false  |
| 13  | false  |

<br>

### ◾ 문제 풀이

```javascript
function solution(x) {
  return Number.isInteger(x / (x + '').split('').reduce((acc, cur) => acc + parseInt(cur), 0));
}
```

1. x를 문자열 > 배열 순으로 변경 후 reduce 메소드를 사용하여 각 자릿수의 합을 구함

2. x를 각 자릿수의 합으로 나눈다

3. Number.isInteger() 메소드를 사용하여 정수라면 true, 정수가 아니라면 false를 return

<br>

### ◾ 다른 사람의 풀이

**다른 분들의 풀이도 비슷하여 생략**

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
