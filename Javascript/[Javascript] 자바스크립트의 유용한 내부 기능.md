## ⬛ forEach 메소드

---

<br>

- 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드

- 첫 번째 아규먼트로 콜백 함수를 전달받고 콜백 함수의 파라미터에는 각각 배열의 요소, index, 메소드를 호출한 배열이 전달.

- indes, array 생략 가능

```javascript
const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
  console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});
```

<br><br>

## ⬛ map 메소드

---

<br>

- forEach와 비슷하게 배여르이 요소를 하나씩 살피며 반복 작업을 하는 메소드

- 첫번째 아규먼트로 전달하는 콜백 함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴

```javascript
const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]
```

<br><br>

## ⬛ filter 메소드

---

<br>

- 배열의 요소를 하나씩 살펴보면서 콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 새로운 배열을 리턴하는 메소드

```javascript
const devices = [
  { name: 'GalaxyNote', brand: 'Samsung' },
  { name: 'MacbookPro', brand: 'Apple' },
  { name: 'Gram', brand: 'LG' },
  { name: 'SurfacePro', brand: 'Microsoft' },
  { name: 'ZenBook', brand: 'Asus' },
  { name: 'MacbookAir', brand: 'Apple' },
];

const apples = devices.filter((element, index, array) => {
  return element.brand === 'Apple';
});

console.log(apples); // (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]
```

<br><br>

## ⬛ find 메소드

---

<br>

- filter 메소드와 비슷하게 동작하지만 배열의 요소들을 반복하는 중에 콜백함수가 리턴하는 조건과 일치하는 가장 첫번째 요소를 리턴하고 반복을 종료

```javascript
const devices = [
  { name: 'GalaxyNote', brand: 'Samsung' },
  { name: 'MacbookPro', brand: 'Apple' },
  { name: 'Gram', brand: 'LG' },
  { name: 'SurfacePro', brand: 'Microsoft' },
  { name: 'ZenBook', brand: 'Asus' },
  { name: 'MacbookAir', brand: 'Apple' },
];

const myLaptop = devices.find((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
  return element.name === 'Gram';
});

console.log(myLaptop); // {name: "Gram", brand: "LG"}
```

<br><br>

## ⬛ some 메소드

---

<br>

- 배열 안에 콜백함수가 리턴하는 조건을 만족하는 요소가 1개 이상 있는지를 확인하는 메소드

- 모든 요소가 콜백함수가 리턴하는 조건을 만족하지 않는다면 `false`를 리턴하고, 조건을 만족하는 요소가 등장하면 `true`를 리턴하고 반복을 종료

```javascript
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2, 3까지만 출력됨.
  return element > 5;
});

console.log(someReturn); // true;
```

<br><br>

## ⬛ every 메소드

---

<br>

- 배열 안에 콜백 함수가 리턴하는 조건을 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드

- 배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족한다면 `true`를 리턴하고, 조건을 만족하지 않는 요소가 등장한다면 `false`를 리턴하고 반복을 종료

```javascript
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log(index); // 콘솔에는 0까지만 출력됨.
  return element > 5;
});

console.log(everyReturn); // false;
```

<br><br>

## ⬛ reduce 메소드

---

<br>

- 누적값을 계산할 떄 활용하는 메소드

- 두 개의 파라미터를 활용하는데 첫번쨰 파라미터는 콜백함수로 콜백함수의 리턴값이 다음에 동작할 콜백함수의 첫번째 파라미터로 전달. 결과적으로 마지막 콜백함수가 리턴하는 값이 reduce 메소드의 최종 리턴값.

- 두번쨰 파라미터로 전달한 초기값이 첫 번째로 실행될 콜백함수의 가장 첫번째 파라미터로 전달

```javascript
const numbers = [1, 2, 3, 4];

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

console.log(sumAll); // 10
```

<br><br>

## ⬛ sort 메소드

---

<br>

- 배열을 정렬하는 메소드

- 아규먼트를 전달하지 않을 때 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬

- 메소드를 실행하는 원본 배열의 요소들을 정렬

```javascript
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
```

- 오름차순 내림차순 정렬

```javascript
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
```

<br><br>

## ⬛ reverse 메소드

---

<br>

- 배열의 순서를 뒤집어 주는 메소드

- 원본 배열의 요소를 뒤집는다

```javascript
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
```

<br><br>

## ⬛ 객체와 비슷한 Map

---

<br>

- Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷

- 할당 연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 Map은 메소드를 통해서 값을 추가하거나 접근

- 문자열과 심볼 값만 key로 사용할 수 있는 일반 객체와는 다르게 Map 객체는 메소드를 통해 값을 다룰 수 있다.

|       메소드        |                                             설명                                             |
| :-----------------: | :------------------------------------------------------------------------------------------: |
| map.set(key, value) |                            key를 이용해 value를 추가하는 메소드.                             |
|    map.get(key)     |           key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.           |
|    map.has(key)     |                key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.                 |
|   map.delete(key)   |                             key에 해당하는 값을 삭제하는 메소드.                             |
|     map.clear()     |                            Map 안의 모든 요소를 제거하는 메소드.                             |
|      map.size       | 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할) |

```javascript
// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
```

<br><br>

## ⬛ 배열과 비슷한 Set

---

<br>

- 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷

- 배열의 메소드는 활용할 수 없고 Set만의 메소드를 통해서 값을 다룬다.

|      메소드       |                                                      설명                                                       |
| :---------------: | :-------------------------------------------------------------------------------------------------------------: |
|  set.add(value)   |               값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)                |
|  set.has(value)   |                          Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.                           |
| set.delete(value) | 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.) |
|    set.clear()    |                                      Set 안의 모든 요소를 제거하는 메소드.                                      |
|     set.size      |          요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)           |

```javascript
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0
```

- Set에는 개별 값에 바로 접근하는 방법이 없어 반복문을 통해 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근

```javascript
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members) {
  console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}
```

- Set은 중복되는 값을 허용하지 않는 독특한 특징을 가짐

```javascript
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('영훈'); // Set(2) {"영훈", "윤수"}
members.add('영훈'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('동욱'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
```

- 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set를 활용하기도 한다.

```javascript
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
