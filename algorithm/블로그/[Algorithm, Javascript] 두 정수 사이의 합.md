## ⬛ 두 정수 사이의 합

---

### ◾ 문제 설명

- [두 정수 사이의 합](https://programmers.co.kr/learn/courses/30/lessons/12912)

- 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

<br>

### ◾ 제한 사항

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.

- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.

- a와 b의 대소관계는 정해져있지 않습니다.

<br>

### ◾ 입출력 예

|  a  |  b  | return |
| :-: | :-: | :----: |
|  3  |  5  |   12   |
|  3  |  3  |   3    |
|  5  |  3  |   12   |

<br>

### ◾ 문제 풀이

```javascript
function solution(a, b) {
  let answer = 0;
  for (let i = a < b ? a : b; i <= (a < b ? b : a); i++) {
    answer += i;
  }
  return answer;
}
```

1. 반복문에서 조건문을 사용하여 a,b중 작은 값이 i가 되고 큰값이 조건이 되어 a와 b를 포함한 그 사이의 값을 모두 answer에 더해준다

2. answer를 return

<br>

### ◾ 다른 사람의 풀이

```javascript
function adder(a, b) {
  var result = 0;

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
```

1. 가우스 공식(등차수열의 합 공식)을 이용한 풀이 방법이라고 한다.. 여러 문제를 풀어봐야하는 지금 상황에서 공식까지 이해하고 넘어가기로 한다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
