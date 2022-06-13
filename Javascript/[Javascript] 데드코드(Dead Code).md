## 데드코드(Dead Code)

---

> **데드코드란?**

- 전혀 실행되지 않는 코드

- 일반적으로 조건에 따른 분기문에서 발생

<br>

> **예제**

```javascript
function deadCode() {
  return 'deadCode';
  console.log('deadCode'); //실행되지 않는 데드코드
}

console.log(deadCode());

//실행결과
//'deadCode'
```

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
