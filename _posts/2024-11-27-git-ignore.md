---
type: post
title: .gitignore를 사용해서 버전 관리에서 제외하기
description:
author: anthony
date: 2024-11-27 01:26:28 +0900
cover: assets/images/post/git-1.webp
categories: [ development, devops, git ]
tags: [ git, github ]
navigation: true
featured: false
math: false
mermaid: false
---

.gitignore는 Git에서 특정 파일이나 디렉토리를 버전 관리에서 제외하고 싶을 때 사용하는 파일이다. 이 파일에 정의된 패턴에 맞는 파일이나 디렉토리는 Git이
추적하지 않으며, 변경 사항도 스테이징하거나 커밋하지 않는다.

.gitignore는 협업 환경에서 코드 관리와 민감 정보 보호에 매우 중요한 역할을 한다.

## 기본적인 사용법

____

- 프로젝트 루트 디렉토리에 .gitignore 파일을 생성한다.
- .gitignore 파일에 무시하고자 하는 파일이나 디렉토리의 경로나 패턴을 작성한다.

## 패턴 작성 방법

____

- **특정 파일 무시** secret.txt -> secret.txt 파일만 무시
- **특정 디렉토리 무시** logs/ -> logs 디렉토리와 그 안의 모든 내용 무시
- **확장자별 파일 무시** *.log -> .log 확장자를 가진 모든 파일 무시
- **특정 경로만 무시** /build/ -> 루트 디렉토리의 build만 무시
- **특정 파일/디렉토리 제외 (무시하지 않음)** !important.txt -> important.txt는 무시하지 않음

.gitignore 예제

```text
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# ENVIRONMENT:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
.env*
!.env.example
*.crt
*.csr
*.key
*.org

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# DEPENDENCIES:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
#────: JAVA
.gradle/
!gradle/wrapper/gradle-wrapper.jar
!**/src/main/**/build/
!**/src/test/**/build/

#────: NODE
node_modules/
.pnp
.pnp.js

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# TESTING:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
.nyc_output/
coverage/

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# OUTPUT:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
dist/
build/
public/
!/public/index.html

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# LOGS:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
logs/
*.log
lerna-debug.log*
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# IDE:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
#────: STS
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache
bin/
!**/src/main/**/bin/
!**/src/test/**/bin/

#────: JETBRAINS
.kotlin
.idea/
*.iws
*.iml
*.ipr
out/
!**/src/main/**/out/
!**/src/test/**/out/

#────: VSCODE
.vscode/
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extension.json

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# OS:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
#────: MAC
.DS_Store

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# VM:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
#----: DOCKER
.docker-sync
docker-storage/

#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
# MISC:
#───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
*.swp
.temp
.tmp

#----: Runtime Data
pids
*.pid
*.seed
*.pid.lock

#----: Diagnostic reports (http://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
```

## 적용되지 않는 경우

____

이미 Git에서 추적 중인 파일은 .gitignore에 추가해도 무시되지 않는다. 이 경우 다음 명령으로 캐시에서 제거해야 한다.

```bash
git rm --cached 파일명
```

## 사용 사례

____

- **환경 파일 보호** .env와 같은 민감한 정보가 포함된 파일을 외부에 노출되지 않게 관리
- **불필요한 파일 제외** node_modules 같은 외부 의존성 폴더 제외
- **빌드 아티팩트 관리** dist/ 등 빌드된 파일을 버전 관리에서 제외하여 저장소 크기 관리
