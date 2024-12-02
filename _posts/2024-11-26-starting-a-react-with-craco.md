---
type: post
title: CRACO로 React 프로젝트 시작하기
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

> CRACO가 무엇인지 궁금하다면 다음 포스트를 확인해 보자. [CRACO란?][whatIsCraco]{:target="_blank"}

CRA를 사용해서 TypeScrpt 기반의 React 프로젝트를 생성하고, CRACO를 설치해서 CRA의 기본 설정을 수정하는 방법을 알아보자.

## 프로젝트 생성

____

먼저 CRA를 사용하여 프로젝트를 생성하자.

```bash
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript

cd my-app
```

## CRACO 설치

____

CRACO를 프로젝트에 설치한다.

CRACO를 TypeScript 기반으로 사용하려면 @craco/types 패키지가 필요하고 개발 의존성<sup>Dev Dependencies</sup>으로 설치하자. 이 패키지는
CRACO 설정 파일을 TypeScript로 작성할 때 필요한 타입 정의를 제공한다.

```bash
npm install @craco/craco
npm install --save-dev @craco/types
# or
yarn add @craco/craco
yarn add -D @craco/types
```

## CRA의 스크립트 변경

____

package.json 파일을 열어서 scripts에 CRA의 명령어를 CRACO로 수정하자.

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}
```

## CRACO 설정 파일 생성

CRACO는 TypeScript를 지원하므로 .ts 파일을 사용할 수 있다. 이 파일에 설정을 추가하여 CRA의 기본 구성 변경 및 Webpack 설정을 커스터마이징하거나,
Babel 플러그인을 추가할 수 있다.

____

프로젝트 루트 디렉토리에 craco.config.ts 파일을 생성한다.

```typescript
import { CracoConfig } from '@craco/types';

const config: CracoConfig = {
  webpack: {
    alias: {
      '@components': './src/components',
      '@utils': './src/utils'
    }
  },
  babel: {
    plugins: [
      // 필요한 Bebel 플러그인 추가
    ]
  }
};

export default config;
```

## 추가 패키지 설치 및 설정 (선택 사항)

CRACO를 사용하면 다양한 플러그인을 지원하여 쉽게 통합할 수 있다. 예를 들어, Tailwind CSS와 CRACO를 함께 사용하려면 @craco/craco와 관련 패키지를
설치하고 구성 파일에 추가하면 된다.

____

### 1. CRACO Alias

craco-alias는 CRACO를 사용하여 React 프로젝트에서 경로 별칭<sup>Alias</sup>을 쉽게 설정할 수 있도록 도와주는 플러그인이다. craco-alias는 특히
TypeScript를 사용하는 경우 TypeScript의 paths와 Webpack의 별칭을 동시에 관리할 수 있어 편하다.

반드시 사용할 필요는 없지만, TypeScript 프로젝트에서 경로 별칭 설정을 깔끔하고 일관되게 관리하려면 craco-alias를 사용하는 것이 좋다.

#### craco-alias의 장점

- TypeScript와 Webpack의 경로 설정 동기화하여 별칭을 한 곳에서 설정하여 중복 설정을 피할 수 있다.
- 별도의 tsconfig.json과 Webpack 설정을 동기화하지 않고 간편한 설정으로 가능하다.
- 프로젝트의 관리 편의성과 유지보수성을 높일 수 있다.

#### craco-alias 설정 방법

먼저 craco-alias를 설치한다. craco-alias는 빌드와 개발 모두에서 사용되는 패키지이지만, 컴파일/번들링 시에만 필요하기 때문에 개발 의존성<sup>Dev 
Dependencies</sup>으로 설치하는 것이 적합하다.

```bash
npm install --save-dev craco-alias
# or
yarn add -D craco-alias
```

tsconfig.json 파일에 pahts 설정을 추가하여 별칭을 설정한다.

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

craco-alias를 craco.config.ts 설정에 추가하자.

```typescript
import { CracoConfig } from '@craco/craco';
import CracoAlias, { CracoAliasPluginOptions } from 'craco-alias'

