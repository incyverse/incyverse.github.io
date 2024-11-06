---
type: post
title: CRACO 란...
description:
author: anthony
date: 2024-07-06 03:22:53 +0900
cover: assets/images/bear.jpg
categories: [ development, programming, library, react ]
tags: [ react, CRACO, CRA ]
navigation: true
---

CRACO(Create React App Configuration Override)는 Create React App(CRA)으로 생성된 React Project의 기본 설정을 손쉽게 확장하거나 
수정할 수 있게 해주는 도구다. CRA는 간편하게 React Project를 시작할 수 있도록 기본적인 설정을 제공하지만, 일부 고급 설정을 직접 변경하기 어렵다. 
CRACO를 사용하면 이러한 문제를 해결할 수 있다.

### Craco의 주요 기능

1. 손쉬운 설정 오버라이드 - Webpack, Babel, ESLint 등 CRA에서 기본으로 사용하는 도구들의 설정을 쉽게 수정할 수 있다.
2. 플러그인 시스템 - 다양한 Plugin을 사용하여 설정을 확장할 수 있다.
3. 유지보수 편리성 - CRA가 Update되더라도 CRACO를 사용하면 기존 설정을 크게 수정할 필요 없이 새로운 설정을 적용할 수 있다.

### CRACO를 사용하는 이유

1. 커스터마이징 - CRA의 기본 설정을 넘어, Project에 필요한 다양한 설정을 적용할 수 있다.
2. 유지보수 용이 - CRA의 설정 파일을 직업 수정하지 않고도 원하는 설정을 적용할 수 있어, CRA의 Update가 발생했을 때 충돌 없이 Project를 유지할 수 있다.
3. Plugin 할용 : CRACO Community에서 제공하는 다양한 Plugin을 사용하여 손쉽게 Project를 확장할 수 있다.

### CRACO 설치 및 사용법

1. 설치
```bash
npm install @craco/craco --save
```

2. Project 설정
> `package.json` 파일을 수정하여 CRA Script를 CRACO로 대체
```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```
