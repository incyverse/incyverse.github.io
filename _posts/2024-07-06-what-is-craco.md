---
type: post
title: CRACO 란 무엇인가?
description:
author: anthony
date: 2024-07-06 03:22:53 +0900
cover: assets/images/post/react-2.png
categories: [ development, programming, library, react ]
tags: [ react, craco, cra ]
navigation: true
---

CRACO<sup>Create React App Configuration Override</sup>는 **CRA**<sup>Create React App</sup>으로 생성된 프로젝트에서 Webpack,
Babel 등의 설정을 손쉽게 확장하거나 수정할 수 있도록 도와주는 도구다. CRA는 간편하게 React 프로젝트를 시작할 수 있도록 기본적인 설정을 제공하지만,
설정 파일(e.g., Webpack, Babel 등)을 숨기고 있어 일부 고급 설정을 직접 변경하기가 어렵다. CRACO는 이러한 CRA의 기본 설정을
**"eject"하지 않고"** 커스터마이징할 수 있게 해준다.

# CRACO의 주요 목적

---

1. **CRA 설정 파일 접근 없이 커스터마이징**  
CRA의 설정을 직접 수정하려면 eject 명령어를 사용해야 하지만, 이는 프로젝트 구조를 복잡하게 만들고 유지보수를 어렵게 한다. CRACO는 eject 없이도 설정을
오버라이드할 수 있다.

2. **Webpack, Babel, PostCSS 설정 변경**  
CRACO를 사용하면 Webpack, Babel, PostCSS 등 CRA의 내부 설정을 손쉽게 수정할 수 있다.

3. **확장 가능한 플러그인 지원**  
CRACO는 다양한 플러그인을 지원하며, 이를 통해 설정을 더 간단하게 확장할 수 있다.

# CRACO 주요 기능

---

## 손쉬운 설정 오버라이드

Webpack, Babel, ESLint 등 CRA에서 기본으로 사용하는 도구들의 설정을 쉽게 수정할 수 있다.

```javascript
module.exports = {
  webpack: {
    alias: {
      '@components': './src/components'
    },
    plugins: [
      // Add Webpack plugins here
    ]
  }
};
 ```

## Babel 설정 변경

Babel 플러그인을 추가하거나 기존 설정을 확장할 수 있다.

```javascript
module.exports = {
  babel: {
    plugins: [
      [ '@babel/plugin-proposal-decorators', { legacy: true } ]
    ]
  }
};
```

## PostCSS 설정 변경

Tailwind CSS 같은 PostCSS 기반 라이브러리를 쉽게 통합할 수 있다.

```javascript
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
};
```

## 플러그인 시스템

CRACO는 다양한 플러그인을 통해 설정을 확장할 수 있다.

- Tailwind CSS: @craco/craco-tailwindcss
- LESS 지원: @craco/craco-less

## 유지보수 편리성

CRA가 업데이트되더라도 CRACO를 사용하면 기존 설정을 크게 수정할 필요 없이 새로운 설정을 적용할 수 있다.

## 기타 설정

ESLint, TypeScript 설정도 간단히 수정할 수 있다.

```javascript
module.exports = {
  eslint: {
    enable: true,
    mode: 'extends'
  }
};
```

# CRACO를 사용하는 이유

---

- **커스터마이징**: CRA의 기본 설정을 넘어, 프로젝트에 필요한 다양한 설정을 적용할 수 있다.
- **유지보수 용이**: CRA의 설정 파일을 직접 수정하지 않고도 원하는 설정을 적용할 수 있어, CRA의 업데이트가 발생했을 때 충돌 없이 프로젝트를 유지할 수 있다.
- **플러그인 활용**: CRACO Community에서 제공하는 다양한 플러그인을 사용하여 손쉽게 프로젝트를 확장할 수 있다.
- **Eject를 피할 수 있음**: CRA 프로젝트에서 설정을 변경하려면 eject 명령어를 사용해야 하는데, 이는 프로젝트를 복잡하게 만들고 되돌리기 어렵다.
CRACO는 eject 없이 커스터마이징을 가능하게 한다.
- **유연성**: 다양한 설정을 쉽게 변경하고, 플러그인과 함께 프로젝트를 확장할 수 있다.
- **간편함**: eject 없이 설정을 변경할 수 있어 CRA의 단순한 구조를 유지하면서도 필요에 따라 커스터마이징이 가능하다.

# CRACO를 언제 사용하는가?

---

- Webpack의 기본 설정을 수정하거나 특정 플러그인을 추가하고 싶을 때
- Babel 설정을 변경하고 싶을 때
- Tailwind CSS 같은 CSS 프레임워크를 쉽게 통합하고 싶을 때
- LESS, SASS 등의 추가 스타일링 옵션을 설정하고 싶을 때

CRACO는 CRA 프로젝트에서 **유연성**과 **간결함**을 제공하는 훌륭한 도구다.
