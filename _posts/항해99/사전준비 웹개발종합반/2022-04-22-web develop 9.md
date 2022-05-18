--- 

title: "[항해99] 웹개발종합반 #9" 
excerpt: "웹개발 종합반 3-9~15 mongoDB" 
categories: [Web develop]
tag: [항해99, 사전준비, 웹개발종합반] 

---

**[Notice[공지사항]](https://lilclown97.github.io/notice/Notice1/)**
{: .notice--danger}

<br><br><br>

## 3-9 DB 개괄

<br>

### 1. DB

- **Index**{: .notice--danger}라는 순서로 정렬되어 있는 데이터를 잘 찾아쓰기 위해.

<br>

### 2. DB의 종류

- SQL - ex) MS-SQL
행/열로 이루어진 엑셀에 데이터를 저장하는 것과 유사. 데이터의 일관성이나 분석에 용이.

- NoSQL - ex) MongoDB
딕셔너리 형태로 데이터를 저장해두는 DB. 자유로운 형태의 데이터 적재에 유리하지만 일관성이 부족.

<br><br><br>

## 3-10 mongoDB 시작하기

<br>

### 1. 회원가입/설정

- [MongoDB](https://account.mongodb.com/account/register)

- 구글 로그인 > Accept... Service 체크 > Submit
- python 체크 > shared(FREE) > 싱가포르 > Create Cluster

<br>

### 2. 연결 준비하기

- connect > Allow Access from Anywhere > Add IP address
- Username, Password 입력 > Create Database User
- Choose a connection method

<br><br><br>

## 3-11 mongoDB 연결하기

<br>

### 1. 패키지 설치하기

- 파일 > 설정 > 프로젝트 > python 인터프린터 > '+' > **pymongo**{: .notice--danger} 설치
- 파일 > 설정 > 프로젝트 > python 인터프린터 > '+' > **dnspython**{: .notice--danger} 설치

<br>

### 2. mongoDB URL

- Connect your application > Driver:Python, Version:3.6 or later

<br>

### 3. pymongo 기본 코드

- code

```python
from pymongo import MongoClient
client = MongoClient('여기에 URL 입력')
db = client.dbsparta
```

<br>

### 4. 연결 확인

- mongoDB에 데이터 넣기

```python
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.lovi7.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

doc = {
    'name' : 'bob',
    'age' : 27
}

db.users.insert_one(doc)
```

<br><br><br>

## 3-12 pymongo로 DB 조작하기

<br>

### 1. save

- code1

```python
db.users.insert_one({'name':'bobby','age':21})
```
- code2

```python
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)
```

<br>

### 2. find

- code

```python
all_users = list(db.users.find({},{'_id':False}))
```

<br>

### 3. find_one

- code

```python
user = db.users.find_one({'name':'bobby'})
```

<br>

### 4. update_one

- code

```python
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})
```

<br>

### 5. delete_one

- code

```python
db.users.delete_one({'name':'bobby'})
```

<br><br><br>

## 3-13 웹스크래핑 결과 저장하기

<br>

### 1. 3-8에서 웹스크래핑한 결과 mongoDB에 저장

- mongoDB 연결 (복사하여 사용)

```python
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.lovi7.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta
```

- code

```python
import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.lovi7.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

movies = soup.select('#old_content > table > tbody > tr')

for movie in movies:
    a = movie.select_one('td.title > div > a')
    if a is not None:
        title = a.text
        rank = movie.select_one('td:nth-child(1) > img')['alt']
        star = movie.select_one('td.point').text
        print(rank, title, star)

        doc = {
            'title':title,
            'rank':rank,
            'star':star
        }
        db.movies.insert_one(doc)
```

- screenshot

![캡처](https://user-images.githubusercontent.com/98236458/165057414-f3a3d689-b51a-4663-be2f-16f0128dfa76.PNG)

<br><br><br>

## 3-14 Quiz_웹스크래핑 결과 이용하기

<br>

### 1. 가버나움 평점 가져오기

- code

```python
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.lovi7.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

movie = db.movies.find_one({'title':'가버나움'})

print(movie['star'])
```

- screenshot

![가버나움 평점](https://user-images.githubusercontent.com/98236458/165072032-ec0db10f-a1d5-4ea1-8edc-cffee36f4dbe.PNG)

<br>

### 2. 가버나움과 평점 같은 영화 제목 가져오기

- code

```python
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.lovi7.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

movie = db.movies.find_one({'title':'가버나움'})
star = movie['star']

find_movie = list(db.movies.find({'star':star},{'_id':False}))

for target in find_movie:
    print(target['title'])
```

- screenshot

![가버나움 평점 같은 영화](https://user-images.githubusercontent.com/98236458/165072647-68ccc087-6a47-46f3-9ba6-59b028a69ec8.PNG)

<br>

### 3. 가버나움 평점 0으로 만들기

- code

```python
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.lovi7.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

db.movies.update_one({'title':'가버나움'},{'$set':{'star':'0'}})
```

- screenshot

![가버나움 평점 0](https://user-images.githubusercontent.com/98236458/165072868-b300ea1b-b6be-457c-a383-4d25b9134942.PNG)

<br>

