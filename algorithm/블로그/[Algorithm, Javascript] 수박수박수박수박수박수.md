## ⬛ 수박수박수박수박수박수?

---

### ◾ 문제 설명

- [수박수박수박수박수박수?](https://programmers.co.kr/learn/courses/30/lessons/12922)

- 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
  예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

<br>

### ◾ 제한 사항

- n은 길이 10,000이하인 자연수입니다.

<br>

### ◾ 입출력 예

|  n  |   return   |
| :-: | :--------: |
|  3  |  "수박수"  |
|  4  | "수박수박" |

<br>

### ◾ 문제 풀이

```javascript
function solution(n) {
  let word = '수박';
  let answer = '';
  for (let i = 1; i <= n; i++) {
    i % 2 === 0 ? (answer += word[1]) : (answer += word[0]);
  }
  return answer;
}
```

1. '수박'이라는 문자열 word와 빈 문자열 answer를 선언

2. 반복문을 활용하여 i가 짝수이면 word의 index 1 값을 answer에 더하고 홀수라면 index 0의 값을 answer에 더한다

3. answer return

<br>

### ◾ 다른 사람의 풀이

```javascript
const waterMelon = (n) => {
  return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
};
```

1. 문자열 '수박'을 n/2번 만큼 반복한 후 n이 홀수 일때 '수'를 한번 추가해준다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
