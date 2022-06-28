## ⬛ 자연수 뒤집어 배열로 만들기

---

### ◾ 문제 설명

- [자연수 뒤집어 배열로 만들기](https://programmers.co.kr/learn/courses/30/lessons/12932)

- 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
  예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

<br>

### ◾ 제한 사항

- n은 10,000,000,000이하인 자연수입니다.

<br>

### ◾ 입출력 예

|   n   |   return    |
| :---: | :---------: |
| 12345 | [5,4,3,2,1] |

<br>

### ◾ 문제 풀이

```javascript
function solution(n) {
  return (n + '')
    .split('')
    .reverse()
    .map((val) => parseInt(val));
}
```

1. 숫자 n에 빈 문자열을 더하여 문자열로 변환

2. ''를 기준으로 split하여 배열로 변환

3. reverse하여 뒤집으면 ["1","2"] 와 같은 형태가 된다

4. 배열의 모든 인덱스를 parseInt를 사용하여 숫자 형태로 만들어준다.

<br>

### ◾ 다른 사람의 풀이

**다른 분들의 풀이도 비슷하여 생략**

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
