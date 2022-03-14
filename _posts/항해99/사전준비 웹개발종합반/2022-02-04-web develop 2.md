--- 

title: "항해99, 사전준비 웹개발종합반 #2"
excerpt: "[CSS] 웹개발 종합반 1-6"
categories: [hanghae99, web develop]
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
