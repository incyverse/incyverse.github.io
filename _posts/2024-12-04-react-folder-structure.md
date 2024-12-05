---
type: post
title: React 폴더 구조
description:
author: anthony
date: 2024-12-04 23:27:02 +0900
cover: assets/images/post/react-1.avif
categories: [  ]
tags: [  ]
navigation: true
featured: false
math: false
mermaid: false
---

> React에서 추구하는 파일 구조는 [React File Structure][reactFileStructure]{:target="_blank"}에서 확인하자.
{:.prompt-info}

React 애플리케이션의 폴더 구조는 프로젝트의 규모, 복잡성, 팀의 개발 스타일에 따라 달라질 수 있다. 하지만 아래에 제안된 구조는 유지보수성과 확장성을
고려한 일반적인 베스트 프랙티스를 반영한 것이다. 필요에 따라 조정하여 사용하면 된다.

## 기본적인 폴더 구조 - Grouping by file type

____

작은 규모의 프로젝트에서 사용하기 적합하다.

```text
project/
├── public/
├── src/
│   ├── assets/                 # 이미지, 아이콘, 폰트 등 정적 파일
│   │   ├── images/
│   │   │   └── logo.png
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/             # 재사용 가능한 UI 컴포넌트
│   │   ├── Button/
│   │   │   └── Button.tsx
│   │   └── Navbar/
│   │       └── Navbar.tsx
│   ├── contexts/               # React Context API를 사용한 전역 상태 관리 로직
│   │   ├── AppContext.ts
│   │   └── AuthContext.ts
│   ├── hooks/                  # 커스텀 훅
│   │   ├── useAuth.ts
│   │   └── useFetch.ts
│   ├── pages/                  # 라우팅 단위의 페이지 컴포넌트 (라우트 연결)
│   │   ├── user/               # 사용자 관련 페이지
│   │   │   ├── About/
│   │   │   │   └── index.tsx
│   │   │   └── Profile/
│   │   │       └── index.tsx
│   │   └── admin/              # 관리자 관련 페이지
│   │       └── Dashboard.tsx
│   ├── routes/                 # React Router와 관련된 라우트 설정 파일
│   │   ├── index.tsx
│   │   └── ProtectedRoute.tsx
│   ├── services/               # API 호출, 데이터 처리 등 외부 서비스와의 통신 로직 모듈
│   │   ├── api/
│   │   │   ├── authApi.ts
│   │   │   └── productApi.ts
│   │   ├── firebase/
│   │   │   └── firebaseConfig.ts
│   │   └── mock/
│   │       └── mockData.ts
│   ├── styles/                 # CSS, SCSS 스타일 관련 파일
│   │   ├── variables.scss
│   │   └── global.scss
│   ├── tests/
│   │   └── components/
│   │       ├── Button.test.tsx
│   │       └── Navbar.test.tsx
│   ├── types/                  # TypeScript의 타입 정의 파일
│   │   ├── api.d.ts
│   │   ├── auth.d.ts
│   │   ├── auth.interface.ts
│   │   └── common.d.ts
│   ├── utils/                  # 공통으로 사용하는 유틸리티 함수와 헬퍼 함수 (포맷팅, 정규식, ...)
│   │   ├── dateUtils.ts
│   │   ├── validationUtils.ts
│   │   └── dateFormatter.ts
│   ├── App.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── reportWebVitals.ts
├── .env.example
├── .eslintrc.mjs
├── .gitignore
├── .prettierrc.mjs
├── package.json
├── README.md
└── tsconfig.js
```

## Grouping by features

____

중간 규모 프로젝트에서 사용하기 적합하다.

```text
project/
├── public/
├── src/
│   ├── assets/                 # 이미지, 아이콘, 폰트 등 정적 파일
│   │   ├── images/
│   │   │   └── logo.png
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/             # 재사용 가능한 UI 컴포넌트
│   │   ├── auth
│   │   │   ├── AuthA.tsx
│   │   │   └── AuthB.tsx
│   │   └── payment
│   │       ├── PaymentA.tsx
│   │       └── PaymentB.tsx
│   ├── contexts/               # React Context API를 사용한 전역 상태 관리 로직
│   │   ├── AppContext.ts
│   │   └── AuthContext.ts
│   ├── hooks/                  # 커스텀 훅
│   │   ├── auth
│   │   │   └── useAuth.ts
│   │   └── payment
│   │       └── usePayment.ts
│   ├── interfaces/
│   ├── layout/                 # 레이아웃 컴포넌트 (공통/관리자/사용자)
│   ├── pages/                  # 라우팅 단위의 페이지 컴포넌트 (라우트 연결)
│   │   ├── user/               # 사용자 관련 페이지
│   │   │   ├── About/
│   │   │   │   └── index.tsx
│   │   │   └── Profile/
│   │   │       └── index.tsx
│   │   └── admin/              # 관리자 관련 페이지
│   │       └── Dashboard.tsx
│   ├── routes/                 # React Router와 관련된 라우트 설정 파일
│   │   ├── index.tsx
│   │   └── ProtectedRoute.tsx
│   ├── services/               # API 호출, 데이터 처리 등 외부 서비스와의 통신 로직 모듈
│   │   ├── api/
│   │   │   ├── authApi.ts
│   │   │   └── productApi.ts
│   │   ├── firebase/
│   │   │   └── firebaseConfig.ts
│   │   └── mock/
│   │       └── mockData.ts
│   ├── settings/
│   ├── styles/                 # CSS, SCSS 스타일 관련 파일
│   │   ├── variables.scss
│   │   └── global.scss
│   ├── store/
│   ├── tests/
│   │   └── components/
│   │       ├── Button.test.tsx
│   │       └── Navbar.test.tsx
│   ├── types/                  # TypeScript의 타입 정의 파일
│   │   ├── api.d.ts
│   │   ├── auth.d.ts
│   │   ├── auth.interface.ts
│   │   └── common.d.ts
│   ├── utils/                  # 공통으로 사용하는 유틸리티 함수와 헬퍼 함수 (포맷팅, 정규식, ...)
│   │   ├── dateUtils.ts
│   │   ├── validationUtils.ts
│   │   └── dateFormatter.ts
│   ├── App.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── reportWebVitals.ts
├── .env.example
├── .eslintrc.mjs
├── .gitignore
├── .prettierrc.mjs
├── package.json
├── README.md
└── tsconfig.js
```

