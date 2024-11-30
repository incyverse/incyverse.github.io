---
type: post
title: 리액트 개발을 위해 꼭 알아야 할 자바스크립트
description:
author: anthony
date: 2024-11-13 10:57:25 +0900
cover: assets/images/post/base.jpg
categories: [  ]
tags: [  ]
navigation: true
featured: false
math: false
mermaid: false
---

## 자바스크립트의 동등 비교

____

리액트 함수 컴포넌트와 훅을 반복적으로 작성하다 보면 의존성 배열(dependencies)에 대해 고민해 본 적이 있을 것이다.

리액트 컴포넌트의 렌더링이 일어나는 이유 중 하나가 바로 props의 동등 비교에 따른 결과입니다. 그리고 이 props의 동등 비교는 객체의 얕은 비교를 기반으로
이뤄지는데, 이 얕은 비교가 리액트에서 어떻게 작동하는지 이해하지 못하면 렌더링 최적화에 어려움을 겪을 가능성이 크다.

리액트의 가상 DOM과 실제 DOM의 비교, 리액트 컴포넌트가 렌더링할지를 판단하는 방법, 변수나 함수의 메모이제이션 등 모든 작업은 자바스크립트의동등 비교를
기반으로 한다. 자바스크립트의 이러한 동등 비교는 어떻게 수행되는지, 또 이를 리액트에서 어떻게 활용하고 있는지 살펴보자.

### 데이터 타입

자바스크립트의 모든 값은 데이터 타입을 갖고 있으며, 이 데이터 타입은 크게 원시 타입과 객체 타입으로 나눌 수 있다.

#### 원시 타입<sup>Primitive Type</sup>

객체가 아닌 다른 모든 타입을 의미한다. 객체가 아니므로 이러한 타입들은 메서드를 갖지 않는다.

##### undefined

선언 후 값을 할당하지 않은 변수 또는 값이 주어지지 않은 인수에 자동으로 할당되는 값이다.

```javascript
let foo;

typeof foo === 'undefined';

function bar(hello) {
  return hello;
}

typeof bar() === 'undefined';
```

undefined와 null은 오직 각각 null과 undefined라는 값만 가질 수 있으며, 그 밖의 타입은 가질 수 있는 값이 두 개 이상(boolean의 true, false)
존재한다.

##### null

아직 값이 없거나 비어 있는 값을 표현할 때 사용한다.

```javascript
typeof null === 'object';
```

null이 가지고 있는 특별한 점 하나는 다른 원시값과 다르게 typeof로 null을 확인했을 때 해당 타입이 아닌 'object'라는 결과가 반환된다는 것이다. 이는
초창기 자바스크립트가 값을 표현하는 방식 때문에 발생한 문제로, 이후에 typeof null을 진짜 'null'로 표현하고자 하는 시도가 있었으나 이전 코드에서 작동할 수
없는 호환성이 깨지는 방법 변경 사항(breaking change)이어서 받아들여지지 않았다.

undefined는 '선언되었지만 할당되지 않은 값'이고, null은 '명시적으로 비어 있음을 나태내는 값'으로 사용하는 것이 일반적이다.

##### Boolean

true와 false만을 가질 수 있는 데이터 타입이다. 주로 조건문에서 많이 쓰이는 데이터 타입이다.

- falsy: 조건문 내부에서 false로 취급되는 값
- truthy: 조건문 내부에서 true로 취급되는 값. falsy로 취급하는 값 이외에는 모두 true로 취급되지만 객체와 배열은 내부에 값이 존재하는지 여부와 상관없이
truthy로 취급된다.

##### Number

정수와 실수를 구분해 저장하는 다른 언어와 다르게, 자바스크립트는 모든 숫자를 하나의 타입에 저장했었다. ECMAScript 표준에 따르면 -(2<sup>53</sup>-1)과
2<sup>53</sup>-1 사이의 값을 저장할 수 있다. 이후에 bigint가 등장하기 전까지는 이 범위 외의 값들을 다루기가 어려웠다.

```javascript
const a = 1;

const maxInteger = Math.pow(2, 53);
maxInteger - 1 === Number.MAX_SAFE_INTEGER;

const minInteger = -(Math.pow(2, 53) - 1);
minInteger === Number.MIN_SAFE_INTEGER;
```

##### Bigint

number가 다룰 수 있는 숫자 크기의 제한을 극복하기 위해 ES2020에서 새롭게 나온 것으로, 최대 2<sup>52</sup> - 1을 지정할 수 있는 number의 한계를
넘어서 더 큰 숫자를 저장할 수 있게 해준다.

##### String

string은 텍스트 타입의 데이터를 저장하기 위해 사용된다. 한 쌍의 작은따옴표(')나 큰따옴표("). 또는 내장 표현식을 허용하는 문자열 리터럴 표현 방식인 백틱(`)
으로도 표현할 수 있다.

백틱으로 표현하는 문자열은 앞선 작은따옴표나 큰따옴표와는 조금 차이점이 있다. 백틱을 사용해서 표현한 문자열을 템플릿 리터럴(template literal)이라고 하는데,
같은 문자열을 반환하지만 줄바꿈이 가능하고, 문자열 내부에 표현식을 쓸 수 있다는 차이가 있다.

#### 객체 타입<sup>Object/Reference Type</sup>

객체 타입을 간단하게 정의하면 원시 타입 이외의 모든 것이다. 자바스크립트를 이루고 있는 대부분의 타입이 바로 객체 타입이다. 여기에는 배열, 함수, 정규식, 클래스
등이 포함된다.

객테 타입(object type)은 참조를 전달한다고 해서 참조 타입(reference type)으로도 불린다는 사실이다.

- object

[1]: https://2ality.com/2013/10/typeof-null.html
[2]: https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=hamony:typeof_null