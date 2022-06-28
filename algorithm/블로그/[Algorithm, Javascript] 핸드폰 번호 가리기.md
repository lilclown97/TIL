## ⬛ 핸드폰 번호 가리기

---

### ◾ 문제 설명

- [핸드폰 번호 가리기](https://programmers.co.kr/learn/courses/30/lessons/12948)

- 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
  전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 \*으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

<br>

### ◾ 제한 사항

- phone_number는 길이 4 이상, 20이하인 문자열입니다.

<br>

### ◾ 입출력 예

| phone_number  |      return      |
| :-----------: | :--------------: |
| "01033334444" | "**\*\*\***4444" |
|  "027778888"  |   "**\***8888"   |

<br>

### ◾ 문제 풀이

```javascript
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4);
}
```

1. phone_number - 4 의 길이 만큼 '\*'을 반복한 문자열과 phone_number 뒤의 네자리를 더한 값을 return

<br>

### ◾ 다른 사람의 풀이

```javascript
function hide_numbers(s) {
  var result = '*'.repeat(s.length - 4) + s.slice(-4);

  return result;
}
```

1. slice 하는 위치를 문자열의 길이로 계산해서 하는 것이 아니라 뒤에서 4번째 부터 지정할 수도 있다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
