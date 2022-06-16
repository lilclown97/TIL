## Youtube

### 1. [EP10. 블로그 내 글 검색기능 추가하기](https://youtu.be/AONVKTeeaWY)

<br><br><br>

## Sidebar navagation

### 1. navigarion.yml Code 추가

- Code

```python
docs:
  - title: "GitHub"
    children:
      - title: "Blog"
        url: "https://lilclown97.github.io/categories/#github-blog"
```

<br>

### 2. \_config.yml Code 추가

- Code

```python
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
      show_date: true
      toc: true
      toc_sticky: true
      sidebar:              #add
        nav: "docs"         #add
```

<br><br><br>

## 블로그 내 글 검색 기능

### 1. \_pages 폴더에 파일 생성

- search.md

```python
---
title: Search
layout: search
permalink: /search/
---
```

<br>

### 2. navigation.yml Code 추가

- Code

```python
main:
  - title: "Home"
    url: "https://lilclown97.github.io/"
  - title: "Category"
    url: /categories/
  - title: "Search"                         #add
    url: /search/                           #add
```
