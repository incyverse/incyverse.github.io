---
type: post
title: Node.js 프로젝트에서 import의 절대 경로 별칭 설정하기
description:
author: anthony
date: 2024-12-03 19:06:12 +0900
cover: assets/images/post/base.jpg
categories: [ ]
tags: [ ]
navigation: true
featured: false
math: false
mermaid: false
---

프로젝트 코드에서 별칠을 사용하면 가독성과 유지보수성이 향상된다.

Webpack Alias 설정  
alias 설정을 통해 @ 경로를 src로 매핑하는 것은 좋은 방식이다. 코드를 더 간결하고 가독성 있게 만든다.

TsconfigPathsPlugin 추가  
tsconfig.json에 설정된 경로 별칭<sup>Alias</sup>을 Webpack에서 인식하게 하는 TsconfigPathsPlugin을 추가하는 로직도 적절하다.

개선할 점 주의사항  
TypeScript 관련 문제  
TsconfigPahtsPlugin은 TypeScript 프로젝트에서 유용하지만, webpackConfig.resolve?.plugins가 undefined일 가능성을 대비한 방어 코드가
필요할 수 있다. 아래와 같이 수정하면 더 안정적이다.
```typescript
const addTsconfigPathsPlugin = (webpackConfig: Configuration) => {
  if (!webpackConfig.resolve) {
    webpackConfig.resovle = {};
  }

  if (!webpackConfig.resolve.plugins) {
    webpackConfig.resolve.plugins = [];
  }
  
  webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
}
```

CRACO의 최신 버전 확인  
CRACO는 react-scripts를 사용하지 않고 Webpack 설정을 쉽게 변경할 수 있도록 돕지만, 최신 CRA<sup>Create React App</sup> 버전에서는 지원이
제한되거나 호환성 문제가 있을 수 있다. CRA 5.x 이상에서는 react-app-rewired나 다른 대안으로 전환을 고려해야 할 수도 있다.

Module.exports와 Default Export 간 혼용  
module.exports를 사용하고 있지만 TypeScript 프로젝트에서 export default를 사용할 수도 있다. 일관성을 위해 둘 중 하나로 통일하자.

최종 코드  
```typescript
import { CracoConfig } from '@craco/types';
import { Configuration } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as path from 'path';

const addTsconfigPathsPlugin = (webpackConfig: Configuration) => {
  if (!webpackConfig.resolve) {
    webpackConfig.resolve = {};
  }
  
  if (!webpackConfig.resolve.plugins) {
    webpackConfig.resolve.plugins = [];
  }
  
  webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
}

const config: CracoConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    configure: (webpackConfig: Configuration) => {
      addTsconfigPathsPlugin(webpackConfig);
      return webpackConfig;
    }
  }
};

export default config;
```

안정성과 가독성을 개선하면 더 나은 결과를 얻을 수 있다. CRACO와 TypeScript 설정이 프로젝트의 요구 사항에 적합한지 다시 한 번 검토하는 것도 좋다.

craco-alias

craco-alias를 사용하는 것은 별치<sup>Alias</sup> 설정을 단순화하고, Webpack 설정을 직접 다루는 부담을 줄이는 매우 좋은 대안이다. 특히, CRACO를
사용 중이라면 craco-alias는 tsconfig.json의 paths 설정과 일관성을 유지하면서 별칭 설정을 쉽게 관리할 수 있도록 도와준다.

webpack vs craco-alias 비교

| 특진          | Webpack에서 직접 설정                        | craco-alias 사용        |
|-------------|----------------------------------------|-----------------------|
| 설정 간결함      | 상대적으로 복잡함                              | 매우 간단함                |
| 유지보수 용이성    | Webpack 설정을 직접 수정 필요                   | tsconfig.json과 동기화 가능 |
| 호환성         | Webpack 설정이 필요함                        | CRACO와 매끄럽게 통합        |
| 타입스크립트와의 통합 | 추가 플러그인 필요 (e.g., TsconfigPathsPlugin) | paths 설정 자동으로 반영      |

