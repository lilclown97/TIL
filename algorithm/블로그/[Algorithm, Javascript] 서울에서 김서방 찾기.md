## ⬛ 서울에서 김서방 찾기

---

### ◾ 문제 설명

- [서울에서 김서방 찾기](https://programmers.co.kr/learn/courses/30/lessons/12919)

- String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
  seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

<br>

### ◾ 제한 사항

- seoul은 길이 1 이상, 1000 이하인 배열입니다.

- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.

- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

<br>

### ◾ 입출력 예

|     seoul      |       return        |
| :------------: | :-----------------: |
| ["Jane","Kim"] | "김서방은 1에 있다" |

<br>

### ◾ 문제 풀이

```javascript
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`;
  }
}
```

1. 반복문을 활용하여 seoul의 i번째 인데스 값이 'Kim' 일때 `김서방은 ${i}에 있다` 을 return

<br>

### ◾ 다른 사람의 풀이

```javascript
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');
  return '김서방은 ' + idx + '에 있다';
}
```

1. seoul 배열 안에 'Kim'의 인덱스를 찾아 idx에 할당한 후 "김서방은 " + idx + "에 있다" return

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
