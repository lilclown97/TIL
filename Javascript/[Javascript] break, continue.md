## break, continue

---

> **break, continue**

- 반복문을 종료하거나 하위 실행문을 실행하지 않고 다음으로 넘어갈 때 사용한다.

- 반복문을 실행하면서 특정 조건을 건너뛰거나 더이상 실행하지 않아도 될때 유용하게 사용할 수 있다.

<br>

> **break**

- 실행되는 순간 반복문을 더이상 반복하지 않고 종료한다.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 1
// 2
```

<br>

> **continue**

- `continue` 뒤의 실행문을 실행하지 않고 다시 조건식으로 돌아간다.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// 1
// 2
// 4
// 5
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
