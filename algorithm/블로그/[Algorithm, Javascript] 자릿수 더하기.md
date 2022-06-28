## ⬛ 자릿수 더하기

---

### ◾ 문제 설명

- [자릿수 더하기](https://programmers.co.kr/learn/courses/30/lessons/12931)

- 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
  예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

<br>

### ◾ 제한 사항

- N의 범위 : 100,000,000 이하의 자연수

<br>

### ◾ 입출력 예

|  N  | answer |
| :-: | :----: |
| 123 |   6    |
| 987 |   24   |

<br>

### ◾ 문제 풀이

```javascript
function solution(n) {
  let arr = '' + n;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] * 1;
  }
  return answer;
}
```

1. 빈문자열과 n을 더해서 arr에 할당

2. 숫자 0인 answer를 선언 후 반복문을 활용하여 arr의 모든 숫자를 answer에 더해준다.

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(n) {
  // 쉬운방법
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}
```

1. n을 문자열로 만든 후 배열로 만들어 reduce를 사용하여 모든 index의 값을 숫자형으로 더해 return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
