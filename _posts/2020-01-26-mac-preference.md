---
layout: post
cover: /assets/images/cover/mac-catalina.jpg
title: "Mac 개발환경 설정하기"
description: "맥 공장초기화 후 시스템 설정 및 개발환경 구축"
authors: anthony
date: 2020-01-26 12:53:12 +0900
categories: environment
tags: mac
class: post
navigation: true
comment: true
---

내가 생각하는 맥의 장점은 오랜 시간 사용을 해도 느려지지 않는다는 것이다. 그래서 윈도우 처럼 주기적으로 초기화를 하지 않고 사용을 하는 편인데 가끔 개발 설정을 하다 보면 내가 모르는 곳에(사실 기억이 않나서
무엇이 있는지 모름) 파일이 생기는 경우나 프로그램이 제대로 실행이 안될 경우 그냥 초기화를 한다. 어쩌다 한번이지만 그때마다 설정이 기억이 나지않아 메모를 해두기로 했다.(찾기 쉬운곳에...)

## Command Line Tools 설치
***
Native 확장기능을 컴파일할 수 있게 해주는 명령행 도구<sup>Command Line Tools</sup>를 설치해야한다. Xcode를 설치하거나 xcode-select --install를 해준다.

## 시스템 설정(System Preferences)
***
- General > Appearance > Dark: Select
- Dock > Show recent application in Dock: Enable
- Mission Control > Automatically rearrange Spaces based on most recent use: Enable
- Siri > Enable Ask Siri: Enable
- Language & Region > Preferred languages: Add English, Korean
- Accessibility > Audio > Flash the screen when an alert sound occurs: Enable
- Accessibility > Pointer Control > Mouse & Trackpad > Ignore built-in-trackpad when mouse or wireless trackpad is
  present: Enable
- Accessibility > Pointer Control > Mouse & Trackpad > Trackpad options... > Enable dragging: three finger drag
- Security & Privacy > General > Show a message when the screen is locked: Enable
- Security & Privacy > FileVault: Turn On
- Security & Privacy > Privacy > Location Services > Enable Location Services: Enable
- Bluetooth > Show Bluetooth in menu bar: Enable
- Sound > Show volume in menu bar: Enable
- Keyboard > Modifier Keys... > Caps Lock to Control
- Keyboard > Text > Use smart quotes and dashes: Disable
- Trackpad > Point & Click > Tab to click

-- Sharing > Computer name
[Rename Home Folder](https://support.apple.com/en-us/HT201548)

## Finder Preferences
***
- General > New Finder windows show: Select Folder
- Advanced > Show all filename extensions: Enable
- View > Show Options(⌘J)

## Xcode 설치(Xcode Installation)
***
`Terminal`에서 툴킷을 사용하려면 기본적으로 `명령어 라인 도구`<sup>Command Line Tools</sup>와 `Homebrew`를 설치해야 된다. 우선 App Store에서 Xcode를 설치 후
실행하면 명령어 라인 도구가 설치 된다.

## [Homebrew](https://brew.sh/index_ko) Installation
***
{% highlight bash linenos %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 제대로 설치가 되었는지 확인
cd /usr/local find Cellar ls -l bin
{% endhighlight %}

## 폰트 설치하기(Font Installation)
***
{% highlight bash linenos %}
brew cask install homebrew/cask-fonts/font-cascadia
brew cask install homebrew/cask-fonts/font-d2coding
{% endhighlight %}

## 필수 프로그램 설치
***
{% highlight bash linenos %}
brew install --cask iterm2
brew install --cask google-chrome
brew install --cask jetbrains-toolbox
brew install --cask visual-studio-code
brew install --cask microsoft-office
brew install --cask docker
brew install --cask slack
brew install --cask android-studio
{% endhighlight %}

## Iterm2 Preferences
***
- Preferences > Profile > Colors > color Presets > Import...
- Preferences > Profile > Session > Status bar enabled
- Preferences > Appearance > Theme: Dark
- Preferences > Appearance > Windows > Hide scrollbars: enable
- Preferences > Appearance > Windows > Show line under title bar when the tab bar is not visible: disable
- Preferences > Advanced > Height of top and bottom margins in terminal panes: 15
- Preferences > Advanced > Width of left and right margins in terminal panes: 15

## ZSH 설치 및 설정
***
{% highlight bash linenos %}
cat /etc/shells zsh --version
brew install zsh-completions fad
{% endhighlight %}

To activate these completions, add the following to your `.zshrc`:

{% highlight shell linenos %}
if type brew &>/dev/null; then
  FPATH = $(brew --prefix)/share/zsh-completions:$FPATH
  autoload -Uz compinit
  compini
fi
{% endhighlight %}

You may also need to force rebuild `zcompdump`:

{% highlight bash linenos %}
rm -f ~/.zcompdump; compinit
{% endhighlight %}

Additionally, if you receive "zsh compinit: insecure directories" warnings when attempting to load these completions,
you may need to run this:

{% highlight bash linenos %}
chmod go-w /usr/local/share
{% endhighlight %}

zsh plugin install:

{% highlight bash linenos %}
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

# 명령어 자동완성
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
{% endhighlight %}

neovim install:

{% highlight bash linenos %}
# Installing dependency: gettext, unibilium, libtermkey, libuv, libvterm, luajit, msgpack
brew install neovim
echo 'export PATH="/usr/local/opt/gettext/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="/usr/local/opt/luajit-openresty/bin:$PATH"' >> ~/.zshrc
curl -sLf https://spacevim.org/install.sh | bash
vim ~/.SpaceVim.d/init.vim

# vim으로 init.vim을 실행 후 아래 내용을 등록한다.
let g:spacevim_colorscheme='onedark'
{% endhighlight %}

oh-my-zsh install:

{% highlight bash linenos %}
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

echo $SHELL which zsh chsh -s $(which zsh) or chsh -s `which zsh`

# 설정
vim ~/.zshrc

# vim으로 .zshrc 실행 후 아래 내용을 찾아 수정하거나, 없으면 추가한다.
ZSH_THEME="agnoster"

plugins=(
  git
  zsh-syntax-highlighting
  zsh-autosuggestions
  fasd
)

alias vim="nvim"
alias vi="nvim"
alias vimdiff="nvim -d"
export EDITOR=/usr/local/bin/nvim

# vim에서 나온 후 .zshrc를 재실행한다.
source ~/.zshrc

cd ~/.oh-my-zsh/themes vim < theme name >.zsh-theme prompt_context()
{% endhighlight %}
