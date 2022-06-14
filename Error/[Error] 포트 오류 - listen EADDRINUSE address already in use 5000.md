## listen EADDRINUSE: address already in use :::5000

---

> **5000번 포트 사용중 오류**

![](https://velog.velcdn.com/images/lilclown/post/245094be-4f45-4108-b0d8-4eb14a4e2fcd/image.PNG)

- EC2에 4주차 과제를 배포하여 제출하려고 하는 과정에서 위와 같은 오류가 발생하여 구글링 해보니 5000번 포트를 이미 사용 중 이라서 5000번 포트로 app.js를 실행할 수 없다는 뜻.

- 오늘도 열심히 구글링을 해서 사용중인 5000번 포트를 종료 시켜 보기로 했다.

<br>

> **윈도우 사용 중 포트 종료**

- cmd 명령 프롬프트를 이용하여 사용중인 포트를 확인하고 PID를 알아내어 종료하면 된다고 한다.

- `netstat` 명령어를 이용하여 사용중인 포트 확인이 가능

- `netstat -ano` 명령어를 이용하여 사용중인 포트, `a`는 모든 연결 및 수신 대기포트 표시, `n`은 주소와 포트 번호를 숫자 형식으로 표시, `o`는 각 연결의 소유자 프로세스 ID, 즉 PID

![](https://velog.velcdn.com/images/lilclown/post/32814a27-a245-4701-8bea-5f6cd23c43db/image.PNG)

- 명령어를 사용하여 포트를 확인해보았으나 눈을 씻고 찾아봐도 5000번 포트를 사용중이지 않다..

<br>

> **맥 사용 중 포트 종료**

- 혹시나 사용중인 AWS EC2에서 5000번 포트를 사용중인게 아닐까 싶어서 맥에서 사용중인 포트를 종료하는 방법도 찾아보았다.

- `lsof -i :[포트번호]` 명령어를 이용하여 포트번호의 PID 확인 가능.

- `kill -9 [PID]` 명령어로 포트 종료 가능.

![](https://velog.velcdn.com/images/lilclown/post/89a57f6c-afec-44b9-8294-58103432b042/image.PNG)

- 5000번 포트의 PID 값을 찾아서 종료하고 혹시나 싶어서 다시 5000번 포트를 확인해보니 다른 PID 값으로 사용중.. 몇번을 반복해도 마찬가지..

<br>

> **오류 해결 완료**

- 이걸 오류 해결 완료라고 봐도 되는지 모르겠는데 어쨌든 5000번 포트 종료가 아무리 해도 되지 않아 결국 포트 번호를 바꾸어서 서버를 배포하는데 성공했다.

![](https://velog.velcdn.com/images/lilclown/post/221889f7-35d9-4ea3-99ef-a79e740be601/image.PNG)

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[윈도우10 사용중인 포트 확인 및 종료하는 법](https://jun7222.tistory.com/653)** > **[[TIL] 에러노트📕 - [Node js] address already in use](https://velog.io/@nomadhash/TIL-%EC%97%90%EB%9F%AC%EB%85%B8%ED%8A%B8-Node-js-address-already-in-use)**
