## nodemon : 이 시스템에서 스크립트를 실행할 수 없으므로

---

> **nodemon 오류**

- vscode에서 node.js를 사용하여 학습중인데 수정할때마다 `node app.js` 명령으로 프로그램을 실행시키고 다시 컸다가 켜고 하는 과정이 너무 귀찮아서 저장되었을때 자동으로 재실행 시켜주는 `nodemon` 이라는 라이브러리를 찾아서 사용하려던 과정에서 발생한 오류

```
nodemon : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\sunho\AppData\Roaming\npm\nodemon.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오.       
위치 줄:1 문자:1
+ nodemon app.js
+ ~~~~~~~
    + CategoryInfo          : 보안 오류: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

- 위와 같은 에러 메세지를 확인하고 보안 오류라는 건 알겠으나 구글링을 하지 않고는 해결할 방법이 없다.

- 스크립트의 실행 권한이 제한되어 있어 발생하는 문제임을 알게되었고 스크립트 실행 권한을 변경 해주면 된다고 한다.

<br>

> **오류 해결 방법**

- `windows powershell`을 관리자 권한으로 실행

- `get-ExecutionPolicy` 로 현재 스크립트 실행 권한을 확인한다.

- RemoteSigned 상태가 아니라면 스크립트가 실행 되지 않는다.

- `Set-ExecutionPolicy RemoteSigned` 을 이용하여 스크립트 실행 권한을 바꿔주고 `Y`를 입력하여 마무리.

- `get-ExecutionPolicy`로 정상적으로 바뀌었는지 확인

![](https://velog.velcdn.com/images/lilclown/post/8476cbbf-8aea-4a8c-ae56-3d0242916277/image.PNG)


<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[[error] VSCode 오류(이 시스템에서 스크립트를 실행할 수 없으므로 ~ps1 파일을 로드할 수 없음)](https://prefer2.tistory.com/entry/error-VSCode-%EC%98%A4%EB%A5%98%EC%9D%B4-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%97%90%EC%84%9C-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%A0-%EC%88%98-%EC%97%86%EC%9C%BC%EB%AF%80%EB%A1%9C-ps1-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%A1%9C%EB%93%9C%ED%95%A0-%EC%88%98-%EC%97%86%EC%9D%8C)**
