## switch 조건문

---

> **switch**

- `condition` 과 `value` 값을 비교하여 같을 경우 `statement`를 실행하고 `break`하여 조건문을 종료한다. `value`에 원하는 값이 없을 경우 `default`를 실행한다.

- 지금까지는 else if문을 사용하여 switch문을 전혀 사용하지 않았지만 상황에 따라 논리적 참, 거짓보다는 상황에 따라 실행해야 할 경우, 조건이 많을 경우에는 가독성이 else if문보다 뛰어나 유용하게 사용할 수 있을 것 같다.

```javascript
switch (condition) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  ...
  default:
    statement3;
}
```

<br>

> **예제**

- 기본 사용

```javascript
let num = 1;

switch (num) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  default:
    console.log(0);
}

//출력
//1
```

- `default`가 있는 경우

```javascript
let num = 0;

switch (num) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  default:
    console.log(0);
}

//출력
//0
```

- `default`가 없는 경우

```javascript
let num = 0;

switch (num) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
}

//출력
//어떤 조건에도 맞지 않아 출력되지 않음
```

- `break`가 없는 경우

```javascript
let num = 1;

switch (num) {
  case 1:
    console.log(1);

  case 2:
    console.log(2);

  case 3:
    console.log(3);

  case 4:
    console.log(4);
}

// 출력
// 1
// 2
// 3
// 4
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
