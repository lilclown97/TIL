## ⬛ 없는 숫자 더하기

---

### ◾ 문제 설명

- [없는 숫자 더하기](https://programmers.co.kr/learn/courses/30/lessons/86051)

- 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

<br>

### ◾ 제한 사항

- 1 ≤ numbers의 길이 ≤ 9

  - 0 ≤ numbers의 모든 원소 ≤ 9

  - numbers의 모든 원소는 서로 다릅니다.

<br>

### ◾ 입출력 예

|      numbers      | result |
| :---------------: | :----: |
| [1,2,3,4,6,7,8,0] |   14   |
|  [5,8,4,0,6,7,9]  |   6    |

<br>

### ◾ 문제 풀이

```javascript
function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return 45 - sum;
}
```

1. 0인 sum 선언

2. 반복문을 활용하여 numbers에 있는 모든 수를 sum에 더한다.

3. 제한사항이 numbers는 0~9까지의 수 이므로 모든 수를 더한 값은 45. 45에서 sum 값을 빼면 numbers에 없는 모든 값의 합이 된다.

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
```

1. reduce를 사용하여 numbers의 값을 모두 더한 후 45에서 빼서 return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
