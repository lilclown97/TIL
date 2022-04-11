--- 

title: "항해99, 사전준비 웹개발종합반 #5" 
excerpt: "[bootstrap] 웹개발 종합반 1-9" 
categories: [hanghae99, web develop] 
tag: [항해99, 사전준비, 웹개발종합반] 

---

**[Notice[공지사항]](https://lilclown97.github.io/categories/#notice)**
{: .notice--danger}

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
