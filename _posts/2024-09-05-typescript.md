---
type: post
title: TypeScript
description:
author: anthony
date: 2024-09-05 03:18:04 +0900
cover: assets/images/post/base.jpg
categories: [  ]
tags: [  ]
navigation: true
featured: false
math: false
mermaid: false
---

tsconfig.json

```json
{
  "compilerOptions": {
    "allowJS": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "module": "ESNext",
    "moduleResolution": "Node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "ES2021"
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## Option Description

____

allowImportingTsExtensions : Allows you to import .ts files. (.ts 파일을 import 할 수 있게 해준다.)
allowJs : Allow compilation of JS files. (JS파일의 컴파일을 허용)
allowSyntheticDefaultImports :
alwaysStrict : Parse in strict mode and emit "use strict" for each source file. (strict mode에서 파싱하고 각 소스 파일에 대해 "use
strict"를 내보낸다.)
baesUrl : Path setting to specify absolute path (절대 경로 지정을 위한 path 설정)
downlevelIteration : Specifies a list of files or patterns to exclude among those specified in include. (include에 지정한 파일이나 패턴 중
제외할 목록을 지정)
esModuleInterop : Whether to enable interoperability between CommonJS and ES Modules by creating namespaces for all imports.
'allowSyntheticDefaultImports' is implicitly approved. (모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호
운용성이 생기게할 지 여부.
'allowSyntheticDefaultImports'를 암시적으로 승인한다.)
forceConsistentCasingInFileNames : Forces file names within a project to use case consistently. (프로젝트 내의 파일 이름이 대소문자
를 일관되게 사용하도록 강제화한다.)
incremental : Typescript only type-check changed files, and unchanged files are saved in .tsbuildinfo (recheck X) → Compilation speed
↑ (Typescript가 변경된 파일만 type 검사하고, 변경되지 않은 파일은 .tsbuildinfo에 저장(재검사 하지 않음) → 컴파일 속도 업)
isolatedModules : Perform additional checks to ensure separate compilation is safe (추가 검사를 수행하여 별도의 컴파일이 안전한지
확인)
jsx : JSX support in .tsx files. (.tsx 파일에서 JSX 지원)
lib : List of files to be included in compilation (컴파일에 포함될 파일목록)
module : Setting up code generation for modules (모듈을 위한 코드 생성 설정)
moduleResolution : Determine how to interpret the module (모듈 해석 방법 결정. Node.js 스타일 해석의 경우 "Node")
noEmit : Whether to export result files. (결과 파일 내보낼지 여부)
noFallthroughCasesInSwitch : Typescript catches human errors that may occur when using a switch statement. (switch문을 사용할 때
발생할 수 있는 휴먼에러를 typescript가 잡아준다.)
noImplicitAny : An error occurs in expressions and declarations implied by the any type. (any 타입으로 암시한 표현식과 선언에 오류를
발생시킨다.)
noUnusedLocals : Whether to report unused local variable errors. (사용하지 않는 지역변수 에러보고 여부)
noUnusedParameters : Whether to report errors for unused parameters. (사용되지 않은 파라미터에 대한 에러보고 여부)
paths : Path setting to specify absolute path (절대 경로 지정을 위한 path 설정)
resolveJsonModule : Include modules imported with the .json extension. (.json 확장자로 import된 모듈을 포함한다.)
skipLibCheck : Skip type checking of all declaration files (*
.d.ts). (모든 선언 파일(*
.d.ts)의 타입 검사를 건너뛴다.)
strict : Enable all strict type checking options. (모든 엄격한 타입 검사 옵션을 활성화한다.)
target : Specify ECMAScript target version. (ECMAScript 대상 버전 지정)
useDefineForClassFields : Whether to use definitions for class fields (클래스 필드에 대한 정의를 사용할지 여부)
