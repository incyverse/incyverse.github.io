---
type: post
title: Git Commit Messages 작성법
description:
author: anthony
date: 2024-09-10 00:24:02 +0900
cover: assets/images/post/git-1.webp
categories: [ devops, git ]
tags: [ git ]
navigation: true
---

# Commit Message 규칙

___

## 동명사보다 명사를 사용한다.

동사를 명사화 시키기 보다는 그 의미를 잘 표현하는 명사를 찾아서 사용한다. 이렇게 하면 문장이 장황하지 않고 간결 해진다.

## 관사는 사용하지 않는다.

꼭 필요한 경우가 아니면 **a**, **an**, **the**는 사용하지 않는다.

## 부정문 Don't를 사용한다.

Commit Message를 명령문 형태로 써야 한다는 것은 모두들 알고 있지만, 부정 명령문을 사용하는 것은 잘 모른다. `A를 사용해`라고 명령 했으니 반대를 이야기
할 때는 `A는 사용하지마`로 표현해야 한다. `Not use`가 아니라 `Don't use`로 써야 한다.

```text
Don't use apdy on node >= v10.0.0
Don't write to the persisted query cache until execution will begin.
Do not return list if there are too many crashes.
```

## 오타 수정은 Correct misspelled text가 아니다.

그냥 **Fix typo**라고만 하면 된다.

# ADD

Document, Resource, Library, Code 추가가 있을 때 사용한다.

___

## Add A

> A를 추가했다.  
> 추가하는 행위는 대부분 목표나 목적이 명시되기 때문에 이 pattern은 자주 사용되지 않는다.

```text
Add ERR_INSPECTOR_COMMAND error.
```

## Add A for B

> B를 위해 A를 추가했다.

```text
Add documentation for the defaultPort option.
Add missing includes for vtune build.
Add devDependencies support for templates.
```

## Add A to B

> B에 A를 추가했다.

```text
Add error description to image onError callback.
Add displayName to ActivityIndicator
```

# ALLOW

Make와 비슷하지만, 허용을 표현할 때 사용한다.

---

## Allow A to B

> A가 B를 할 수 있도록 허용한다.

```text
Allow the output filename to be a {Function}
Allow Node,js like runtimes to identify as Node.js as well
Allow passing parseOptions to ApolloServerBase constructor
```

# AVOID

특적한 처릴르 회피한다. if문으로 특정한 동작을 제외시키는 경우에만 사용할 수 있다.

---

> A를 회피시켰다.

```text
Avoid importing entire crypto dependency tree if not in Node.js
Avoid "Member not found" exception in IE10 when calling preventDefault() in SyntheticEvents
Avoid double reload event when reloading JS
```

# CORRECT

주로 Code의 문법 오류나 타입의 변경, 이름 변경 등에서 사용한다.

---

## Correct A

> A를 고쳤다.

```text
Correct grammatical error in BUILDING.md
Correct parameters, return types in crypto.md
Correct async_hooks resource names
```

# DELETE

코드의 삭제가 있을 때 사용한다. 보통 A 앞에 unnecessary, useless, unneeded, unused, duplicated가 붙는 경우가 많다.

---

## Delete A

> A를 삭제했다.

```text
Delete useless additional blur call
Delete unneeded .gitignore entries
Delete duplicated buffer negative allocation test
```

# ENSURE

무엇이 확실하게 보장받는다는 것을 명시한다. if 구문처럼 조건을 확실하게 주었을 때에도 사용 될 수 있다. 'Makesure'도 같은 용도로 사용될 수 있다.

---

## Ensure A

> A가 확실히 보장 되도록 수정했다.

```text
Ensure quiet always takes precedence
Ensure require.main for CJS top-level loads
Ensure cookies with illegal characters are not sent to ok http
```

# FIX

기능이 정상적으로 작동하지 않거나 다양한 오류를 고친 경우에 사용한다.

---

## Fix A

> A를 수정했다.

```text
Fix stat cache
Fix changelog entry
Fix broken jsi executor search path
```

## Fix A in B

> B의 A를 수정했다.  
> 가장 자주 사용되는 패턴이다.

```text
Fix calculation in process.uptime()
Fix error condition in Verify:VerifyFinal
Fix duplicate symboles linker error in xcode project
```

## Fix A which B, Fix A that B

> B절인 A를 수정했다.  
> 'Fix A'로 끝낼 수 있지만, 보다 많은 정보를 주기 위해 which나 that 관계 대명사로 A를 설명한다. 무엇을 수정한 것인지 보다 상세하게 설명할 때 사용된다.

```text
Fix incorrect type which makes animated gifs not loop forever on device
Fix crash that happens when a component
```

## Fix A to B, Fix A to be B

> B를 위해 A를 수정한다.  
> 왜 수정하는지를 추가로 설명한다.

```text
Fix inability to remove 'Disabled' state from AccessibilityStates
Fix HTTP connection timeout callback to be appropriately called
```

## Fix A so that B

> A를 수정해서 B가 되도록 했다.  
> 'Fix A to B'와 의미는 비슷하나, 어감이 살짝 다르다. 고쳐진 B의 상태가 보다 강조된다.

