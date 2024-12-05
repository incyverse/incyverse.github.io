---
type: post
title: React 전역 상태 관리에 대해서 알아보자
description:
author: anthony
date: 2024-12-04 16:38:43 +0900
cover: assets/images/post/base.jpg
categories: [  ]
tags: [  ]
navigation: true
featured: false
math: false
mermaid: false
---

상태 관리를 위해서 사용되는 라이브러리에는 여려 가지가 있다. 어떤 라이브러리가 있는지 알아보고 각 라이브러리가 가지고 있는 특정 목적과 상황에 맞게
설계되었으며, **RTK<sup>Redux Toolkit</sup>**와는 사용성, 복잡성, 성능 등에서 차이가 있다. 다음은 대표적인 상태 관리 라이브러리와 RTK의 비교다.

## Context API (React 내장 상태 관리)

React에 내장되어 있는 상태 관리 도구이며, 컴포넌트 트리 전체에서 상태를 공유할 수 있다. 별도의 라이브러리 설치가 필요 없다. 가벼운 상태 관리에 적합하고
런닝 커브가 낮다. 외부 종속성 없으나 상태 업데이트 시 트리 구조 전체가 리렌더링될 수 있어 성능 문제가 발생하며, 대규모 애플리케이션에서는 코드가 복잡해질
수 있다.

## Zustand

간단하고 경량화된 상태 관리 라이브러리다. Flux 패턴이 아닌 set/get 메서드를 사용한 간단한 상태 변경 방식이고 React의 Context API 위에 빌드되어
있으며, 직관적이고 사용하기 쉽다. 장점으로는 작은 상태 관리에 최적화, 리렌더링을 최소화하여 성능이 좋다. immer를 사용해 불변성 관리. 단점으로는 대규모
상태 관리에는 구조화가 부족할 수 있다. DevTools와의 통합 기능이 RTK에 비해 약하다.

## Recoil

Meta에서 개발한 React 전용 상태 관리 라이브러리다. 상태를 **atom(최소 단위의 상태)**으로 나누어 관리하며 컴포넌트 기반 상태 관리를 위해 설계되었다.
장점으로 React와 깊이 통합되어 직관적, 비동기 데이터 관리를 위한 selector 제공, 독립적인 상태 관리 단위로 인해 모듈화 용이. 단점으로 React 외 다른
프레임워크에서 사용할 수 없음, 아직 성숙하지 않아 커뮤니티와 확장성이 부족.

## MobX

**관찰 가능한 상태(observable state)**를 사용하여 자동으로 상태 변경을 추적하고 객체 지향 프로그래밍 방식에 가깝고, 상태 변화가 선언적이지 않다.
장점으로 학습이 간단하며 코드가 간결, 상태 변경 시 최소한의 컴포넌트만 리렌더링되어 성능이 좋음, 대규모 애플리케이션에서도 유연한 설계 가능. 단점으로
Redux처럼 상태 변경을 명시적으로 관리하지 않아 디버깅이 어려울 수 있음, Flux 패턴에 익숙한 개발자에게는 낯설게 느껴질 수 있음.

| 항목      | Redux Toolkit          | Context API   | Zustand | Recoil          | MobX              |
|---------|------------------------|---------------|---------|-----------------|-------------------|
| 상태 관리   | 대규모 애플리케이션에 적합, 체계적    | 소규모 상태 관리에 적합 | 간단, 직관적 | React 전용        | 상태를 관찰 가능한 개체로 만듦 |
| 상태 구조   | 구조적이고 중앙 집중적           | 단순            | 자유롭고 유연 | atom 기반으로 모듈화   | 간단                |
| 비동기 작업  | createAsyncThunk 제공    | 직접 구현해야 함     | 자체 구현 필요 | Selector로 처리 가능 | 직접 구현 필요          |
| 학습 곡선   | 약간 높음 (Redux 기본 개념 필요) | 낮음            | 높은 성능   | 낮음              | 어려움               |

어떤 상태 관리 라이브러리를 선택해야 할까?

소규모 프로젝트

- **Context API** 외부 라이브러리를 추가하지 않고 React의 기본 기능을 활용
- **Zustand** 간단하고 직관적인 상태 관리

