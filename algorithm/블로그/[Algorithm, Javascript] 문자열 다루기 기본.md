## ⬛ 문자열 다루기 기본

---

### ◾ 문제 설명

- [문자열 다루기 기본](https://programmers.co.kr/learn/courses/30/lessons/12918)

- 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
  예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

<br>

### ◾ 제한 사항

- s는 길이 1 이상, 길이 8 이하인 문자열입니다.

<br>

### ◾ 입출력 예

|   s    | return |
| :----: | :----: |
| "a234" | false  |
| "1234" |  true  |

<br>

### ◾ 문제 풀이

```javascript
function solution(s) {
  return (s.length == 4 || s.length == 6) && !isNaN(s) && !s.includes('e') ? true : false;
}
```

1. 문자열의 길이가 4 또는 6이면서 숫자이고 알파벳 'e'가 들어가지 않는다면 true를 그렇지 않다면 false를 return

- 지수 표기법으로 숫자를 나타내게 되면 isNaN으로는 숫자로 판단되기때문에 별도로 알파벳 'e'가 들어가는지 조건으로 걸어주었다.

<br>

### ◾ 다른 사람의 풀이

```javascript
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
```

1. 정규표현식을 사용하여 4자리 또는 6자리의 숫자 형태가 맞는지 test

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