## Fix A where B, Fix A when B

> B 처럼 발생하는 A를 수정했다.  
> 여기서 A는 보통 issue, error, crash

```text
Fix case where content of inline views didn't get relaid out
Fix case when inline view is visible even though it should have been truncated
Fix crash when removing root nodes
```

# IMPLEMENT

Code가 추가된 정보보다 더 주목할 만한 구현체를 완성 시켰을 때 사용한다.

---

## Implement A

> A를 구현했다.

```text
Implement data object
Implement Image.defaultSource
Implement bundle sync status
```

## Implement A to B

> B를 위해 A를 구현했다.  
> 구현 목적을 설명할 필요가 있을 때에는 to를 사용한다.

```text
Implement requiresMainQueueSetup in RCTT to satisfy Xcode warning
Implement an in-memory cache store to save parsed
```

# IMPROVE

호환성, 테스트 커버리지, 성능, 검증 기능, 접근성 등 향상이 있을 때 사용한다. 다양한 것들이 목적이 될 수 있다.

---

## Improve A

> A를 향상 시켰다.

```text
Improve compatibility with http/1
Improve Unicode handling
Improve iOS's accessibilityLabel performance by up to 20$
```

# MAKE

기존 동작의 변경을 명시한다.

---

## Make A B

> A를 B하게 만들었다.  
> 새롭게 뭔가를 만들었을 때는 Make 대신 Add를 사용해야 한다.

```text
Make config object read-only
Make values optional in ViewPropTypes
Make IsolateData store ArrayBufferAllocator
```

# MOVE

이동이 있을 때 사용한다.

---

## Move A to B, Move A into B

> A를 B로 옮겼다.

```text
Move function from header to source file
Move async hooks trace events setup to pre_execution.js
Move theme.tsx to folder themes
```

# PASS

Parameter를 넘기는 처리에 주로 사용된다.

---

# PREVENT

특정한 처리를 못하게 막을 때 사용된다.

---

## Prevent A

> A 하지 못하게 막았다.

```text
Prevent multiple connection errors
Prevent a potential error in event handling if object.prototype is extended
Prevent an infinite loop when attempting to render portals with SSR
```

## Prevent A from B
> Prevent event handlers from receiving extra argument in development

# REFACTOR

전면 수정이 있을 때 사용한다.

---

## Refactor A

```text
Refactor tick objects prune function
Refactor QueryWrap lifetime management
Refactor thread life cycle management
```

# RENAME

파일 이름 변경이 있을 때 사용한다.

---

## Rename A to B

> A를 B로 이름을 변경했다.

```text
Rename node-report to report
Rename location to trigger
Rename app.js to _app.js
```

# REMOVE

파일 제거가 있을 때 사용한다.

---

Remove A

> A를 제거했다.

```text
Remove README.md
```

# REVISE

Update와 비슷하나 문서의 개정이 있을 때 주로 사용한다.

---

## Revise A

> A 문서를 개정했다.

```text
Revise deprecation severeness info in Collaborator Guide
```

# SET

변수 값을 변경하는 등의 작은 수정에 주로 사용한다.

---

## Set A to B

> A를 B로 설정했다.

```text
Set tls.DEFAULT_ECDH_CURVE to 'auto'
```

# SIMPLIFY

복잡한 코드를 단순화 할 때 사용한다. Refactor의 성격이 강하나 이보다는 약한 수정의 겨우 이용하면 좋다.

---

## Simplify A

> A를 단순화했다.

```text
Simplify code and remove obsolete checks
Simplify the setup of async hooks trace events
Simplify loop arihmetic in GetCPUInfo
```

# UPDATE

Code 보다는 Resource, Library 등의 개정이나 버전 Update가 있을 때 사용한다.

---

## Update A to B

> A를 B로 업데이트 했다.

```text
Update acron to 6.1.0
```

> A를 B하기 위해 업데이트 했다.

```text
Update repo docs to use HTTPS
Update app icons to match recent Android releases
Update babelHelpers with Babel 7 support
```

# USE

무언가를 사용해 구현을 하는 경우 사용한다.

---

## Use A for B

> B에 A를 사용했다.

```text
Use fake MessageEvent for port.onMessage
Use object writer for thrown errors
Use relative path for SCRIPTDIR
```

## Use A to B

> B가 되도록 A를 사용했다.

```text
Use common operations to define browser globals
Use triggerReport() to handle signals
Use PauseOnNextJavaScriptStatment to implement --inspect-brk-node
```

## Use A in B

> B에서 A를 사용했다.

```text
Use smart pointer in UDPWrap::OnSend
Use TextLegend example in Android as well
Use main.js bundle is iOS template for production build
```

## Use A instead of B

> B 대신 A를 사용했다.

```text
Use babel runtime instead of relying on global babelHelpers and regenerator
```

# VERIFY

검증 코드를 넣을 때 자주 사용한다.

---

## Verify A

> A를 검증한다.

```text
Verify heap buffer allocations occur
```