중규모 프로젝트

- **Redux Toolkit** 확장성과 구조화가 필요할 때 적합
- **Recoil** React 전용 애플리케이션에서 유연한 상태 관리를 원할 때

대규모 프로젝트
- **Redux Toolkit** 강력한 구조와 DevTools 지원으로 대규모 애플리케이션에 최적
- **MobX** 대규모 상태 관리를 간결하게 처리하고 성능 최적호가 필요할 때

RTK는 다른 라이브러리에 비해 **대규모 애플리케이션에서 구조적인 상태 관리**를 돕고, 강력한 DevTools와 생태계 지원으로 여전히 많은 개발자들에게 선호된다.
하지만 애플리케이션의 크기와 복잡도에 따라 다른 라이브러리들도 충분히 좋은 대안이 될 수 있다.

Redux는 **JavaScript 상태 관리 라이브러리**로, 애플리케이션에서 상태를 예측 가능한 방식으로 관리할 수 있도록 설계되었다. 주로 React와 함께 사용되지만,
Vue, Angular 등 다른 JavaScript 프레임워크에서도 사용할 수 있다. Redux의 주요 목적은 **애플리케이션의 상태를 한 곳에서 관리**하고, 예측 가능한
방식으로 상태 변화를 처리하는 것이다.

Redux의 주요 개념

Store (저장소)

Redux 애플리케이션의 **중앙 상태 저장소**다. 애플리케이션의 모든 상태를 하나의 객체 트리로 저장하며, 단일 Store만 사용한다.

Store 생성
```javascript
import { createStore } from 'redux';

const store = createStore(counterReducer);
```

Action

상태를 변경하기 위한 **순수한 객체**다. Action 객체는 반드시 type 필드를 포함하며, 상태를 변경하는 데 필요한 추가 데이터를 포함할 수 있다.

Action 정의
```javascript
const increment = (value) => ({
  type: 'INCREMENT',
  payload: value
});
```

Reducer (리듀서)

Action의 type에 따라 상태를 어떻게 변경할지 정의하는 **순수 함수**다. 이전 상태와 액션 객체를 받아 새로운 상태를 반환한다.

Reducer 정의
```javascript
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload }
    case 'DECREMENT':
      return { count: state.count - action.payload }
    default:
      return state;
  }
}
```

Dispatch

Action 객체를 Store에 전달하여 Reducer가 호출되도록 한다.

```javascript
store.dispatch({ type: 'INCREMENT', payload: 1 });
```

Subscription

상태가 변경될 때마다 특정 함수를 실행하도록 등록한다.

```javascript
store.subscribe(() => {
  console.log('State updated: ', store.getState());
});

store.dispatch(increment(5));
```

Redux의 작동 흐름

1. 사용자가 버튼을 클릭하거나 이벤트가 발생하면 Action을 Dispatch 한다.
2. Dispatch된 Action은 Reducer로 전달되며, Reducer는 Action의 type과 데이터를 사용해 상태를 업데이트한다.
3. Reducer가 반환한 새로운 상태로 Store가 업데이트된다.
4. Store의 상태가 변경되었음을 UI 컴포넌트에 알리며, UI가 새 상태를 기반으로 리렌더링된다.

Redux와 React 통합

React에서 Redux를 사용하려면 react-redux 라이브러리를 사용하여 Redux Store를 컴포넌트에 연결한다.

Provider 사용
```jsx
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from '@/reducer';

const store = createStore(counterReducer);

const App = () => {
  <Provider store={store}>
    <Counter />
  </Provider>
}
```

컴포넌트에서 상태 사용  
useSelector와 useDispatch를 사용하여 상태와 Dispatch를 관리한다.
```jsx
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>
          Increment
        </button>
      </div>
  );
};
```

Redux의 한계와 개선

- 보일러플레이트 코드: Action, Reducer, Store 설정 등 초기 설정이 복잡하다. → **Redux Toolkit**을 사용하면 간결하게 작성 가능하다.
- 비동기 작업 처리 복잡성: 비동기 작업을 처리하려면 미들웨어를 추가해야 하며, 관리가 어려울 수 있다. → Redux Toolkit의 createAsyncThunk로 해결
- 규모가 작은 애플리케이션에는 과도: 상태 관리가 간단한 경우 React이 useState나 useReducer를 고려할 수 있다.

