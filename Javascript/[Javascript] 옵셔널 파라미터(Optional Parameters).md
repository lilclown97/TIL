## 옵셔널 파라미터(Optional Parameters)

---

> **옵셔널 파라미터란?**

- 기본 값(default value)이 설정된 파라미터

<br>

> **예제**

```javascript
function optionalParameters(name, age, gender = '남') {
  console.log(name, age, gender);
}

optionalParameters('윤영성', 26);

//실행결과
//'윤영성' 26 '남'
```

- 옵셔널 파라미터가 중간에 들어가게 되면 `undefined`가 나온다.

```javascript
function optionalParameters2(name, gender = '남', age) {
  console.log(name, age, gender);
}

optionalParameters2('윤영성', 26);

//실행결과
//'윤영성' undefined 26
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
