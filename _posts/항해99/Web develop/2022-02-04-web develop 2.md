--- 

title: "[항해99] 웹개발종합반 #2"
excerpt: "웹개발 종합반 1-6~11 CSS 활용" 
categories: [Web develop, Hanghae99]
tag: [항해99, 사전준비, 웹개발종합반] 

---

**[Notice[공지사항]](https://lilclown97.github.io/categories/#notice)**
{: .notice--danger}

<br><br><br>

## login page 

### 1. 새로 사용한 tag

- background-image : 배경 이미지

```python
background-image: url("")
```

- background-size : 배경 사이즈

```python
background-size: cover; #cover는 변경
```

- background-position : 배경 이미지 위치

```python
background-position: center; #center는 변경
```

- width : 가로 크기

```python
width: 300px; #px, % 사용
```

- height : 세로 크기

```python
height: 200px; #px, % 사용
```

- border-radius : 모서리 라운딩

```python
border-radius: 10px; #px, % 사용
```

- margin : 바깥 여백

```python
margin: 40px; #px, % 사용, top/bottom/right/left 별개로 사용 가능.
```

- padding : 안쪽 여백

```python
padding: 40px; #px, % 사용, top/bottom/right/left 별개로 사용 가능.
```

<br>

### 2. Code

- Code

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>로그인 페이지</title>
    <style>
        .mytitle {
            width: 300px;
            height: 200px;

            color: white;

            text-align: center;

            background-image: url("https://www.ancient-origins.net/sites/default/files/field/image/Agesilaus-II-cover.jpg");
            background-size: cover;
            background-position: center;

            border-radius: 10px;

            padding-top: 40px;
        }
        .wrap {
            width: 300px;
            margin: auto;
        }
    </style>
</head>
<body>
    <div class="wrap">
        <div class="mytitle">
            <h1>로그인 페이지</h1>
            <h5>아이디, 비밀번호를 입력해주세요</h5>
        </div>
        <p>ID : <input type="text"/></p>
        <p>PW : <input type="text"/></p>
        <button> 로그인하기</button>
    </div>

</body>
</html>
```

<br>

### 3. Capture

- Capture

![sparta login](https://user-images.githubusercontent.com/98236458/152531998-7ed848ed-29bc-4c1d-86a1-301db97ae643.PNG)

<br><br><br>

## tag 값 변경해보기

### 1. border-radius

- px이나 % 앞의 숫자가 커질수록 라운딩이 완만해짐.

- 10px

![10px](https://user-images.githubusercontent.com/98236458/152533210-6de85f3e-7c00-43f9-95fc-70906b8a7f92.PNG)
- 50px

![50px](https://user-images.githubusercontent.com/98236458/152533242-d40c6971-2d4f-4deb-bb16-929a5bda2f52.PNG)

<br>

### 2. margin, padding

- 상하좌우 같은 값의 margin, padding 적용

```python
margin: 40px; 
padding: 40px; 
```

- 상하좌우 각각 다른 값의 margin, padding 적용

```python
margin: 40px 30px 20px 10px; #앞에서 순서대로 상, 우, 하, 좌
padding: 40px 30px 20px 10px; #앞에서 순서대로 상, 우, 하, 좌
```

- 한쪽 방향 margin, padding 적용

```python
margin-top: 40px; 
margin-right: 40px; 
margin-bottom: 40px; 
margin-left: 40px; 

padding-top: 40px; 
padding-right: 40px; 
padding-bottom: 40px; 
padding-left: 40px; 
```

<br>

### 3. width, height

- px이나 % 앞의 숫자가 커질수록  크기가 커짐

- width: 300px, height: 200px

![300,200](https://user-images.githubusercontent.com/98236458/152535084-7a724349-689e-4940-8a7b-954bc096199b.PNG)

- width: 500px, height: 500px

![500,500](https://user-images.githubusercontent.com/98236458/152535052-3e7d7a0f-bfd9-49f4-a33e-db499b12e621.PNG)

<br><br><br>

## WIL

### 1. margin, padding 차이

- margin : 바깥 여백
- padding : 안쪽 여백

<br>

### 2. tag

- h1, h5, background-image, background-size, background-position
color, width, height, border-radius, margin, padding

<br><br><br>

## 폰트

### 1. google webfont

- [google webfont](https://fonts.google.com/?subset=korean
)

<br>

### 2. styleseet link, CSS rules 복사

- styleseet link

![googlewebfont](https://user-images.githubusercontent.com/98236458/152684272-78c76da6-437f-4d0d-8e2d-7c0640d2891d.PNG)

<br>

- CSS rules

![CSS rules](https://user-images.githubusercontent.com/98236458/152684475-518fd5fa-2a6b-446a-854e-8f0ce4b9df44.PNG)

### 3. 폰트 적용법

- .<head> ~ </head> 사이에 styleseet link 붙여넣기

- .<style> ~ </style> 사이에 CSS rules 붙여넣기

<br>

### 4. Code

- Code

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>로그인 페이지</title>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <style>
        * { 
            font-family: 'Jua', sans-serif;
        }
```

<br><br><br>

## 주석

### 1. 기능

- 임의적으로 코드 작동 정지.

- 설명 추가

<br>

### 2. 사용법

- 원하는 부분 드래그, "Ctrl + /"

<br>

### 3. Code

- Before

```python
* {
            font-family: 'Jua', sans-serif;
        }
```

- After

```python
/** {*/
        /*    font-family: 'Jua', sans-serif;*/
        /*}*/
```

<br><br><br>

## 파일분리

### 1. 파일분리

- css 파일 생성 후 .<style> ~ </style> 사이에 내용 복사

<br>

### 2. 적용법

- python .<head> ~ </head> 사이에 link

```python
<link rel="stylesheet" type="text/css" href = "(css파일이름).css">
```

<br><br><br>

## WIL

### 1. 폰트

- *{} 모든 태그에 적용.

<br><br><br>

## bootstrap

### 1. url

- [bootstrap](https://getbootstrap.com/)

<br>

### 2. bootstrap 시작 템플릿

- Code

```python
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <title>스파르타코딩클럽 | 부트스트랩 연습하기</title>
</head>
<body>
    <button type="button" class="btn btn-primary">나는 버튼이다</button>
</body>
</html>
```

<br><br><br>

## tag

### 1. tag

- linear-gradient

```python
linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
# url 앞에 삽입, 0.5 수치 조정으로 밝게 or 어둡게
```

- 내용물 정렬

```python
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
```

- border

```python
border: 1px solid white; # 1px 굵기, 직선, 흰색
```

- button hover

```python
.mytitle >button:hover { # 버튼에 마우스 올렸을 때 2px, 직선, 흰색
            border: 2px solid white;
        }
```

<br>

### 2. code

- code

```python
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <title>스파르타코딩클럽 | 부트스트랩 연습하기</title>
    <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet"> # bootstrap font link

    <style>
        * {
            font-family: 'Gowun Dodum', sans-serif; # bootstrap font css
        }
        .mytitle {
            background-color: green;

            width: 100%;
            height: 250px;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://movie-phinf.pstatic.net/20210715_95/1626338192428gTnJl_JPEG/movie_image.jpg") ;
            # linear-gradient : 어둡게 or 밝게
            background-position: center;
            background-size: cover;

            color: white;

            display: flex; # 내용물 정렬
            flex-direction: column; # 내용물 정렬
            justify-content: center; # 내용물 정렬
            align-items: center; # 내용물 정렬
        }
        .mytitle > button { # mytitle button만 스타일 설정
            width: 200px;
            height: 50px;

            background-color: transparent; # transparent : 투명
            color: white;

            border-radius: 50px;

            border: 1px solid white; # 테두리

            margin-top: 10px
        }
        .mytitle >button:hover { # hover : 마우스 올렸을 때
            border: 2px solid white;
        }
    </style>
</head>
<body>
    <div class="mytitle">
        <h1>내 생애 최고의 영화들</h1>
        <button>영화 기록하기</button>
    </div>
</body>
</html>
```

<br><br><br>

## WIL

### 1. class 안의 특정 부분 style 적용

- code

```python
.class > button { 

        }
```

<br><br><br>

## 1-10

<br>

### 1. 줄 맞추기

- 원하는 부분 드래그 후 Ctrl+Alt+L

<br>

### 2. bootstrap card

- url : [bootstrap card](https://getbootstrap.com/docs/5.1/components/card/)

- code

```python
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
```

<br>

### 3. facebook symbols

- url : [facebook symbols](https://kr.piliapp.com/facebook-symbols/)

<br><br><br>

## 1-11

<br>

### 1. 영화 URL 부분 만들기

```python
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
```

<br>

### 2. 별점 박스 부분 만들기

```python
<div class="input-group mb-3"> 
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>
```

<br>

### 3. 코멘트 URL 부분 만들기

```python
<div class="form-floating"> 
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
```

<br>

### 4. 모바일 처리

```python
.wrap {
            max-width: 1200px; # 최대 넓이
            width: 95%; # %로 화면 채움
            margin: 20px auto 0 auto;
        }
        .mypost {
            max-width: 500px; # 최대 넓이
            width: 95%; # %로 화면 채움

            margin: 20px auto 0 auto;

            box-shadow: 0 0 3px 0 gray;
            padding: 20px;
        }
```

<br>

### 5. 포스팅 박스 만들기

![연습1](https://user-images.githubusercontent.com/98236458/156640953-5032b456-7896-436f-abed-b88604e58770.png)

![연습2](https://user-images.githubusercontent.com/98236458/156641009-14a15ef0-0762-4b61-b85e-f3f6dc74a202.png)

### 6. 포스팅 박스 만들기 code

```python
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <title>스파르타코딩클럽 | 부트스트랩 연습하기</title>
    <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet">

    <style>
        * {
            font-family: 'Gowun Dodum', sans-serif;
        }
        .mytitle {
            background-color: green;

            width: 100%;
            height: 250px;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://movie-phinf.pstatic.net/20210715_95/1626338192428gTnJl_JPEG/movie_image.jpg") ;
            background-position: center;
            background-size: cover;

            color: white;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .mytitle > button {
            width: 200px;
            height: 50px;

            background-color: transparent;
            color: white;

            border-radius: 50px;

            border: 1px solid white;

            margin-top: 10px
        }
        .mytitle >button:hover {
            border: 2px solid white;
        }
        .mycomment {
            color: gray;
        }
        .wrap {
            max-width: 1200px;
            width: 95%;
            margin: 20px auto 0 auto;
        }
        .mypost {
            max-width: 500px;
            width: 95%;

            margin: 20px auto 0 auto;

            box-shadow: 0 0 3px 0 gray;
            padding: 20px;
        }
        .mybtn {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            margin-top: 10px;
        }
        .mybtn > button {
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="mytitle">
        <h1>내 생애 최고의 영화들</h1>
        <button>영화 기록하기🔥</button>
    </div>
    <div class="mypost">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">영화 URL</label>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">별점</label>
            <select class="form-select" id="inputGroupSelect01">
                <option selected>--선택하기--</option>
                <option value="1">*</option>
                <option value="2">**</option>
                <option value="3">***</option>
                <option value="4">****</option>
                <option value="5">*****</option>
            </select>
        </div>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                      style="height: 100px"></textarea>
            <label for="floatingTextarea2">코멘트</label>
        </div>
        <div class="mybtn">
            <button type="button" class="btn btn-dark">기록하기</button>
            <button type="button" class="btn btn-outline-dark">닫기</button>
        </div>
    </div>
    <div class="wrap">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                         class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">여기에 제목이 들어갑니다.</h5>
                        <p class="card-text">여기에 내용이 들어가지요.</p>
                        <p>⭐⭐⭐</p>
                        <p class="mycomment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                         class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">여기에 제목이 들어갑니다.</h5>
                        <p class="card-text">여기에 내용이 들어가지요.</p>
                        <p>⭐⭐⭐</p>
                        <p class="mycomment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                         class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">여기에 제목이 들어갑니다.</h5>
                        <p class="card-text">여기에 내용이 들어가지요.</p>
                        <p>⭐⭐⭐</p>
                        <p class="mycomment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                         class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">여기에 제목이 들어갑니다.</h5>
                        <p class="card-text">여기에 내용이 들어가지요.</p>
                        <p>⭐⭐⭐</p>
                        <p class="mycomment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
```

