# 이미지 추가, 업데이트 내역 실시간 확인

**블로그 생성**

1. github minimal-mistakes Fork
2. \_config.yml 파일 수정으로 블로그 메인 변경(개인적으로 sns 계정 추가 성공)

github jekyll-theme : https://github.com/topics/jekyll-theme
minimal-mistakes-quick start guide : https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/

**이미지 추가**

youtube : https://youtu.be/1UEOWcKcVdk

1. typora (Mark Down) github.io 폴더 열기
2. 설정 변경 : 이미지 - copy image to custom folder - ../images/${filename}
3. 이미지 추가 후 저장
4. github desktop - commit to master - push to origin

**업데이트 내역 실시간 동기화**

youtube : https://youtu.be/0TeHUqSAb6Q

기능 : 편집 내용을 동기화 하기 전 확인 가능

jekyll : https://jekyllrb.com/docs/

ruby installer(window) : https://rubyinstaller.org/

- with devkit download
- 3, install

window+r > cmd

- gem install jekyll

- gem install bundler

project folder > shift+mouse right

- cd io folder (cd .\~~\)
- bundle install
- bundle add webrick

bundle exec jekyll serve

주소창 : localhost:4000
typora 편집 후 저장 > localhost에 실시간 반영

**error**

1. bundle install gemfile error

- repository gemfile edit

before :

```
source "https://rubygems.org"
gemspec
```

after :

```
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

gem "tzinfo-data"
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-include-cache"
  gem "jekyll-algolia"
end
gem "webrick", "~> 1.7"
```

2. bundle exec jekyll serve error

- config.yml edit

before :

```
repository  : # GitHub username/repo-name e.g. "mmistakes/minimal-mistakes"
```

after :

```
repository : "lilclown97/lilclown97.github.io"
```
