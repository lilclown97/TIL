## ⬛ 음양 더하기

---

### ◾ 문제 설명

- [음양 더하기](https://programmers.co.kr/learn/courses/30/lessons/76501)

- 어떤 정수들이 있습니다.
  이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
  실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

<br>

### ◾ 제한 사항

- absolutes의 길이는 1 이상 1,000 이하입니다.

  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.

- signs의 길이는 absolutes의 길이와 같습니다.

  - signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

<br>

### ◾ 입출력 예

| absolutes |       signs        | result |
| :-------: | :----------------: | :----: |
| [4,7,12]  | [true,false,true]  |   9    |
|  [1,2,3]  | [false,false,true] |   0    |

<br>

### ◾ 문제 풀이

```javascript
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
```

1. 숫자 0인 answer 선언

2. 반복문을 사용하여 signs가 true면 answer에 더하고 false면 answer에서 뺀다

3. answer return

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
```

1. reduce를 사용하여 모든 값을 더하는데 signs가 true면 val에 1을 곱해서 더해주고 false면 val에 -1을 곱해서 더해준다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
