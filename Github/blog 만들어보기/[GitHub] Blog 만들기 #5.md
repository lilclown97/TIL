# SNS 링크 삽입, conversion, outputting

<br><br><br>

## youtube

- [EP06. 테마변경, SNS 링크 삽입, Pagination 설정](https://youtu.be/Wi1W3hpfvZc)

<br><br><br>

## SNS 링크 삽입

- 링크 삽입 방법

before

```python
# Site Author
author:
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      # url: "mailto:your.name@email.com"
    - label: "Website"
      icon: "fas fa-fw fa-link"
      # url: "https://your-website.com"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url: "https://twitter.com/"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      # url: "https://facebook.com/"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      # url: "https://github.com/"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      # url: "https://instagram.com/"

# Site Footer
footer:
  links:
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url:
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      # url:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      # url:
    - label: "GitLab"
      icon: "fab fa-fw fa-gitlab"
      # url:
    - label: "Bitbucket"
      icon: "fab fa-fw fa-bitbucket"
      # url:
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      # url:
```

after

```python
# Site Author
author:
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:djfldrhkdeo97@naver.com"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/profile.php?id=100007252669118"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/lilclown97"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://www.instagram.com/yu_nys/"

# Site Footer
footer:
  links:
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/profile.php?id=100007252669118"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/lilclown97"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://www.instagram.com/yu_nys/"
```

![sns, footer](https://user-images.githubusercontent.com/98236458/151464970-1ffd6cd4-4bb4-45e0-860b-3bcf7d5befc7.png)

<br><br><br>

## conversion

**- [rouge site](http://rouge.jneen.net/)**

- rouge syntax highlighting : 코드에 색상 입히기
- 입력방법

````python
```python
~~~
```.
````

- 설정

```python
# Conversion
markdown: kramdown
highlighter: rouge
lsi: false
excerpt_separator: "\n\n"
incremental: false
```

<br><br><br>

## outputting

**- [timezone site](https://en.m.wikipedia.org/wiki/List_of_tz_database_time_zones)**

- paginate : 블로그에 보여지는 글의 수
- timezone : 블로그에 적용되는 표준 시

```python
# Outputting
permalink: /:categories/:title/
paginate: 5 # amount of posts to show
paginate_path: /page:num/
timezone: Asia/Seoul
```

<br><br><br>

## error

- SNS 링크 삽입 후 커밋이 안되는 문제 발생 <br>
  **A : url 부분의 라인이 맞지 않아 발생한 것으로 확인**

before

```python
# Site Author
author:
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
       url: "mailto:djfldrhkdeo97@naver.com"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
       url: "https://www.facebook.com/profile.php?id=100007252669118"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
       url: "https://github.com/lilclown97"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
       url: "https://www.instagram.com/yu_nys/"

# Site Footer
footer:
  links:
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
       url: "https://www.facebook.com/profile.php?id=100007252669118"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
       url: "https://github.com/lilclown97"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
       url: "https://www.instagram.com/yu_nys/"
```

after

```python
# Site Author
author:
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:djfldrhkdeo97@naver.com"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/profile.php?id=100007252669118"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/lilclown97"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://www.instagram.com/yu_nys/"

# Site Footer
footer:
  links:
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/profile.php?id=100007252669118"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/lilclown97"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://www.instagram.com/yu_nys/"
```
