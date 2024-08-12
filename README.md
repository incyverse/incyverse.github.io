```bash
brew install rbenv ruby-build
rbenv versions
rbenv install -l
rbenv install <version>
rbenv global <version>

vim ~/.zshrc
```

```shell
[[ -d ~/.rbenv ]] && \
  export PATH={$HOME}/.rbenv/bin:$PATH && \
  eval "$(rbenv init -l)"
```

```bash
source ~/.zshrc

gem install bundler
gem install jekyll

rbenv rehash
```