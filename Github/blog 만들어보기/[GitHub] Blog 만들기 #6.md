## Youtube

### [EP07. 카테고리 기능, #태그 기능 추가하기](https://youtu.be/3UOh0rKlxjg)

<br><br><br>

## Category, Tag

### \_config.yml jekyll-archives 주석 풀기

- Before

```python
# jekyll-archives:
#   enabled:
#     - categories
#     - tags
#   layouts:
#     category: archive-taxonomy
#     tag: archive-taxonomy
#   permalinks:
#     category: /categories/:name/
#     tag: /tags/:name/
```

- After

```python
jekyll-archives:
  enabled:
    - categories
    - tags
  layouts:
    category: archive-taxonomy
    tag: archive-taxonomy
  permalinks:
    category: /categories/:name/
    tag: /tags/:name/
```

<br>

### pages 폴더, category-archive.md, tag-archive.md 파일 생성

- category-archive.md

```python
---
title: "Category"
layout: categories
permalink: /categories/
author_profile: true
sidebar_main: true
---
```

- tag-archive.md

```python
---
title: "Tag"
layout: tags
permalink: /tags/
author_profile: true
sidebar_main: true
---
```

<br>

### navigation.yml 수정

- Before

```python
main:
  - title: "Quick-Start-Guide"
    url: ~~~
```

- After

```python
main:
  - title: "Category"
    url: /categories/
  - title: "Tag"
    url: /tags/
```

<br>

### Category, Tag 적용 방법

- 적용 방법

```python
---
title: "GitHub blog, #6"
excerpt: "Category, Tag 추가"
categories: GitHub Blog
tag: GitHub
---
```

- 다수 적용 방법\_[]추가

```python
---
title: "GitHub blog, #6"
excerpt: "Category, Tag 추가"
categories: [GitHub Blog]
tag: [GitHub, Blog]
---
```
