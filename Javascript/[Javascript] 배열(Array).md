## 배열(Array)

---

> **배열**

- `name`과 `index`로 참조되는 정렬된 값,`element`(요소)의 집합

```javascript
let Array = [name]; //index 0 부터 시작
```

<br>

> **배열 참조**

- 대괄호 표기법을 사용하여 `index`값으로 `element`를 불러올 수 있다

```javascript
let array = ['윤영성', 26, true];

console.log(array[0]); //윤영성
console.log(array[1]); //26
```

<br>

> **배열 요소 추가, 삭제, 찾기**

- 추가

  - push() , 배열 끝에 요소 추가

  ```javascript
  let array = ['윤영성', 26, true];

  array.push('push');

  console.log(array[3]); //push
  ```

  - unshift(), 배열 맨 앞에 요소 추가

  ```javascript
  let array = ['윤영성', 26, true];

  array.unshift('unshift');

  console.log(array[0]); //unshift
  ```

  - 지정한 위치에 요소 추가

  ```javascript
  let array = ['윤영성', 26, true];

  array[4] = 4;

  console.log(array); //[ '윤영성', 26, true, <1 empty item>, 4 ]
  ```

- 삭제

- pop(), 배열 마지막 요소 삭제

```javascript
let array = ['윤영성', 26, true];

array.pop();

console.log(array); //[ '윤영성', 26 ]
```

- shift(), 배열 첫번째 요소 삭제

```javascript
let array = ['윤영성', 26, true];

array.shift();

console.log(array); //[ 26, true ]
```

- splice(시작 index, 삭제 개수), 지정 위치에 있는 요소 n개 삭제

```javascript
let array = ['윤영성', 26, true, 1, 2, 3];

array.splice(1, 2);

console.log(array); //[ '윤영성', 1, 2, 3 ]
```

- splice는 요소를 삭제하고 그 자리에 요소를 추가할 수 있음

```javascript
let array = ['윤영성', 26, true, 1, 2, 3];

array.splice(1, 2, false, false);

console.log(array); //[ '윤영성', false, false, 1, 2, 3 ]
```

- delete, 요소는 그대로 두고 값만 삭제

```javascript
let array = ['윤영성', 26, true];

delete array[0];

console.log(array); //[ <1 empty item>, 26, true ]
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
