--- 

title: "[항해99] 웹개발종합반 #1"
excerpt: "웹개발 종합반 1-1 ~ 1-5 HTML, CSS 기초"
categories: [Web develop, Hanghae99]
tag: [항해99, 사전준비, 웹개발종합반]

---

**[Notice[공지사항]](https://lilclown97.github.io/categories/#notice)**
{: .notice--danger}

<br><br><br>

## HTML의 구성

### 1. 기본 개념

- HTML : 뼈대

- CSS : 꾸미기  .

- 확장자 : .html

<br>

### 2. TAG

- head : 웹 페이지의 정보, 문서에서 사용할 외부 파일들을 링크. (title, meta)

- body : 브라우저에 실제 표시되는 내용.

- div : 의미 X, 컨텐츠들을 어떤 목적에 따라 묶을 때 사용. (줄 바꿈 O)

- span : 의미 X, 컨텐츠들을 어떤 목적에 따라 묶을 때 사용. (줄 바꿈 X)

- p : 단락.

- ul : 순서가 없는 list, 글자 앞에 불릿이 붙음.

- ol : 순서가 있는 list, 숫자나 영문 순서가 들어간다.

- li : ul, ol 안에 각 항목을 나열할 때 사용.

- hn : h1~h6, 제목 등으로 사용. 숫자가 높을수록 글자 크기가 작다.

- a : anchor, 웹 페이지나 외부 사이트 연결

- hr : 내용을 구분할 때 사용

- img : 이미지 삽입

- input : 입력

- button : 버튼

- textarea : 여러 줄의 긴 문장 입력

<br><br><br>

## login page 만들기

### 1. login page

- Code

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>로그인 페이지</title>
    <style>
        .mytitle {
            color: red;
        }
    </style>
</head>
<body>
    <h1 class="mytitle">로그인 페이지</h1>
    <p>ID : <input type="text"/></p>
    <p>PW : <input type="text"/></p>
    <button> 로그인하기</button>
</body>
</html>
```

- Capture

![login](https://user-images.githubusercontent.com/98236458/152328289-a9de6944-fcac-454c-a0a4-13c64bbd45e2.PNG)

<br><br><br>

## CSS

### 1. class, id

- class : 그룹으로 묶어서 스타일 지정.

- id : 한 가지만 스타일 지정. 하나의 문서에 고유한 id 하나.


<br>

### 2. 속성 정의

- Code

```python
<style>
        .classname { color: red; }
</style>
```

<br>

### 3. tag에 class 부여

- Code

```python
<body>
    <h1 class="classname">text</h1>
</body>
```

<br><br><br>

## WIL

### 1. HTML

- 뼈대

- tag

<br>

### 2. CSS

- 꾸미기

- style

- 가장 외곽의 태그가 1순위 안쪽으로 2순위, 3순위 ...
