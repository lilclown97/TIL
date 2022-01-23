## 소수점 오류

---

> **소수점 오류**

```javascript
let num = 0.1 + 0.2;

console.log(num); //0.30000000000000004
```

- 이와 같은 현상이 발생하는 이유는 `10/3=3.333333..` 이라는 계산 결과가 나오는 것처럼 소수를 2진수로 바꾸는 과정에서 무한 소수로 바뀌어버리기 때문

![](https://velog.velcdn.com/images/lilclown/post/70f6480a-9124-4df4-988a-d7feefcda65f/image.png)

<br>

> **해결 방안**

- [toFixed() 메소드](https://velog.io/@lilclown/Javascript-%EC%88%AB%EC%9E%90%ED%98%95-%EB%A9%94%EC%86%8C%EB%93%9CtoFixed-toString)를 활용하여 소수 자리수 지정

- [Math 객체](https://velog.io/@lilclown/Javascript-Math-%EA%B0%9D%EC%B2%B4)를 활용하여 반올림, 올림, 내림

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[Javascript 소수점 오류 원인, 해결방안](https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98)**
