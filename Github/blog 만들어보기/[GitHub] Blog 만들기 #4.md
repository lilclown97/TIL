# 댓글 기능 구현(disqus), google analytics

<br><br><br>
youtube : [EP05. 댓글 & 구글 애널리틱스 추가하기](https://youtu.be/anXaW9xhgcU)

<br><br><br>

**댓글 기능 구현**

<br><br><br>

- [disqus](https://disqus.com/)
- settings > add diqus to site
- website URL : https://blog.com
- defaults comment 변경

```python
<before>

comments: #true

<after>

comments: true
```

- comment provider, shortname 변경

```python
<before>

comments:
  provider               :
  disqus:
    shortname            :

<after>

comments:
  provider               : "disqus"
  disqus:
    shortname            : "lilclown97s-blog"
```

<br><br><br>

**google analytics**

<br><br><br>

- [google analytics](https://analytics.google.com/analytics/web/#/p301119640/reports/reportinghub)
- analytics provider, tracking_id 변경

```python
<before>

analytics:
  provider               :
  google:
    tracking_id          :

<after>

analytics:
  provider               : "google-gtag"
  google:
    tracking_id          : "G-79C8M4QN1Z"
```

<br><br><br>

**error**

<br><br><br>

- 해결 disqus name과 short name이 달라 github blog에 표시되지 않는 문제 발생.
- 미해결 code block에 comment : #true 입력된 부분의 문제로 표시되지 않음.