const aliasOptions: CracoAliasPluginOptions = {
    source: 'tsconfig',
    baseUrl: './',
    tsConfigPath: './tsconfig.json'
}

const config: CracoConfig = {
  plugins: [
    {
      plugins: CracoAlias,
      options: aliasOptions
    }
  ]
};

export default config;
```

> ### 만약 `Could not find a declaration file for module craco-alias.` 에러가 발생한다면...
>
> craco-alias는 자체적으로 타입 정의도 되어 있지 않고, @types 패키지도 존재하지 않기 때문에 직접 타입을 선언해서 사용해야 한다.
>
> 다음 경로에 src/types/craco-alias.d.ts 파일을 생성한다.
>
> ```typescript
> declare module 'craco-alias' {
>   import { Plugin } from '@craco/types';
> 
>   export interface CracoAliasPluginOptions {
>     source: 'tsconfig' | 'webpack';
>     baseUrl?: string;
>     tsConfigPath?: string;
>     aliases?: { [key: string]: string };
>   };
>  
>   const CracoAlias: Plugin<CracoAliasPluginOptions>;
>   export default CracoAlias;
> };
> ```
>
> TypeScript가 사용자 정의 타입 파일을 인식하도록 tsconfig.json의 compilerOptions에 typeRoots를 추가한다.
>
> ```json
> {
>   "compilerOptions": {
>     "typeRoots": ["node_modules/@types", "src/types"]
>   }
> }
> ```
>
> 이 설정은 TypeScript가 node_modules/@types뿐 아니라 src/types 디렉토리에서 사용자 정의 타입 파일을 찾도록 한다.
> 위 설정을 적용했음에도 오류가 발생한다면, 의존성 충돌이 발생했을 수 있으니 다음 명령어를 실행하자.
> ```bash
> rm -rf node_modules yarn.lock
> yarn install
> ```
{:.prompt-danger}

#### 별칭 테스트

별칭을 사용해 컴포넌트를 불러와 보자.

```typescript
import Header from '@components/Header';
import { formatDate } from '@utils/date';
```

#### craco-alias를 꼭 사용해야 할까?

##### craco-alias가 필요한 경우

- TypeScript를 사용하고 Webpack의 별칭 설정과 TypeScript paths 설정을 일관되게 유지하고 싶을 때
- 별칭 설정이 많아지고 프로젝트의 유지보수성을 높이고 싶을 때

##### craco-alias 없어도 가능한 경우

별칭 설정이 간단하고 직접 Webpack과 TypeScript paths를 각각 설정하는 것이 번거롭지 않다면 굳이 craco-alias를 사용할 필요는 없다.

**Webpack 별칭 직접 설정**

```typescript
import path from 'path';
import { CracoConfig } from '@craco/types';

const config: CracoConfig = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
};

export default config
```

이 경우, TypeScript paths 설정은 별도로 관리해야 하므로 수정 작업이 더 번거로울 수 있다.

프로젝트의 규모가 크고 **TypeScript + Webpack**을 함께 사용하는 경우에는 craco-alias가 더 효율적이다. 간단한 별칭 설정만 필요하다면 CRACO의
Webpack 설정만으로도 충분하다.

### 2. Tailwind CSS

```bash
npm install @craco/craco-tailwindcss
# tailwindcss postcss autoprefixer
npx tailwindcss init
```

craco.config.ts에 Tailwind CSS 플러그인 추가

```typescript
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

## 프로젝트 실행

____

CRACO 설정이 완료되었으므로 프로젝트를 실행해보자.

```bash
npm start
# or
yarn start
```

## 테스트 및 배포

____

이렇게 설정하면 TypeScript 기반 React 프로젝트에 CRACO를 사용하여 CRA의 기본 설정을 쉽게 커스터마이징할 수 있다. 원하는 Webpack, Babel 또는
기타 설정을 유연하게 커스터마이즈할 수 있으므로 프로젝트 요구 사항에 맞게 설정을 확장할 수 있다. CRACO로 프로젝트를 구성하여 효율적인 개발을 해보자.

ESLint와 Prettier를 사용하면 코드 품질과 일관성을 유지할 수 있다.

[whatIsCraco]: /post/what-is-craco/
