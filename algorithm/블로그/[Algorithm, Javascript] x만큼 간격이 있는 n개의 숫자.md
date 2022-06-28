## ⬛ x만큼 간격이 있는 n개의 숫자

---

### ◾ 문제 설명

- [x만큼 간격이 있는 n개의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12954)

- 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

<br>

### ◾ 제한 사항

- x는 -10000000 이상, 10000000 이하인 정수입니다.

- n은 1000 이하인 자연수입니다.

<br>

### ◾ 입출력 예

|  x  |  n  |    answer    |
| :-: | :-: | :----------: |
|  2  |  5  | [2,4,6,8,10] |
|  4  |  3  |   [4,8,12]   |
| -4  |  2  |   [-4, -8]   |

<br>

### ◾ 문제 풀이

```javascript
function solution(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}
```

1. 빈 배열 arr 선언

2. 반복문을 사용하여 n의 길이 만큼 x \* i 를 arr에 push

3. arr return

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
```

1. 길이가 n인 빈 배열 생성

2. 빈 배열 요소에 x로 채움

3. map 메소드를 이용하여 i+1을 모든 요소에 곱한 배열을 return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
