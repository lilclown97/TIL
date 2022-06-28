## ⬛ 정수 내림차순으로 배치하기

---

### ◾ 문제 설명

- [정수 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12933)

- 함수 solution은 정수 n을 매개변수로 입력받습니다.
  n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
  예를들어 n이 118372면 873211을 리턴하면 됩니다.

<br>

### ◾ 제한 사항

- n은 1이상 8000000000 이하인 자연수입니다.

<br>

### ◾ 입출력 예

|   n    | return |
| :----: | :----: |
| 118372 | 873211 |

<br>

### ◾ 문제 풀이

```javascript
function solution(n) {
  return parseInt(
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
```

1. n에 빈 문자열을 더하여 문자열로 변환

2. ''를 기준으로 split하여 배열로 변환

3. sort를 사용하여 내림차순으로 정렬

4. ''를 기준으로 join하여 문자열로 변환

5. parseInt하여 문자열을 숫자로 변환

<br>

### ◾ 다른 사람의 풀이

**다른 분들의 풀이도 비슷하여 생략**

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
