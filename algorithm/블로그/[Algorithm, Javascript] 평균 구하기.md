## ⬛ 평균 구하기

---

### ◾ 문제 설명

- [평균 구하기](https://programmers.co.kr/learn/courses/30/lessons/12944)

- 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

<br>

### ◾ 제한 사항

- arr은 길이 1 이상, 100 이하인 배열입니다.

- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

<br>

### ◾ 입출력 예

|    arr    | return |
| :-------: | :----: |
| [1,2,3,4] |  2.5   |
|   [5,5]   |   5    |

<br>

### ◾ 문제 풀이

```javascript
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
```

1. reduce 메소드를 이용하여 arr 배열의 모든 수의 합을 구한다.

2. arr.의 기리로 배열의 합을 나눈다

<br>

### ◾ 다른 사람의 풀이

**다른 분들의 풀이도 비슷하여 생략**

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
