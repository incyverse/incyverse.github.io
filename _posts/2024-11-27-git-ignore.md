---
type: post
title: .gitignore를 사용해서 버전 관리에서 제외하기
description:
author: anthony
date: 2024-11-27 01:26:28 +0900
cover: assets/images/post/base.jpg
categories: [ development, devops, git ]
tags: [ git ]
navigation: true
featured: false
math: false
mermaid: false
---

.gitignore는 Git에서 특정 파일이나 디렉토리를 버전 관리에서 제외하고 싶을 때 사용하는 파일이다. 이 파일에 정의된 패턴에 맞는 파일이나 디렉토리는 Git이
추적하지 않으며, 변경 사항도 스테이징하거나 커밋하지 않는다.

# 기본적인 사용법

---

- 프로젝트 루트 디렉토리에 .gitignore 파일을 생성한다.
- .gitignore 파일에 무시하고자 하는 파일이나 디렉토리의 경로나 패턴을 작성한다.

# 패턴 작성 방법

---

- 특정 파일 무시
    secret.txt -> secret.txt 파일만 무시
- 특정 디렉토리 무시
    logs/ -> logs 디렉토리와 그 안의 모든 내용 무시
- 확장자별 파일 무시
    *.log -> .log 확장자를 가진 모든 파일 무시
- 특정 경로만 무시
    /build/ -> 루트 디렉토리의 build만 무시