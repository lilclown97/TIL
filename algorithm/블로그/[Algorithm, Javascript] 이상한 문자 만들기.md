## ⬛ 이상한 문자 만들기

---

### ◾ 문제 설명

- [이상한 문자 만들기](https://programmers.co.kr/learn/courses/30/lessons/12930)

- 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
  각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
  각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

<br>

### ◾ 제한 사항

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.

- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

<br>

### ◾ 입출력 예

|         s         |      return       |
| :---------------: | :---------------: |
| "try hello world" | "TrY HeLlO WoRlD" |

<br>

### ◾ 문제 풀이

```javascript
function solution(s) {
  let answer = '';
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      j % 2 === 0 ? (answer += arr[i][j].toUpperCase()) : (answer += arr[i][j].toLowerCase());
    }
    if (i < arr.length - 1) answer += ' ';
  }
  return answer;
}
```

1. 빈 문자열 `answer`을 생성한 후 `s`를 ''로 split 한다.

2. split한 단어의 짝수 인덱스 값은 소문자로 홀수 인덱스 값은 대문자로 변환한다

3. answer 문자열에 변환한 문자를 더해주고 단어 하나의 변환이 완료되면 띄어쓰기를 추가해준다(마지막에는 띄어쓰기가 들어가면 안되므로 i < arr.length - 1 조건을 사용한다.)

<br>

### ◾ 다른 사람의 풀이

```javascript
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
```

1. 정규표현식... 따로 공부 해야겠습니다...

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
