```
brew install rbenv ruby-build

# 현재 사용중인 ruby version 확인
rbenv version

# 설치 가능한 버전 확인
rbenv install -l

# 루비 설치하기
rbenv install 3.3.0

# ruby version 바꾸기
rbenv global 3.3.0

echo $SHELL

vim ~/.zshrc
```

```
export PATH={$HOME}/.rbenv/bin:$PATH && \
eval "$(rbenv init -)"
```

```
source ~/.zshrc
```

```
gem install bundler jekyll

rbenv rehash

bundle install

bundle exec jekyll serve
```