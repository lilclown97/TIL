## 3-1 3주차 설치

<br>

### 1. 파이썬, git bash 설치

- [파이썬](https://www.python.org/ftp/python/3.8.6/python-3.8.6-amd64.exe)
- [git bash](https://git-scm.com/)

<br><br><br>

## 3-2 OpenAPI 활용 복습

<br>

### 1. 스파르타피디아 영화 OpenAPI 붙이기

- star의 별 갯수만큼 ⭐을 반복해서 넣는다.

```python
let star_image = '⭐'.repeat(star)
``` 

- script

```python
$(document).ready(function () {
    listing();
});

function listing() {
    $('#cards-box').empty()
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/web/api/movie",
        data: {},
        success: function (response) {
            let rows = response['movies']
            for (let i = 0; 1 < rows.length; i++) {
                let title = rows[i]['title']
                let desc = rows[i]['desc']
                let image = rows[i]['image']
                let star = rows[i]['star']
                let comment = rows[i]['comment']

                let star_image = '⭐'.repeat(star)

                let temp_html = `<div class="col">
                                    <div class="card">
                                        <img src="${image}"
                                                class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${title}</h5>
                                            <p class="card-text">${desc}</p>
                                            <p>${star_image}</p>
                                            <p class="mycomment">${comment}</p>
                                        </div>
                                    </div>
                                </div>`
                $('#cards-box').append(temp_html)

            }
        }
    })
}
```

- screenshot

![OpenAPI 복습](https://user-images.githubusercontent.com/98236458/164587781-88f436dc-f348-4840-9cb0-30a8f2e1eb62.PNG)

<br><br><br>

## 3-3 파이썬 시작하기

<br>

### 1. 파이썬 프로젝트 생성

- 위치 : venv 폴더 확인
- 기본 인터프린터 : python38 확인

- screenshot

![hello sparta](https://user-images.githubusercontent.com/98236458/164588918-1c4302e8-9b9e-4229-87e0-9477c5ee1dd6.PNG)

<br><br><br>

## 3-4 파이썬 기초 공부

<br>

### 1. 파이썬 기초 문법

- 변수 & 기본연산
![변수, 기본연산](https://user-images.githubusercontent.com/98236458/164604453-c56a6caf-caeb-482d-b429-89ee9de0de8e.PNG)

- 문자형
![문자형](https://user-images.githubusercontent.com/98236458/164604473-aa4f9c64-3b56-4681-8428-0c7d6611277d.PNG)

- list
![list형](https://user-images.githubusercontent.com/98236458/164604506-d11dd38a-d09c-4308-b112-8e8969b24493.PNG)

- dict
![dict](https://user-images.githubusercontent.com/98236458/164604528-55e2c120-f585-4541-8abe-e3ec2ee777f2.PNG)

- 함수
![함수](https://user-images.githubusercontent.com/98236458/164604547-e41f77c6-e86a-4326-b5c9-c678290c577b.PNG)

- 조건문
![조건문](https://user-images.githubusercontent.com/98236458/164604558-91193439-78e8-4a15-bb46-ddfc435ebf60.PNG)

- 반복문
![반복문](https://user-images.githubusercontent.com/98236458/164604571-d0819e8d-3e7f-4485-bb41-cc61501e0837.PNG)

- 예제
![예제](https://user-images.githubusercontent.com/98236458/164604601-1dae2665-6472-4096-94f8-53ef42f23a9d.PNG)

<br><br><br>

## 3-5 파이썬 패키지 설치하기

<br>

### 1. 파이썬 패키지

- 패키지 = 외부 라이브러리

- 가상환경 : 프로젝트별로 패키지들을 담는 환경.
- venv 폴더 = 가상환경(virtual environment)

- 파일 > 설정 > 프로젝트 > python 인터프린터 > '+' > **requests**{: .notice--danger} 설치
- requests : Ajax와 같은 역할

<br><br><br>

## 3-6 패키지 사용해보기

<br>

### 1. 서울시 OpenAPI 사용

- 미세먼지 수치가 70이하인 서울시 구 이름 출력

- screenshot
![패키지 사용](https://user-images.githubusercontent.com/98236458/164606874-c4a0c632-4fcc-4745-b880-9e9638a825f5.PNG)

<br><br><br>

## 3-7 웹스크래핑(크롤링) 기초

<br>

### 1. 영화 제목 가져오기

- 패키지 추가
- 파일 > 설정 > 프로젝트 > python 인터프린터 > '+' > **bs4**{: .notice--danger} 설치

- [네이버 영화 페이지](https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829)

- 크롤링 기본 세팅

```python
import requests
from bs4 import BeautifulSoup

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')

#############################
# (입맛에 맞게 코딩)
#############################
```

- screenshot
![크롤링](https://user-images.githubusercontent.com/98236458/164648342-d0634128-df4c-4a39-9369-df72645ba7c8.PNG)

<br><br><br>

## 3-8 Quiz_웹스크래핑(크롤링) 연습

<br>

### 1. 연습하기

- ![풀이](https://user-images.githubusercontent.com/98236458/164651184-917b9de2-bb87-4242-8431-d9e64e9a4ded.PNG)

<br>

### 2. 답안

- ![답안](https://user-images.githubusercontent.com/98236458/164651215-a05470d9-3bf8-439b-b375-e3d6f8815cf0.PNG)

<br>

### 3. 리뷰

- 출력은 똑같이 나오나 title, rank, star을 if문 안에서 지정하는것과 for문 안에서 지정한 부분이 다르고, 답안에서는 title, rank, star에 정확한 값을 입력했지만 본인은 print 함수에서 값을 고르도록 코딩.