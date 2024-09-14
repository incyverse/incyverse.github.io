---
layout: post
cover: assets/images/bear.jpg
title: Git Commit Messages
date: 2024-09-10 00:24:02 +0900
description:
author: anthony
current: post
class: post-template
subclass: post
navigation: true
categories: [development]
tags: [git]
---

# Commit Message 규칙

___

## 동명사보다 명사를 사용한다.

동사를 명사화 시키기 보다는 그 의미를 잘 표현하는 명사를 찾아서 사용한다. 이렇게 하면 문장이 장황하지 않고 간결 해진다.

## 관사는 사용하지 않는다.

꼭 필요한 경우가 아니면 **a**, **an**, **the**는 사용하지 않는다.

## 부정문 Don't를 사용한다.

Commit Message를 명령문 형태로 써야 한다는 것은 모두들 알고 있지만, 부정 명령문을 사용하는 것은 잘 모른다. `A를 사용해`라고 명령 했으니 반대를 이야기
할 때는 `A는 사용하지마'로 표현해야 한다. `Not use`가 아니라 `Don't use'로 써야 한다.

```
Don't use apdy on node >= v10.0.0
Don't write to the persisted query cache until execution will begin.
Do not return list if there are too many crashes.
```

## 오타 수정은 Correct misspelled text가 아니다.

그냥 **Fix typo**라고만 하면 된다.

# ADD

Document, Resource, Library, Code 추가가 있을 때 사용한다.

___

## Add A

> A를 추갸했다.  
> 추가하는 행위는 대부분 목표나 목적이 명시되기 때문에 이 pattern은 자주 사용되지 않는다.

```text
Add ERR_INSPECTOR_COMMAND error.
```

## Add A for B

> B를 위해 A를 추가했다.

```text
Add documentation for the defaultPort option.
Add missing includes for vtune build.
Add devDependencies support for templates.
```

## Add A to B

> B에 A를 추가했다.

```text
Add error description to image onError callback.
Add displayName to ActivityIndicator
```
