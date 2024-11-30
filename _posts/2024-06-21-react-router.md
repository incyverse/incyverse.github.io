---
type: post
title: React Router
description:
author: anthony
date: 2024-06-21 11:52:22 +0900
cover: assets/images/post/react-1.avif
categories: [ development, programming, library, react ]
tags: [ react, router ]
navigation: true
---

## React Router 기본

____

React Router는 URL 경로를 기반으로 React Application 내에서 페이지 전환을 관리하는 라이브러리다. React Router에서 URL 경로의 변경을 감지하고
이에 대응하는 방식을 구현하기 위해 구독<sup>Subscribe</sup> 개념을 사용할 수 있다.

React Router v6부터는 직접적인 구독 기능이 제공되지 않지만, React의 기본 기능과 React Router의 Hook을 조합하여 비슷한 효과를 얻을 수 있다.
예를 들어, `useEffect` Hook을 사용하여 경로 변경을 감지할 수 있다.

아래는 React v6에서 `useEffect`와 `useLocation` Hook을 사용하여 경로 변경을 감지하는 예제다.

### React Router의 필요한 package를 설치

```bash
npm install react-router-dom
```

### 경로 변경을 감지하는 예제 코드

```jsx
import React, { useEffect } from 'react';
import {
  BrowseRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

const useCustomHook = callback => {
  const location = useLocation();
  
  useEffect(() => {
    callback(location);
  }, [location, callback]);
};

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>

const App = () => {
  useCustomHook(location => {
    console.log('Route changed to: ', location.pathname);
  });
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>    
    </div>
  );
};

const Root = () => {
  <Router>
    <App />
  </Router>
}

export default Root;
```

`useCustomHook` Custom Hook을 정의하고, `useLocation` Hook을 사용하여 현재 경로를 가져온다. `useEffect`를 사용하여 경로 변경 시 Callback 함수를
호출한다. `App` Component 내에서 이 Custom Hook을 사용하여 경로 변경을 감지하고 Console에 Log를 출력한다.

## Subscribe 사용하기

____

React Router v6에서는 이전 버번과 달리 `router.subscribe`와 같은 직접적인 구독 메시지를 제공하지 않는다. 대신, React Router의 Hook과
Context API를 사용하여 변겨을 감지하고 처리할 수 있다. 하지만, `history` package를 사용하면 `router.subscribe`와 비슷한 방식으로 경로 변경을 
구독할 수 있다.

### history package 설치

```bash
npm install history
```

history package를 사용하여 커스텀 history 객체를 생성하고, 이 객체를 React Router에 전달한다.

```jsx
import React, { useEffect } from 'react';
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const App = () => {
  useEffect(() => {
    // 구독 함수 정의
    const unlisten = history.listen(({ location, action }) => {
      console.log(`Route changed to: ${location.pathname} via ${action}`);
    });

    // 컴포넌트가 언마운트될 때 구독 해제
    return unlisten;
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

const Root = () => (
  <Router history={history}>
    <App />
  </Router>
);

export default Root;

```
