## ⬛ 부족한 금액 계산하기

---

### ◾ 문제 설명

- [부족한 금액 계산하기](https://programmers.co.kr/learn/courses/30/lessons/82612)

- 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
  이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
  즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
  놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
  단, 금액이 부족하지 않으면 0을 return 하세요.

<br>

### ◾ 제한 사항

- 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수

- 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수

- 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

<br>

### ◾ 입출력 예

| price | money | count | result |
| :---: | :---: | :---: | :----: |
|   3   |  20   |   4   |   10   |

<br>

### ◾ 문제 풀이

```javascript
function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum < money ? 0 : sum - money;
}
```

1. sum = 0으로 선언

2. 반복문을 사용하여 sum에 가격 \* 횟수의 값을 누적하여 더함

3. sum이 money 보다 작으면 0, 크면 sum - money를 return

<br>

### ◾ 다른 사람의 풀이

```javascript
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
```

1. 또 가우스 공식이라고 해서.. 일단은 패스..

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[프로그래머스](https://programmers.co.kr/learn/challenges)**
