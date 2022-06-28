## ⬛ 문자열 내 p와 y의 개수

---

### ◾ 문제 설명

- [문자열 내 p와 y의 개수](https://programmers.co.kr/learn/courses/30/lessons/12916)

- 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
  s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
  'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
  단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

<br>

### ◾ 제한 사항

- 문자열 s의 길이 : 50 이하의 자연수

- 문자열 s는 알파벳으로만 이루어져 있습니다.

<br>

### ◾ 입출력 예

|     s     | answer |
| :-------: | :----: |
| "pPoooyY" |  true  |
|   "Pyy"   | false  |

<br>

### ◾ 문제 풀이

```javascript
function solution(s) {
  s.toLowerCase();
  return s.split('y').length === s.split('p').length ? true : false;
}
```

1. 문자열 s를 소문자로 변환

2. 문자열 s 를 'y'로 split 했을때와 'p'로 split 했을때 길이가 같으면 true 다르면 false를 return

<br>

### ◾ 다른 사람의 풀이

```javascript
function numPY(s) {
  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}
```

1. 문자열 s를 대문자로 변환

2. 문자열 s 를 'P'로 split 했을때와 'Y'로 split 했을때 길이가 같으면 true 다르면 false를 return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
