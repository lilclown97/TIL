## ⬛ 내적

---

### ◾ 문제 설명

- [내적](https://programmers.co.kr/learn/courses/30/lessons/70128)

- 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
  a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]\*b[n-1] 입니다. (n은 a, b의 길이)

<br>

### ◾ 제한 사항

- a, b의 길이는 1 이상 1,000 이하입니다.

- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

<br>

### ◾ 입출력 예

|     a     |      b      | result |
| :-------: | :---------: | :----: |
| [1,2,3,4] | [-3,-1,0,2] |   3    |
| [-1,0,1]  |  [1,0,-1]   |   -2   |

<br>

### ◾ 문제 풀이

```javascript
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
```

1. answer 이라는 변수에 0을 할당

2. 반복문을 사용하여 배열 a와 b의 같은 인덱스 값끼리 곱하고 answer에 더해준다

3. answer return

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}
```

1. reduce 메소드를 사용하여 acc에 cur\*b[idx]값을 합산 후 리턴

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
