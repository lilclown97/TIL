## ⬛ 비동기 실행

---

### ◾ 비동기

<br>

- 특정 작업을 시작하고 완벽하게 다 처리하기 전에 실행 흐름이 바로 다음 코드로 넘어가고 나중에 콜백이 실행되는 것을 비동기 실행이라 한다.

- 동기 실행에 비해 동일한 작업을 더 빠른 시간 내에 처리할 수 있다.

```javascript
console.log('Start!');

fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

console.log('End');
```

- 위의 코드에는 `(response)=>response.text()`, `(result)=>{console.log(result);}` 두 개의 콜백이 있는데 비동기 실행에서의 실행 순서는 아래와 같다.

  1. console.log('Start');
  2. fetch 함수(리퀘스트 보내기 및 콜백 등록)
  3. console.log('End');
  4. 리스폰스가 오면 2. 에서 then 메소드로 등록해뒀던 콜백 실행

![](https://velog.velcdn.com/images/lilclown/post/959d428c-fd66-4d9b-9400-6c8179406b76/image.PNG)

<br>

### ◾ 비동기 실행 함수

<br>

1. setTimeout

   - 특정 함수의 실행을 원하는 시간만큼 뒤로 미루기 위해 사용하는 함수

   ```javascript
   console.log('a');
   setTimeout(() => {
     console.log('b');
   }, 2000);
   console.log('c');
   ```

   - 위의 코드를 실행 시 a와 c가 먼저 출력되고 약 2초가 지난 후에 b가 출력된다.

2. setInterval

   - 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수

   ```javascript
   console.log('a');
   setInterval(() => {
     console.log('b');
   }, 2000);
   console.log('c');
   ```

   - 위의 코드 실행 시 a와 c가 출력되고 약 2초뒤에 b가 출력된 후 그 뒤로 계속 2초 간격으로 b가 반복 출력된다.

<br><br>

## ⬛ Promise Chaining

---

- 비동기 작업을 순차적으로 처리하기 위함

![](https://velog.velcdn.com/images/lilclown/post/12652653-8a38-4266-907b-907a526c012a/image.PNG)

![](https://velog.velcdn.com/images/lilclown/post/b9489f60-2b4e-49e2-9a69-ccf78a38e2ad/image.PNG)

![](https://velog.velcdn.com/images/lilclown/post/b6c2f6d8-f6d1-4c58-b6eb-f4c1037406e2/image.PNG)

![](https://velog.velcdn.com/images/lilclown/post/f420028c-8e28-4495-a831-4e19cdb17633/image.PNG)

<br><br>

## ⬛ rejected 상태에서 실행할 콜백

---

```javascript
fetch('URL')
  .then(
    (response) => response.text(),
    (error) => {
      console.log(error);
    }
  )
  .then((result) => {
    console.log(result);
  });
```

![](https://velog.velcdn.com/images/lilclown/post/8a42d1ce-aa07-4e68-b0f4-a0ec52404766/image.PNG)

<br><br>

## ⬛ then 메소드

---

### ◾ then 메소드

<br>

```javascript
const successCallback = function () {};
const errorCallback = function () {};

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then(successCallback, errorCallback); // Promise-B
```

- fetch 메소드가 리턴하는 Promise 객체를 Promise-A 객체, then 메소드가 리턴하는 Promise 객체를 Promise-B 객체라고 할 때

  - fetch 함수의 작업이 성공해서 Promise-A 객체가 fulfilled 상태가 된 경우 : then 메소드 안의 "첫 번째" 콜백인 successCallback이 실행

  - fetch 함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 된 경우 : then 메소드 안의 "두 번째" 콜백인 errorCallback이 실행

<br>

### ◾ 경우에 따른 then 메소드

<br>

1. 실행된 콜백이 어떤 값을 리턴하는 경우

   - Promise 객체를 리턴하는 경우

     ```javascript
     fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((result) => {
         console.log(result);
       });
     ```

     - 콜백이 리턴한 Promise 객체의 상태와 결과를 똑같이 따라 갖는다.

   - Promise 객체 이외의 값을 리턴하는 경우

     ```javascript
     // Internet Disconnected

     fetch('https://jsonplaceholder.typicode.com/users')
       .then(
         (response) => response.json(),
         (error) => 'Try again!'
       )
       .then((result) => {
         console.log(result);
       });
     ```

     - Promise가 fulfilled 상태가 되고 작업 성공 결과로 'Try again' 문자열을 갖게 된다.

2. 실행된 콜백이 아무 값도 리턴하지 않는 경우

   ```javascript
   // Internet Disconnected

   fetch('https://jsonplaceholder.typicode.com/users')
     .then(
       (response) => response.json(),
       (error) => {
         alert('Try again!');
       }
     )
     .then((result) => {
       console.log(result);
     });
   ```

   - 자바스크립트에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주

3. 실행된 콜백 내부에서 에러가 발생하는 경우

   ```javascript
   fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => {
           ...
           throw new Error('failed');
           ...
     });
   ```

   - Promise 객체가 rejected 상태가 되고, 작업 실패 정보로 해당 에러 객체를 갖게 된다.

4. 아무런 콜백도 실행되지 않는 경우

   ```javascript
   // Internet Disconnected

   fetch('https://www.google.com') // Promise-1
     .then((response) => response.text()) // Promise-2
     .then(
       (result) => {
         console.log(result);
       },
       (error) => {
         alert(error);
       }
     );
   ```

   - 이전 Promise 객체와 동일한 상태와 결과를 갖게 된다.

<br><br>

## ⬛ catch 메소드

---

### ◾ catch

<br>

```javascript
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(result);
  });
```

```javascript
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then((response) => response.text()) // Promise-B
  .then(undefined, (error) => {
    console.log(error);
  }) // Promise-C
  .then((result) => {
    console.log(result);
  }); // Promise-D
```

- 위의 두 가지 코드가 같은 실행 결과를 가진다.

<br>

### ◾ catch 메소드를 여러 개 쓰는 경우

<br>

```javascript
fetch('https://friendbook.com/my/newsfeeds')
  .then((response) => response.json()) // -- A
  .then((result) => {
    // -- B
    const feeds = result;
    // 피드 데이터 가공...
    return processedFeeds;
  })
  .catch((error) => {
    // -- C
    // 미리 저장해둔 일반 뉴스를 보여주기
    const storedGeneralNews = getStoredGeneralNews();
    return storedGeneralNews;
  })
  .then((result) => {
    /* 화면에 표시 */
  }) // -- D
  .catch((error) => {
    /* 에러 로깅 */
  }); // -- E
```

- 에러가 발생하여도 실패한 작업 대신 다른 방법을 통해서 작업을 정상적으로 끝마칠 수 있는 상황이라면 catch 메소드를 중간에 사용하기도 한다.

<br><br>

## ⬛ finally 메소드

---

- promise 객체의 상태와 상관 없이 항상 실행하는 콜백

![](https://velog.velcdn.com/images/lilclown/post/75260001-48af-4d6d-8248-5dc945755d9a/image.PNG)

<br><br>

## ⬛ Promise 객체

---

### ◾ promise 객체 등장 이유

<br>

- 함수에 콜백을 직접 넣는 형식으로 발생하는 콜백 헬(callback hell) 문제를 해결하기 위해

```javascript
fetch('https://first.com', (response) => {
  // Do Something
  fetch('https://second.com', (response) => {
    // Do Something
    fetch('https;//third.com', (response) => {
      // Do Something
      fetch('https;//fourth.com', (response) => {
        // Do Something
      });
    });
  });
});
```

```javascript
fetch('https://first.com')
  .then((response) => {
    // Do Something
    return fetch('https://second.com');
  })
  .then((response) => {
    // Do Something
    return fetch('https://third.com');
  })
  .then((response) => {
    // Do Something
    return fetch('https://third.com');
  });
```

- 위의 두 코드는 같은 실행 결과를 가지는 코드이지만 promise 객체를 사용하지 않은 코드는 가독성이 현저히 떨어지고 코드의 양이 늘어난다면 가독성이 현저히 떨어진다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
