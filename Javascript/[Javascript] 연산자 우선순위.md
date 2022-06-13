## 연산자 우선순위

---

> **표**

| 순위 |       기능       |      연산자       |
| :--: | :--------------: | :---------------: | --- |
|  1   |       괄호       |        ()         |
|  2   | 증감/논리 연산자 |    not ++ -- !    |
|  3   | 산술 연산자 곱셈 |      \* / %       |
|  4   | 산술 연산자 덧셈 |        + -        |
|  5   | 비교 연산자 대소 |     < <= > >=     |
|  6   | 비교 연산자 같음 |   == === != !==   |
|  7   |   논리 연산자    |      and &&       |
|  8   |   논리 연산자    |        or         |     |
|  9   |   대입 연산자    | = += -= \*= /= %= |

<br>

> **예제**

```javascript
let example = 1 + 2 * 3; //7
let example2 = (1 + 2) * 3; //9
let example3 = true === 1 < 0; //false
let example4 = true || (true && false); //true
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[자바스크립트 연산자 우선순위 표 및 쉬운 예제 3가지](https://dasima.xyz/javascript-operator-priority/)**
