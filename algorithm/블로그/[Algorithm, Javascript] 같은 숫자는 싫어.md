## ⬛ 같은 숫자는 싫어

---

### ◾ 문제 설명

- [같은 숫자는 싫어](https://programmers.co.kr/learn/courses/30/lessons/12906)

- 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
  이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
  단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

<br>

### ◾ 제한 조건

- 배열 arr의 크기 : 1,000,000 이하의 자연수

- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

<br>

### ◾ 입출력 예

|       arr       |  answer   |
| :-------------: | :-------: |
| [1,1,3,3,0,1,1] | [1,3,0,1] |
|   [4,4,4,3,3]   |   [4,3]   |

<br>

### ◾ 문제 풀이

```javascript
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}
```

1. `answer` 이라는 빈 배열 생성

2. 반복문을 사용하여 index와 index+1 의 값이 다를 경우 `answer`에 push

3. `answer` return

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
```

1. `filter` 메소드를 사용하여 arr의 val 값과 index + 1의 값이 다를 경우에만 return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