## Grouping by modules

____

대규모 프로젝트를 위한 구조로 도메인 중심 또는 기능 기반 구조를 사용하여 확장성을 고려한다.

```text
project/
├── public/
├── src/
│   ├── assets/
│   ├── features/               # 각 기능별 폴더
│   │   ├── core
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   └── ・・・
│   │   ├── auth
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── ・・・
│   │   └── payment
│   │       ├── components/
│   │   │   ├── hooks/
│   │       └── ・・・
│   ├── App.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── reportWebVitals.ts
├── .env.example
├── .eslintrc.mjs
├── .gitignore
├── .prettierrc.mjs
├── package.json
├── README.md
└── tsconfig.js
```

## Atomic Design

____

```text
project/
├── public/
├── src/
│   ├── assets/                 # 이미지, 아이콘, 폰트 등 정적 파일
│   ├── components/
│   │   ├── atoms/              # 가장 작은 단위의 컴포넌트 (Button, Input, ...)
│   │   ├── molecules/          # 원자들을 조합한 컴포넌트 (Form, Card, ...)
│   │   ├── organisms/          # 분자와 원자를 조합한 컴포넌트 (Navbar, Footer, ...)
│   │   ├── templates/          # 여러 organism을 조합한 레이아웃 (Layout, ...)
│   │   └── pages/              # 전체 페이지
│   │       ├── user/           # 사용자 관련 페이지
│   │       │   └── Home.tsx
│   │       └── admin/          # 관리자 관련 페이지
│   │           └── Dashboard.tsx
│   ├── contexts/               # React Context API를 사용한 전역 상태 관리 로직
│   ├── hooks/                  # 커스텀 훅
│   ├── interfaces/             # 객체형 타입 정의 파일
│   ├── routes/                 # React Router와 관련된 라우트 설정 파일
│   ├── services/               # API 호출, 데이터 처리 등 외부 서비스와의 통신 로직 모듈
│   ├── settings/
│   ├── store/
│   ├── styles/                 # CSS, SCSS 스타일 관련 파일
│   ├── types/                  # TypeScript의 타입 정의 파일
│   ├── themes/
│   ├── utils/                  # 공통으로 사용하는 유틸리티 함수와 헬퍼 함수 (포맷팅, 정규식, ...)
│   ├── widgets/
│   ├── App.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── reportWebVitals.ts
├── .env.example
├── .eslintrc.mjs
├── .gitignore
├── .prettierrc.mjs
├── package.json
├── README.md
└── tsconfig.js
```

## interfaces와 types 폴더

____

interfaces와 types는 같은 맥락에서 타입스크립트 프로젝트에서 유용하게 사용할 수 있다. interfaces와 types는 기본적으로 타입 정의를 저장하는 용도로
비슷하게 사용되지만, 사용 목적과 스타일에 따라 선택적으로 interfaces를 분리해서 사용할 수 있다. 만약 프로젝트 크기가 작거나 별도의 구분이 필요 없다고 느껴진다면, 모든 타입 정의를 types에
통합할 수도 있다. 하지만 대규모 프로젝트에서는 interfaces와 types를 분리하면 더 구조적이고 직관적인 관리가 가능하다.

interfaces 폴더에는 객체 타입 정의만 보관하고, types 폴더에는 나머지 타입 정의를 보관한다.

interfaces/User.interface.ts
```typescript
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
```

types/api.d.ts
```typescript
export type ApiResponse<T> = {
  status: string;
  data: T;
  message?: string
};
```

types/common.d.ts
```typescript
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
```


## Top-Level Folders

____

| NAME   | TYPE   | DESCRIPTION   |
|--------|--------|---------------|
| public | folder | Static assets |
| src    | folder | Sources       |

## Top-Level Files

____

| NAME             | TYPE | DESCRIPTION                        |
|------------------|------|------------------------------------|
| .env             |      | Default environment                |
| .env.development |      | Development environment            |
| .env.production  |      | Production environment             |
| .eslintrc.mjs    |      | Configuration for ESLint           |
| .gitignore       |      | Folders and Files to ignore        |
| .prettierrc.mjs  |      | Configuration for code conventions |
| package.json     |      | Dependencies                       |
| tsconfig.json    |      | Configuration for TypeScript       |
| yarn.lock        |      | Dependencies lock                  |

[reactFileStructure]: https://legacy.reactjs.org/docs/faq-structure.html
