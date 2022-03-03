--- 

title: "항해99, 사전준비 웹개발종합반 #7" 
excerpt: "[bootstrap] 웹개발 종합반 1-11"
categories: [hanghae99, web develop] 
tag: [항해99, 사전준비, 웹개발종합반]

---

**[Notice[공지사항]](https://lilclown97.github.io/categories/#notice)**
{: .notice--danger}

<br><br><br>

## WIL 

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

### 6. 포스팅 박스 만들기

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

<br>