장점  
craco-alias는 별칭 설정을 간단히 추가할 수 있어 webpack 설정을 직접 수정하지 않아도 된다. 설정 파일도 더 깔끔해진다. 별칭 설정이 tsconfig.json의
paths와 자동으로 동기화되므로, Webpack과 TypeScript 설정을 별도로 관리할 필요가 없어서 tsconfig.json과 일관성을 유지할 수 있다. 별칭과 관련된
모든 로직을 craco-alias에서 처리하기 때문에 유지보수가 쉬어지고 Webpack 설절을 직접 만지다가 발생할 수 있는 잠재적 오류를 감소시킬수 있다.

단점  
프로젝트에 craco-alias를 설치해야 하며, CRACO 환경에서만 사용할 수 있으므로, CRA 외ㅣ의 다른 설정이나 Vite, Next.js 같은 툴에서는 적용되지 않는다.

craco-alias 사용 방법  

```bash
npm install --save-dev craco-alias
# or
yarn add -D craco-alias
```

결론  
craco-alias는 CRACO 환경에서 Webpack 별칭 설정을 관리하는 더 간단하고 직관적인 방법이다. 초보자나 빠른 개발을 원하는 경우 craco-alias의 선택은
좋지만, Webpack에 대한 세밀한 제어가 필요한 경우에는 직접 Webpack 설정을 수정하는 것을 추천한다. CRACO 기반 프로젝트에서 별칭 설정을 깔끔하게
관리하려면 craco-alias를 적극 추천한다.

tsconfig.paths.json을 사용하는 것은 프로젝트의 별칭을 관리하고, TypeScript와 Webpack에서 경로 설정을 쉽게 일치시키는 좋은 방법이다.

