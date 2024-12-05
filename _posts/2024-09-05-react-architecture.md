---
type: post
title: React Architecture
description:
author: anthony
date: 2024-09-05 03:27:03 +0900
cover: assets/images/post/react-1.avif
categories: [ ]
tags: [ ]
navigation: true
featured: false
math: false
mermaid: false
---

React의 아키텍처는 컴포넌트 기반으로 설계되어 있으며, 선언적이고 효율적인 UI를 구축하는데 초점이 맞춰져 있다. React는 UI를 상태에 기반하여 렌더링하며,
효율성을 극대화하기 위해 가상 DOM<sup>Virtual DOM</sup>을 사용한다.

## 컴포넌트 기반 아키텍처

____

React 애플리케이션은 **컴포넌트<sup>Component</sup>**로 구성된다. 컴포넌트는 재사용 가능하고 독립적인 UI의 조각으로, 애플리케이션의 특정 부분을
담당한다.

### 함수형 컴포넌트

간단한 함수로 정의되며, props를 받아 JSX를 반환한다. React Hooks를 통해 상태 관리와 생명주기 관리가 가능하다.

### 클래스형 컴포넌트

React.Component를 상속받아 정의되며, state와 생명주기 메서드를 사용할 수 있다. 함수형 컴포넌트와 Hooks의 등장 이후, 최근에는 잘 사용되지 않는다.

## Virtual DOM

____

React는 실제 DOM 대신 **가상 DOM<sup>Virtual DOM</sup>**을 사용하여 성능을 최적화한다. UI가 변경되면 React는 가상 DOM에서 변경 사항을
계산<sup>Diffing</sup>한다. 변경된 부분만 실제 DOM에 업데이트<sup>Batch Update</sup>하여 성능을 향상시킨다. 이 과정은 다음 단계를 포함한다.

1. **Render Phase** 컴포넌트의 상태와 props를 기반으로 가상 DOM을 생성
2. **Reconciliation Phase** 이전 가상 DOM과 비교하여 변경된 부분을 식별
3. **Commit Phase** 변경된 부분만 실제 DOM에 적용

## 단방향 데이터 흐름 (One-Way Data Flow)

____

React는 데이터가 부모에서 자식으로 흐르는 **단방향 데이터 흐름**을 따른다.

- **Props** 부모 컴포넌트가 자식 컴포넌트로 데이터를 전달하는 메커니즘이다. 자식은 props를 변경할 수 없다. (읽기 전용)
- **State** 컴포넌트 내에서 관리되는 데이터로, 컴포넌트의 동적인 동작을 제어한다.

## React State Management

____

React는 컴포넌트 내부 상태와 애플리케이션 전체 상태를 관리하기 위한 다양한 도구를 제공한다.

- **Local State** useState, useReducer 등으로 개별 컴포넌트에서 관리
- **Global State** Context API를 사용하여 애플리케이션 전역에서 상태를 공유
- **External Libraries** Redux, MobX, Zustand, Recoil 등을 통해 더 정교한 상태 관리를 구현

## JSX (JavaScript XML)

____

React는 UI를 정의하기 위한 JSX 문법을 사용한다. HTML과 유사하지만 JavaScript의 기능을 사용할 수 있으며, 브라우저에서 JSX는 Babel에 의해 일반
JavaScript로 변환된다.

```jsx
const element = <h1>Hello, world!!</h1>;
```

## React의 생명주기 (Lifecycle)

____

React 컴포넌트는 다음과 같은 생명주기 단계에서 동작한다.

**Mounting** 컴포넌트가 DOM에 추가될 때 실행
**Updating** 상태나 props가 변경되어 UI가 다시 렌더링될 때 실행
**Unmounting** 컴포넌트가 DOM에서 제거될 때 실행

## React의 주요 컨셉

____

**Unidirectional Data Flow** 데이터는 항상 부모에서 자식으로 흐른다.
**Component Reusability** 재사용 가능한 컴포넌트 설계가 가능하다.
**Declarative Programming** 명령형 프로그래밍 대신 선언적으로 UI를 기술한다.
**Composition Over Inheritance** 컴포넌트를 합성하여 UI를 구축

## React Hooks

____

React 16.8 이후 도입된 Hooks는 함수형 컴포넌트에서 상태와 생명주기를 쉽게 사용할 수 있게 해준다.

## React Router와 State Management

____

React는 자체적으로 라우팅을 제공하지 않으므로 **React Router** 같은 라이브러리를 사용한다. 또한, 상태 관리를 위해 Redux, Context API, Zustand
등 외부 도구를 통합할 수 있다.

## React의 에코시스템

____

React는 경량 라이브러리로, 필요에 따라 다양한 도구와 통합하여 확장한다.
