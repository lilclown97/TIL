--- 

title: "항해99, 사전준비 웹개발종합반 #3" 
excerpt: "[폰트, 주석, 파일분리] 웹개발 종합반 1-7" 
categories: [hanghae99, web develop] 
tag: [항해99, 사전준비, 웹개발종합반] 

---

**[Notice[공지사항]](https://lilclown97.github.io/categories/#notice)**
{: .notice--danger}

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

- <head> ~ </head> 사이에 styleseet link 붙여넣기

- <style> ~ </style> 사이에 CSS rules 붙여넣기

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

- css 파일 생성 후 <style> ~ </style> 사이의 내용 복사

<br>

### 2. 적용법

- <head> ~ </head> 사이에 link

```python
<link rel="stylesheet" type="text/css" href = "(css파일이름).css">
```

<br><br><br>

## WIL

### 1. 폰트

- *{} 모든 태그에 적용