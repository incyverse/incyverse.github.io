---
type: post
title: GitHub에 나만의 블로그를 만들어보자.
description:
author: anthony
date: 2018-11-10 23:33:19 +0900
cover: assets/images/post/base.jpg
categories: [ knowledge, technology ]
tags: [ github pages, blog ]
navigation: true
featured: false
math: false
mermaid: false
---

> 아래 설명은 macOS 기준으로 설명이 되어 있음.
{: .prompt-info }

보통은 상용화 블로그 또는 노션, 깃북과 같은 업무용 툴을 활용하여 블로깅을 하기도 하지만, 개발자로써 github 블로그를 가지고 있다면 나의 스팩에 도움이 되지
않을까라는 생각으로 만들어 보기로 했다.

# 사이트 저장소 만들기

사이트 저장소를 만들 때 필요에 따라 두 가지 옵션이 있다.

---

## 옵션 1. 스타터 사용 (권장)

불필요한 파일을 단순화하고 분리하며, 최소한의 구성으로 블로그 활동에 집중하고 싶어하는 사람들에게 적합하다.

1. GitHub에 로그인하고 [**Starter**][starter]로 이동
2. <kbd>Use this template</kbd>을 클릭하고 <kbd>Create a new repository</kbd>를 선택한다.
3. 새 저장소의 이름을 `<username>.github.io`로 지정하고 `username`을 소문자 GitHub 사용자 이름으로 바꾼다.

## 옵션 2. 테마 포킹

이 방법은 기능이나 UI 다자인을 수정하는 데 편리하지만 업그레이드하는 동안 어려움이 있다. 따라서 Jekyll에 익숙하고 이 테마를 크게 수정할 계획이 아니라면
이 방법은 추천하지 않는다.

# 환경 설정

저장소를 생성했다면 개발 환경을 설정할 차례다.

---

## Docker 사용

Docker를 사용하여 격리된 환경을 제공하며, 이를 통해 시스템과의 충돌을 방지하고 모든 종속성이 컨테이너 내에서 관리되도록 한다.

[starter]: https://github.com/
