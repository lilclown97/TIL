## Flask

- 파일 > 설정 > 프로젝트 > python 인터프린터 > ‘+’ > flask 설치
- 기본 구조 : static, templates 폴더, app.py 파일
- static 폴더 (이미지,css 파일)
- templates (html 파일)

```python
from flask import Flask, render_template, request, jsonify
app = Flask(__name__) 

@app.route('/')
def home():
   return "This is Home!"

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)
```

