---
layout: post
cover: /assets/images/cover/git.png
title: "Git"
description: "Git is ..."
authors: anthony
date: 2020-01-08 13:42:53 +0900
categories: development
tags: git
class: post
navigation: true
comment: true
---

{% highlight bash linenos %}
git init
git config --global init.defaultBranch <name>
# You can replace "git config" with "git config --global" to set a default preference for all repositories. You can also
# pass --rebase, --no-rebase, or --ff-only on the command line to override the configured default per invocation.
git config --global pull.rebase false

git branch -m <name>

git config pull.rebase false # merge (the default strategy)
git config pull.rebase true # rebase git config pull.ff only # fast-forward only

git config --local user.name "User Name"
git config --local user.email "User Email"

git remote add origin <repository>
git pull origin master

# pull이 정상적으로 진행이 되었다면 본인의 branch를 생성하여 checkout 하자
git branch -M <branch name>
# git checkout -b <branch name>
git checkout <branch name>

# pull이 안된다면 다음을 진행한 후 branch를 생성하자
echo "# <project name>" >> README.md
git add README.md
git commit -m "First commit"
git branch -M <branch name>
git push -u origin <branch name>
{% endhighlight %}

master branch에 push를 못하도록 막으려면 GitHub에서 **Repositories > Settings > Branches > Branch protection rules**로 이동 후 `add 
rule`을 클릭 `master`를 입력하고 `Require pull request reviews before merging`을 체크해준다.

> 하지만 `Private Repository`는 돈을 지불 해야지만 사용이 가능하다.
