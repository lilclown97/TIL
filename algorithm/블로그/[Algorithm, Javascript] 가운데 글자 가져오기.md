## ⬛ 가운데 글자 가져오기

---

### ◾ 문제 설명

- [가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903)

- 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

<br>

### ◾ 제한 조건

- s는 길이가 1 이상, 100이하인 스트링입니다.

<br>

### ◾ 입출력 예

|    s    | return |
| :-----: | :----: |
| "abcde" |  "c"   |
| "qwer"  |  "we"  |

<br>

### ◾ 문제 풀이

```javascript
function solution(s) {
  return s.length % 2 !== 0 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2];
}
```

1. 삼항연산자를 사용하여 s의 길이를 2로 나눈것의 나머지가 0이 아니라는 것이 참일때는 `s[Math.floor(s.length / 2)]`가 리턴되고 거짓일 때는 `s[s.length / 2 - 1] + s[s.length / 2]`가 리턴된다.

- 조건이 참일때는 s의 길이가 홀수이므로 문자열 길이의 절반의 소수점을 버리거나 내림하면 가운데 글자를 return 할 수 있다.

- 조건이 거짓일때는 s의 길이가 짝수이므로 문자열 길이의 절반의 -1과 문자열 길이의 절반 인덱스를 사용하여 가운데 두 글자를 return 할 수 있다.

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```

1. `.sumstr`을 사용하여 `Math.ceil(s.length / 2) - 1` 인덱스에서 `s.length % 2 === 0 ? 2 : 1` 의 개수만큼 return

- 홀수/2 혹은 짝수/2를 하게될때 소수점 자리에서 올리고 -1을 하게 되면 홀수일때는 가운데 글자 인덱스, 짝수 일때는 가운데 두 글자 중 왼쪽 글자의 인덱스가 된다.

- 시작 인덱스를 지정하고 잘라내는 개수를 지정할 때 조건문을 사용해서 숫자를 선택

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
