## 1주차 숙제

<br>

### 1. 팬명록 메인페이지

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
    <link href="https://fonts.googleapis.com/css2?family=Jua&family=Noto+Serif+KR:wght@200&display=swap" rel="stylesheet">
    <title>10cm 팬명록</title>
    <style>
        * {
            font-family: 'Noto Serif KR', serif;
        }
        .mytitle {
            background-color: green;

            width: 100%;
            height: 250px;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.mhns.co.kr/news/photo/202108/509852_616015_3430.jpg");
            background-position: center;
            background-size: cover;

            color: white;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
            align-items: center;

            margin-top: 10px;
        }
        .myquote {
            max-width: 500px;
            width: 95%;

            margin: 20px auto 0 auto;
        }
        .myquote > .card {
            margin: 10px auto 0 auto;
        }
    </style>
</head>
<body>
    <div class="mytitle">
        <h1>십센치(10cm) 팬명록</h1>
    </div>
    <div class="mypost">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">닉네임</label>
        </div>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                      style="height: 100px"></textarea>
            <label for="floatingTextarea2">응원댓글</label>
        </div>
        <div class="mybtn">
            <button type="button" class="btn btn-dark">응원 남기기</button>
        </div>
    </div>
    <div class="myquote">
        <div class="card">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>새로운 앨범 너무 멋져요!</p>
                    <footer class="blockquote-footer">호빵맨
                    </footer>
                </blockquote>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>새로운 앨범 너무 멋져요!</p>
                    <footer class="blockquote-footer">호빵맨
                    </footer>
                </blockquote>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>새로운 앨범 너무 멋져요!</p>
                    <footer class="blockquote-footer">호빵맨
                    </footer>
                </blockquote>
            </div>
        </div>
    </div>

</body>
</html>
```
- ![1주차 숙제](https://user-images.githubusercontent.com/98236458/163969807-c3d759e3-f803-4997-9ec2-2a9ed85b4a01.PNG)
