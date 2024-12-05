---
type: post
title: ESLint, Prettier 설정하기
description:
author: anthony
date: 2024-06-28 11:08:19 +0900
cover: assets/images/post/coding-1.gif
categories: [ knowledge, technology ]
tags: [ eslint, javascript ]
navigation: true
---

## ESLint 설정

____



### ESLint 패키지 설치

```bash
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier
# or
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-react-hooks eslint-plugin-prettier
```

### ESLint 설정 파일 생성

루트 디렉토리에 .eslintrc.mjs 파일을 생성한다.

```javascript
export default {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'airbnb',
    // 'prettier'
  ],
  ignorePatterns: [
    'node_modules/'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
    // ecmaFeatures: { jsx: true }
  },
  plugins: [
    '@typescript-eslint',
    // 'import',
    'prettier',
    'react',
    // 'react-hooks'
  ],
  root: true,
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/extensions': ['off'],
    'prettir/prettir': 'error',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', 'tsx']
    //   },
    //   typescript: {
    //     alwaysTryTypes: true
    //   }
    // },
    react: {
      version: 'detect'
    }
  }
};
```

## Prettier 설정

____

### Prettier 패키지 설치

```bash
npm install --save-dev prettier
# or
yarn add -D prettier
```

### Prettier 설정 파일 생성

루트 디렉토리에 .prettier 파일을 생성한다.

```javascript
const config = {
  arrowParens: "avoid",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "auto",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: false,
  parser: "typescript",
  printWidth: 120,
  proseWrap: "preserve",
  requirePragma: false,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "", // es5
  useTabs: false
};

export default config;
```

### Prettier 무시 파일 생성

.prettierignore 파일을 생성하여 포맷팅에서 제외할 파일 및 폴더를 지정할 수 있다.

```text
build/
node_modules/
```

## ESLint와 Prettier 통합

____

eslint-config-prettier와 eslint-plugin-prettier를 사용하면 ESLint와 Prettier 규칙 충돌을 방지할 수 있다. 위의 .eslintrc.js 설저에서
이미 plugin:prettier/recommended를 추가했음로 충돌이 자동으로 해결된다.
