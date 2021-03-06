## package.json

---

> **[npm package.json 공식문서](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)**

<br>

> **name**

- `name`과 `version`을 통해 각 패키지의 고유성을 판별

- 규칙

  - 214자보다 짧아야 한다.

  - `.`이나 `_`로 시작할 수 없다.

  - 대문자를 포함하지 않는다.

  - URL의 일부분이자 커맨드 라인의 인수이고 폴더명이므로 URL-safe하지 않은 `name`은 거부

- 조언

  - `Node`의 코어 모듈과 같은 이름을 사용하지 않는다.

  - `name`에 `node` 또는 `js`를 넣지 않는다

  - `name`은 JavaScript 파일 내에서 `require()` 함수의 인수로 사용되므로 짧고 알기 쉬운 것이 좋다.

<br>

> **version**

- `name`과 `version`을 통해 각 패키지의 고유성을 판별

- `version`은 반드시 `npm`의 디펜던시에 포함된 [node-semver](https://github.com/isaacs/node-semver)로 `parsing` 가능해야한다.

<br>

> **description**

- 설명을 문자열로 기술

- npm search로 검색된 리스트에 표시되어 패키지를 찾아내고 이해하는데 도움

<br>

> **keywords**

- 키워드를 문자열 배열로 설명

- npm search로 검색된 리스트에 표시되어 패키지를 찾아내고 이해하는데 도움

<br>

> **homepage**

- 프로젝트 홈페이지가 있을 경우 입력하는 항목

<br>

> **bugs**

- 프로젝트의 이슈와 버그 트래킹을 볼 수 있는 `url`과 이슈를 알릴 `email주소`를 입력

<br>

> **license**

- 패키지 사용자들이 패키지를 사용하기 위해 어떻게 권한을 얻는지, 어떤 금기 사항이 있는지 자세히 명시

<br>

> **files**

- 프로젝트에 포함된 파일의 배열

<br>

> **main**

- 프로그램의 시작점이 되는 모듈의 `ID`

<br>

> **bin**

- 실행할 수 있는 패키지를 만들기 위한 항목

<br>

> **directories**

- CommonJS packages 스펙에는 `directories` 개체를 사용해서 패키지 구성을 나타낼 수 있다.

- `npm`의 package.json을 보면 `dos`,`lib`와 `man`으로 이루어진 디렉토리 구성을 확인 할 수 있다.

<br>

> **repository**

- 소스 코드가 관리되는 저장소의 위치를 지정

<br>

> **scripts**

- 패키지의 생명주기 중 다양한 타이밍에서 실행되는 `script` 명령들을 포함하고 있는 사전.

- 항목 객체에서 키는 이벤트이고, 값은 이떄 실행될 커맨드이다.

<br>

> **config**

- 패키지의 버전에 관계없이 패키지 스크립트에서 사용될 수 있는 설정 정보

<br>

> **dependencies**

- 운영이 아닌 개발 단계에서만 필요한 의존성 모듈

<br>

> **URLs as Dependencies**

- `tarball`의 `url`을 지정할 수 있다.

<br>

> **Git URLs as Dependencies**

- `Git url` 지정

<br>

> **GitHub URLs**

- `npm` 버전 1.1.65부터 GitHub을 `"foo":"user/foo-project"`와 같이 사용할 수 있다

<br>

> **Local Paths**

- `npm` 버전 2.0.0부터 로컬 경로를 패키지에 포함시킬 수 있다.

<br>

> **devDependencies**

- 패키지 테스트 및 문서 작성에 사용되는 외부 프레임 워크 다운으로듣 원하지 않을때 이곳에 디펜던시를 추가한다.

<br>

> **peerDependencies**

- 패키지가 다른 패키지에 직접 `require` 되는 것은 아니지만 그 호스트 패키지와 호환성을 표현.

<br>

> **bundledDependencies**

- 패키지를 퍼블리싱할 떄 번들되는 패키지 이름들의 목록

<br>

> **optionalDependencies**

- 사용을 원하는 모듈이지만, 없거나 설치가 실패해도 `npm`의 패키지 설치 과정이 중단되지 않도록 할때 사용

<br>

> **engines**

- 동작 가능한 `node`의 버전을 지정

<br>

> **engineStrict**

- npm 3.0.0 버전부터 `deprecated` 되었다 (사용되지 않는다)

<br>

> **os**

- 모듈이 어떤 운영체제에서 작동하는지 지정

<br>

> **cpu**

- 특정한 CPU 아키텍쳐에서만 동작한다면 그것을 명시

<br>

> **preferGlobal**

- 패키지가 글로벌 설치를 수행해야만 한다면, 이 값을 `true`로 해서 `local` 설치시에 경고 메시지를 제공

<br>

> **private**

- true로 설정한다면 개인적으로 사용하는 저장소를 `publish` 하는 것을 방지

<br>

> **publishConfig**

- `tag`와 `registry`, `access`를 다룰 때 편리한 기능으로, 이것들을 설정해서 패키지가 `lastest`로 태그되거나, `public registry`에 `publish` 되지 않도록 또 `scoped module`을 기본값으로 `private`로 해주는 것 등을 쉽게 설정

<br>

> **DEFAULT VALUES**

- 기본값 설정

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **1일 1로그 100일 완성 IT지식** > **[npm package.json 공식문서](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)** > **[[NodeJS] 모두 알지만 모두 모르는 package.json](https://programmingsummaries.tistory.com/385)**