Redux Toolkit 소개

Redux Toolkit은 Redux 사용의 복잡성을 줄이고 효율성을 높이기 위해 만들어졌다.

주요 기능

- configureStore: 미들웨어와 DevTools를 기본적으로 설정
- createSlice: Reducer와 Action을 한 번에 생성
- createAsyncThunk: 비동기 작업 관리 간소화

Redux Toolkit 설치

먼저 Redux Toolkit과 React-Redux를 설치한다.
```bash
npm install @reduxjs/toolkit react-redux
npm install --save-dev @types/react-redux
# or
yarn add @reduxjs/toolkit react-redux
yarn add -D @types/react-redux
```

초기 설정

Redux Store 설정

store.ts 작성

configureStore를 사용하여 Redux Store를 설정한다.
```typescript
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

// RootState 및 AppDispatch 타입 추론
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

사용자 관련 Slice 생성

userSlice.ts 작성

createSlice를 사용하여 사용자 상태를 관리한다.
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: { username: string; token: string } | null; // 정보
  isAuthenticated: boolean; // 로그인 상태
  loading: boolean; // 로딩 상태
  error: string | null; // 에러 메시지
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ username: string; token: string }>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
```

React와 Redux 연결

index.tsx 작성

Provider를 사용해 Redux Store를 React 애플리케이션에 연결한다.
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

Redux State 사용

로그인 컴포넌트

Login.tsx 작성

useDispatch와 useSelector를 사용하여 Redux 상태를 사용한다.
```tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from './features/userSlice';
import { AppDispatch, RootState } from './store';

const Login: React.FC = () => {
  const [username, setUsername] = useStatue('');
  const [password, setPassword] = useStatue('');
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.user);
  
  const handleLogin = async () => {
    dispatch(loginStart());
    
    try {
      const response = await new Promise<{ username: string; token: string }>(resolve => setTimeout(() => resolve({ username, token: 'mock-token' }), 1000));
      
      dispatch(loginSuccess(response));
    } catch (err) {
      dispatch(loginFailure('Invalid credentials'));
    }
  };
  
  return (
    <div>
      {isAuthenticated ? (
          <h1>Welcome, {username}!</h1>
      ) : (
          <form onSubmit={e => e.preventDefault()}>
            <div>
              <label>Username</label>
              <input value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
      )}
    </div>
  );
};

export default Login;
```

로그아웃 컴포넌트

Logout.tsx 작성
```tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { AppDispatch } from './store';

const Logout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
```

사용자 정보 관리

UserProfile.tsx 작성
```tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const UserProfile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);
  
  if (!user) return <p>No user is logged in.</p>
  
  return (
      <div>
        <h2>User Profile</h2>
        <p>Username: {user.username}</p>
        <p>Token: {user.token}</p>
      </div>
  );
};

export default UserProfile;
```

추가 기능

비동기 로그인 API 처리 (createAsyncThunk 사용)

비동기 작업을 createAsyncThunk로 처리할 수 있다.
```typescript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginAsync = createAsyncThunk(
    'user/login',
    async (credentials: { username: string; password: string }, thunkAPI) => {
      try {
        const response = await new Promise<{ username: string; token: string }>(resolve => setTimeout(() => resolve({ username: credentials.username, token: 'mock-token' }), 1000));
        
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue('Invalid credentials');
      }
    }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    }
  },
  extraReducers: builder => {
    builder.addCase(loginAsync.pending, state => {
      state.loading = true;
      state.error = null;
    }).addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    }).addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  }
});
```

```javascript
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

store.dispatch(counterSlice.actions.increment(5));
console.log(store.getState());
```

이 설정을 통해 로그인, 로그아웃, 사용자 정보를 TypeScript 기반 Redux Toolkit으로 구현할 수 있다. RTK의 TypeScript 지원은 매우 강력하며, 타입
안전성과 자동 완성을 제공하여 개발 생산성을 높여준다.
