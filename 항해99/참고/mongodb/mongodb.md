## mongodb

- 파일 > 설정 > 프로젝트 > python 인터프린터 > ‘+’ > pymongo 설치
- 파일 > 설정 > 프로젝트 > python 인터프린터 > ‘+’ > dnspython 설치

```python
from pymongo import MongoClient
client = MongoClient('여기에 URL 입력')
db = client.dbsparta # dbsparta 는 변경
```