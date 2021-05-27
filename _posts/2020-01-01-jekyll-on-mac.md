---
layout: post
cover: /assets/images/cover/jekyll.png
title: "Jekyll로 GitHub 블로그 만들기"
authors: anthony
date: 2020-01-01 22:53:12 +0900
categories: environment
tags: jekyll
class: post
navigation: true
comment: true
---

# Jekyll on macOS
***

## Install Ruby & Gems With rbenv
***
Jekyll은 Ruby v2.4.0 이상이 필요하다. 프로젝트별 사용하는 버전이 다르다면 rbenv를 설치하여 Ruby의 버전을 관리하자.

{% highlight bash linenos %}
# Install rbenv and ruby-build
$ brew install rbenv
$ brew upgrade rbenv ruby-build

# Set up rbenv integration with your shell
$ rbenv init
eval "$(rbenv init -)"

$ source ~/.zshrc

# Check your installation
$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash

# 터미널을 재시작하고, 원하는 Ruby 버전을 설치하려면 다음을 실행
$ rbenv install [Ruby Version]
$ rbenv global [Ruby Version]
$ ruby -v

$ echo 'export PATH="$HOME/.rbenv/versions/[Ruby Version]/lib/ruby/gems/[Gems Version]:$PATH"' >> ~/.zshrc
# $ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
# echo 'export PATH="$HOME/.gem/ruby/[Ruby Version]/bin:$PATH"' >> ~/.zshrc

$ which ruby
{% endhighlight %}

### Gems
***
Gem은 Ruby 프로젝트에 포함 할 수 있는 코드다. Gems는 다음과 같은 작업을 수행 할 수 있다.
- Ruby 객체를 JSON으로 반환
- 쪽수 매기기
- GitHub와 같은 API와 상호 작용

## Install Jekyll
***
Ruby를 설치 한 후 Jekyll과 Bundler를 설치하자

### Local Install
***
{% highlight bash linenos %}
#$ gem install --user-install ffi bundler jekyll

# GEM PATHS:가 홈디렉토리를 가리키는지 확인
$ gem env

# Global Install
$ gem install bundler jekyll

$ jekyll new [Project Name]

cd [Project Name]
{% endhighlight %}

### Bundler
***
Bundler is a gem that installs all gems in your Gemfile.

While you don't have to use Gemfile and bundler, it is highly recommended as it ensures you're running the same version
of Jekyll and its plugins across different environments.

Install Bundler using `gem install bundler`. You only need to install it once, not every time you create a new Jekyll
project.

{% highlight bash linenos %}
# Gemfile: 프로젝트 종속성을 나열하기 위해 새로 생성
$ bundle init
$ bundle config set path 'vendor/bundle'

# Ruby 3.0.0부터 번들로 제공되는 gem이 아니기 때문에 별도로 설치
$ bundle add webrick
{% endhighlight %}

Bundler를 사용하여 Gemfile에 gem을 설치하려면 Gemfile이 있는 디렉토리에서 다음을 실행:
{% highlight bash linenos %}
$ bundle install
$ bundle update github-pages
#$ bundle exec jekyll new --force --skip-bundle
$ bundle exec jekyll clean
$ bundle exec jekyll serve
{% endhighlight %}
