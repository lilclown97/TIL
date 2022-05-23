## requests

- 파일 > 설정 > 프로젝트 > python 인터프린터 > ‘+’ > requests 설치
- requests : Ajax와 같은 역할

```python
import requests # requests 라이브러리 설치 필요

r = requests.get('url')
rjson = r.json()
```

## ex)

```python
import requests # requests 라이브러리 설치 필요

r = requests.get('http://spartacodingclub.shop/sparta_api/seoulair')
rjson = r.json()

gus = rjson['RealtimeCityAir']['row']

for gu in gus:
	if gu['IDEX_MVL'] < 60:
		print (gu['MSRSTE_NM'], gu['IDEX_MVL'])
```