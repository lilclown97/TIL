## [Error] 윈도우10 도커 설치 오류, WSL 2 installation is incomplete

---

> **WSL 2 installation is incomplete**

![](https://velog.velcdn.com/images/lilclown/post/11100049-8fdc-473a-8002-b0029a84c834/image.png)

- 리눅스 커널을 설치하고 재시작하라는데..
  나 윈도우 인걸요..?
  일단 하라니까 해봅니다.

<br>

> **오류 해결 방법**

1. 파워쉘 관리자 권한으로 실행
   - 검색 > `powershell` > 오른쪽 마우스 > 관리자 권한으로 실행
2. 리눅스 서브시스템 활성 명령어 입력

   - `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`

   - 위의 코드 복사 붙여넣기 후 엔터

3. 가상 머신 플랫폼 기능 활성화 명령어 입력

   - `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

   - 위의 코드 복사 붙여넣기 후 엔터

4. x64 머신용 최신 WSL2 Linux 커널 업데이트

   - **[Windows Subsystem for Linux](wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)**

   - 위의 링크에서 설치 파일 다운받아 설치

<br>

> **오류 해결 완료**

![](https://velog.velcdn.com/images/lilclown/post/9db45c8d-0f51-4403-a5be-18b2e1dae842/image.PNG)

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[WSL 2 installation is incomplete, 윈도우10 도커 설치시 리눅스 커널 업데이트, Docker Linux Kernel Update on Windows 10](https://blog.nachal.com/1691)**