루트 디렉토리에 tsconfig.paths.json 파일을 만든다. 이 파일은 별칭 관련 설정만 관리한다.

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```

tsconfig.paths.json의 설정을 tsconfig.json에 포함시키려면 extends를 사용한다. tsconfig.json은 다음과 같이 작성한다.

```json
{
  "extends": "./tsconfig.paths.json",
  "compilerOptions": {},
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

tsconfig.paths.json의 설정이 tsconfig.json에 병합된다. 이를 통해 별칭 설정을 분리 관리하면서 전체적인 TypeScript 설정과도 연결된다.

tsconfig.paths.json은 TypeScript에서만 동작하므로, Webpack도 이를 인식하게 설정해야 한다. craco-alias를 사용하거나 Webpack 설정을 직접
수정할 수 있다.

craco-alias로 설정  

```bash
npm install --save-dev craco-alias
# or
yarn add -D craco-alias
```

craco.config.js 설정  
craco.config.js에서 craco-alias 플러그인을 추가한다.

```javascript
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src', // tsconfig.paths.json과 동일
        tsConfigPaths: './tsconfig.paths.json' // tsconfig.paths.json의 경로
      }
    }
  ]
}
```

Webpack 설정 직접 수정  
tsconfig-paths-webpack-plugin 설치  
Webpack에서 TypeScript 경로 별칭을 인식하게 하려면 플러그인을 추가행 한다.

```bash
npm install --save-dev tsconfig-paths-webpack-plugin
# or
yarn add -D tsconfig-paths-webpack-plugin
```

Webpack의 resolve.plugins에 TsconfigPathsPlugin을 추가한다.

```javascript
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.paths.json' })]
  }
};
```

tsconfig.paths.json으로 별칭을 독립적으로 관리하면 별칭 설정을 한 곳에서 변경하면 TypeScript와 Webpack에 동시 반영 유지보수 용이성, 상대 경로
대신 별칭으로 코드를 간결하게 작성 가독성 향상

주의사항  
설정한 별칭이 실제 파일 경로와 충돌하지 않도록 주의하자. 대부분의 IDE는 tsconfig.json의 설정을 인식하므로, 별도의 추가 설정 없이 작동한다. Webpack
번들링 후 별칭이 올바르게 번역되었는지 확인해야 한다. tsconfig.paths.json을 사용하면 별칭 설정을 모듈화하고, TypeScript와 Webpack 설정을 일관성
있게 관리할 수 있어 프로젝트의 유지보수가 훨씬 편리해진다.

craco-alias는 TypeScript 프로제그에서도 사용할 수 있지만, craco-alias 패키지 자체가 TypesScript 타입 선언 파일을 제공하지 않기 때문에 별도의
설정이나 추가 작업이 필요하다. 이는 TypeScript가 강력한 타입 검사 시스템을 사용하기 때문이다.

craco-alias는 TypeScript에서 잘 작동하지만, 공식적으로 제공되지 않는 타입 선언 파일 문제를 해결해야 할 뿐이다.

타입 선언 파일 직접 작성  
src/types/craco-alias.d.ts 파일을 생성하고 아래 내용을 추가하자.

```typescript
declare module 'craco-alias' {
  import { CracoPlugin } from '@craco/types';
  
  const CracoAlias: CracoPlugin;
  
  export default CracoAlias;
}
```

craco.config.ts 파일 생성
```typescript
import { CracoConfig } from '@craco/types';
import CracoAlias from 'craco-alias';

const config: CracoConfig = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
};

export default config;
```

craco-alias는 TypeScript에서도 잘 작동하며, tsconfig.paths.json과 통합하면 경로 별칭을 쉽게 관리할 수 있다. 다만, 공식 타입 선언 파일이
없으므로 이를 직접 작성하거나 임시로 any 타입을 사용하는 추가 작업이 필요없다. TypeScript 프로젝트에서 편리한 경로 설정을 원한다면 craco-alias를
사용하여 TypeScript의 별칭과 Webpack를 통합하는 데 도움을 준다.

주의사항

baseUrl과 paths 설정이 TypeScript와 Webpack 모두에서 동일하게 적용되어야 한다. craco-alias는 CRACO 환경에서만 작동하므로, CRA 환경이 아닌
경우 다른 대안을 찾아야 한다.

____

devDependencies 관련


개발 의존성과 일반 의존성의 차이  
개발 의존성<sup>devDependencies</sup>
- 개발 및 빌드 과정에서만 필요
- 런타임에서는 사용되지 않음

일반 의존성<sup>dependencies</sup>
- 애플리케이션의 실행 중에도 필요한 라이브러리

devDependencies로 설치해야 하는 이유

devDependencies로 설치하면 최종 번들에는 포함되지 않으므로 애플리케이션 크기가 불필요하게 커지지 않아 런타임 크기가 최적화된다. 배포 시 일반적으로
devDependencies는 제외된다. 따라서 배포 환경을 최적화할 수 있다. 개발 전용 패키지를 devDependencies로 분리하면 개발 환경과 배포 환경에서 사용하는
의존성을 명확히 구분할 수 있다.


문제점 해결

Webpack의 설정을 CRACO를 사용하여 확장하려면.... webpackConfig.resolve의 구조와 초기화 방식이 맞지 않아 작동하지 않을 가능성이 있다. 특히,
webpackConfig.resolve.plugins가 존재하지 않을 때 이를 정확히 처리하진 않으면 문제가 발생한다.

```typescript
import { CracoConfig } from '@craco/craco';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const config: CracoConfig = {
  webpack: {
    configure: (webpackConfig: Configuration) => {
      // Webpack 별칭 및 TypeScript paths 설정
      if (!webpackConfig.resolve) {
        webpackConfig.resovle = {}; // resolve가 없으면 초기화
      }
      
      webpackConfig.resolve.alias = {
        ...(webpackConfig.resolve.alias || {}),
        '@': path.resolve(__dirname, './src') // '@' 별칭 추가
      };
      
      if (!webpackConfig.resolve.plugins) {
        webpackConfig.resolve.plugins = []; // plugins가 없으면 초기화
      }
      
      webpackConfig.resolve.plugins.push(
          new TsconfigPathsPlugin({
            extensions: webpackConfig.resolve.extensions || ['.js', '.jsx', '.ts', '.tsx'] // 확장 기본값 설정
          })
      );
      
      return webpackConfig;
    }
  }
}

export default config;
```

Webpack 설정 디버깅

설정이 제대로 되었는지 확인하기 위해 console.log(webpackConfig.resolve)를 출력한다.

경로 확인

path.resolve(__dirname, './src')가 실제 프로젝트의 src 디렉토리를 정확히 가리키는지 확인한다.

위의 수정된 코드는 CRACO와 Webpack에서 CSS와 TypeScript 모두 별칭을 사용할 수 있도록 최적화된 설정이다.
