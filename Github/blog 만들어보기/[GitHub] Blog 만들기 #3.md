# \_config.yml 수정으로 설정 변경

youtube : [EP04. 블로그 설정 매우 쉽게 변경하기 - NO코딩! (config.yml 활용)](https://youtu.be/c-h3XcDjHtQ)

**테마 변경**

- skin : dark

**locale**

- ko-KR

**title**

- lilclown97's Circus

**title separator**

- |

**subtitle**

- Laugh at myself.

**name**

- lilclown97

**description**

- lilclown97의 블로그 입니다.

**author name**

- lilclown97

**bio**

- Started on \*\*2022-01-24~

**location**

- South Korea

**logo**

- assets > images 폴더 생성 > 이미지 복사
- /assets/images/name.png

**date**

```
# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments:  true
      share: true
      related: true
      show_date: true


date_format: "%Y-%m-%d"
```
