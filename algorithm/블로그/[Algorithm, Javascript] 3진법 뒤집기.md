## 3진법 뒤집기

---

> **문제 설명**

- [3진법 뒤집기](https://programmers.co.kr/learn/courses/30/lessons/68935)
- 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
  이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

<br>

> **제한 사항**

- n은 1 이상 100,000,000 이하인 자연수입니다.

<br>

> **입출력 예**

- |  n  | result |
  | :-: | :----: |
  | 45  |   7    |
  | 125 |  229   |

<br>

> **문제 풀이**

```javascript
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

//테스트를 위한 코드
console.log(solution(45)); //7
console.log(solution(125)); //229
```

1. `.toString()`을 사용하여 정수 `n`을 3진법의 문자열로 바꾼다.
2. `.split()`를 사용하여 `''` 을 기준으로 배열로 바꾼다.
3. `.reverse()`를 사용하여 배열을 앞뒤로 뒤집는다.
4. `.join()`을 사용하여 `''` 을 기준으로 문자열로 합친다.
5. `parseInt`를 사용하여 문자열을 정수 형태로 바꾸면서 3진법을 10진법으로 바꾼다.
6. `return`

<br>

> **다른 사람의 풀이**

```javascript
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};
```

- 화살표 함수 사용.

1. `[n.toString]` 을 사용하여 정수 `n`을 3진법의 문자열로 바꾸면서 배열 안에 넣는다
2. `.reverse()`를 사용하여 배열을 앞뒤로 뒤집는다.
3. `.join()`을 사용하여 `''` 을 기준으로 문자열로 합친다.
4. `parseInt`를 사용하여 문자열을 정수 형태로 바꾸면서 3진법을 10진법으로 바꾼다.
5. `return`

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
