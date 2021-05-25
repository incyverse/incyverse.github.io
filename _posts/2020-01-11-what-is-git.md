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


git config --global init.defaultBranch <name>
git branch -m <name>
git config pull.rebase false # merge (the default strategy)
git config pull.rebase true # rebase
git config pull.ff only # fast-forward only

You can replace "git config" with "git config --global" to set a default preference for all repositories.
You can also pass --rebase, --no-rebase, or --ff-only on the command line to override the configured default per invocation.

git config --global pull.rebase false
