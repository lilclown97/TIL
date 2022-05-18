---

title: "[항해99] 웹개발종합반 복습 #5" 
excerpt: "웹개발 종합반 복습 scraping, crawling" 
categories: [web develop]
tag: [항해99, 사전준비, 웹개발종합반] 

---

**[Notice[공지사항]](https://lilclown97.github.io/notice/Notice1/)**
{: .notice--danger}

<br><br><br>

## 영화 페이지 스크래핑

### 영화 페이지

- [네이버 영화](https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829)

### 완성본

- ![Untitled](https://user-images.githubusercontent.com/98236458/165702665-1d059201-4b1e-4108-bff7-c01db011c1b0.png)


### 기본 세팅

```python
import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

# 코딩 시작
```

### 완성 코드

```python
import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

#old_content > table > tbody > tr:nth-child(3) > td.title > div > a
#old_content > table > tbody > tr:nth-child(4) > td.title > div > a

movies = soup.select('#old_content > table > tbody > tr')

for movie in movies:
    a = movie.select_one('td.title > div > a')
    if a is not None:
        title = a.text
        rank = movie.select_one('td:nth-child(1) > img')['alt']
        star = movie.select_one('td.point').text
        print(rank, title, star)
```

<br><br><br>

## 지니뮤직 스크래핑

### 지니뮤직

- [지니뮤직](https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20210701)

### 완성본

- ![Untitled (1)](https://user-images.githubusercontent.com/98236458/165703104-7f4eaeec-e495-4940-af37-f4666c25b34c.png)

### 기본 세팅

```python
import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

# 코딩 시작
```

### 완성 코드

```python
import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20210701',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

trs = soup.select('#body-content > div.newest-list > div > table > tbody > tr')

for tr in trs:
    title = tr.select_one('td.info > a.title.ellipsis').text.strip()
    rank = tr.select_one('td.number').text[0:2].strip()
    artist = tr.select_one('td.info > a.artist.ellipsis').text
    print(rank, title, artist)
```