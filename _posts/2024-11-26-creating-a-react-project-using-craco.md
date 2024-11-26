---
type: post
title: CRACO를 사용해서 React Project 생성하기
description:
author: anthony
date: 2024-11-26 21:29:58 +0900
cover: assets/images/post/react-2.png
categories: [ development, programming, library, react ]
tags: [ React, CRACO ]
navigation: true
featured: false
math: false
mermaid: false
---

# React 프로젝트 생성

---

먼저 CRA를 사용하여 React 프로젝트를 생성한다.

```bash
npx create-react-app my-app
cd my-app
```

# CRACO 설치

---

CRACO를 프로젝트에 설치한다.

```bash
npm install @craco/craco
```

# CRA의 스트립트 대체

---

package.json 파일을 열고 scripts를 수정하여 CRA의 명령어를 CRACO로 대체한다.

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}
```

# CRACO 설정 파일 생성

---

프로젝트 루트 디렉토리에 craco.config.js 파일을 생성한다. 이 파일에 설정을 추가하여 CRA의 기본 구성을 변경할 수 있다. Babel 설정을
커스터마이징하거나, Webpack 플러그인을 추가하려면 다음과 같이 작성할 수 있습니다.

```javascript
module.exports = {
  webpack: {
    alias: {
      '@components': './src/components'
    }
  },
  babel: {
    plugins: [
      [ '@babel/plugin-proposal-decorators', { legacy: true } ]
    ]
  }
}
```

# 추가 플러그인 설치 (선택 사항)

---

CRACO는 다양한 플러그인을 지원한다. 필요에 따라 플러그인을 설치하고 craco.config.js에 추가한다.

```bash
npm install @craco/craco @craco/craco-tailwindcss
```

```javascript
// Add craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [ require('tailwindcss'), require('autoprefixer') ]
    }
  }
};
```

# 프로젝트 실행

---

CRACO 설정이 완료되었으므로 프로젝트를 실행한다.

```bash
npm start
```

이제 CRACO를 사용하여 CRA의 기본 설정을 쉽게 커스터마이징할 수 있다. 원하는 Webpack, Babel 또는 기타 설정을 추가하여 프로젝트를 효율적으로 개발해보자.
