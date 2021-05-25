---
layout: post
cover: /assets/images/cover/kotlin.jpg
title: "코틀린이란? #1"
description: "코틀린이란 무엇이며, 왜 필요한가?"
authors: anthony
date: 2020-10-02 17:40:54 +0900
categories: development
tags: kotlin
class: post
navigation: true
comment: true
---

<i class="fas fa-info-circle"></i> NOTE
: 해당 내용은 <strong>Kotlin IN ACTION</strong> 책을 참조하였다.

**코틀린**<sup>Kotlin</sup>은 자바 플랫폼에서 돌아가는 새로운 프로그래밍 언어다. 코틀린은 간결하고 실용적이며, 자바 코드와의 **상호운용성**<sup>Interoperability</sup>을 중시한다. 대표적으로 서버 개발, 안드로이드 앱 개발 등의 분야에서 코틀린을 쓸 수 있다. 코틀린은 기존 자바 라이브러리나 프레임워크와 함께 잘 작동하며, 성능도 자바와 같은 수준이다.


## 1.1 Kotlin 맛보기
***
[Kotlin Playground](https://play.kotlinlang.org){:target="_blank"}에 접속하여 쉽고 빠르게 코틀린을 바로 실행해 볼 수 있다.


## 1.2 Kotlin의 주요 특성
***
### 1.2.1 대상 Platform: Server, Android 등 자바가 실행되는 모든 곳
코틀린의 주목적은 현재 자바가 사용되고 있는 모든 용도에 적합하면서도 더 간결하고 생산적이며 안전한 대체 언어를 제공하는 것이다. 코틀린을 활용할 수 있는 가장 일반적인 영역은 다음과 같다.
- 서버상의 코드<span class="parenthesis">(웹 애플리케이션의 백엔드)</span>
    - 브라우저에 HTML 페이지를 돌려주는 웹 애플리케이션
    - 모바일 애플리케이션에게 HTTP 프로토콜을 통해 JSON API를 제공하는 백엔드 애플리케이션
    - **RPC**<sup>Remote Procedure Call</sup> 프로토콜을 통해 서로 통신하는 작은 서비들로 이뤄진 **마이크로서비스**<sup>[Microservice](/wiki#microservice)</sup>
- 안드로이드 디바이스에서 실행되는 모바일 애플리케이션

### 1.2.2 정적 타입 지정 언어
자바와 마찬가지로 코틀린도 **정적 타임**<sup>[Statically Typed](/wiki#statically-typed)</sup> 지정 언어다. ~~정적 타입 언어와 동적 타입 언어~~<br>
자바와 달리 코틀린에서는 모든 변수의 타입을 프로그래머가 직접 명시할 필요가 없다. 대부분의 경우 코틀린 컴파일러가 문맥으로부터 변수 타입을 자동으로 유추할 수 있기 때문에 프로그래머는 **타입 선언을 생략**<span class="parenthesis">(**타입 추론**<sup>[Type Inference](/wiki#type-inference)</sup>)</span>해도 된다.<br>
간단한 예는 다음과 같다.
{% highlight kotlin linenos %}
// 변수를 정의하면서 정수 값으로 초기화
var x = 1
{% endhighlight %}
코틀린은 이 변수의 타입이 Int임을 자동으로 알아낸다. 코틀린의 가장 중요한 특성은 **널이 될 수 있는 타입**<sup>Nullable Type</sup>과 **함수 타입**<sup>Function Type</sup> 시스템을 지원한다.

~~### 1.2.3 함수형 프로그래밍과 객체지향 프로그래밍~~

### 1.2.4 오픈소스
코틀린과 컴파일러, 라이브러리 및 코틀린 관련 모든 도구는 오픈소스이며, 어떤 목적에든 무료로 사용할 수 있다. 코틀린은 아파치2 라이센스로 제공된다.
개발은 GitHub를 통해 이뤄지고 있으며 프로그래맹 커뮤니티의 기여에 대해 열려있다.


## 1.3 코틀린 응용
***
### 1.3.1 서버 프로그래밍

### 1.3.2 안드로이드 프로그래밍
전형적인 모바일 애플리케이션은 전형적인 엔터프라이즈 애플리케이션과 아주 많이 다르다. 모바일 애플리케이션은 더 작고 코드 통합할 필요도 적다. 또 보통 더 다양한 디바이스에 대해 서비스의 신뢰성을 보장하면서 더 빠르게 개발해 배포할 수 있다.<br>
흔한 안드로이드 개발 작업을 훨씬 더 적은 코드로 달성할 수 있고, 때로는 전혀 코드를 작성하지 않고 그렇게 할 수 있다.<span class="parenthesis">(컴파일러가 자동으로 필요한 코드를 생성해준다.)</span> 코틀린 팀이 만든 **안코**<sup>[Anko](https://github.com/kotlin/anko)</sup> 라이브러리를 사용하면 수많은 안드로이드 API에 대한 **코틀린 아답터**<sup>Kotlin Adapter</sup>를 제공받을 수 있다.
{% highlight kotlin linenos %}
// 단순한 텍스트 필드를 만든다.
verticalLayout {
val name = editText()
// 클릭 시 텍스트 필드의 값을 표시한다.
button("Say Hello") {
// 버트에 리스터를 추가하고 토스트(표시 창)를 표시하는 간결한 API다.
onClick { toast("Hello, ${name.text}!") }
}
}
{% endhighlight %}
코틀린을 사용하더라도 성능 측면에서 손해도 없고 컴파일러가 생성한 바이트코드는 효율적으로 실행된다. 또한 대부분의 코틀린 표준 라이브러리 함수는 인자로 받은 **[람다 함수](/wiki#lambda)**를 **인라이닝**<sub>Inlining</sup>한다. 따라서 새로운 객체가 만들어지지 않으므로 객체 증가로 인해 가비지 컬렉션이 늘어나서 프로그램이 자주 멈추는 일도 없다.


## 1.4 코틀린 철학
***
### 1.4.1 실용성

### 1.4.2 간결성

### 1.4.3 안정성

### 1.4.4 상호운용성


## 1.5 코틀린 도구 사용
***
**튜토리얼**<sup>[Tutorials](https://kotlinlang.org/docs/tutorials/){:target="_blank"}</sup>
### 1.5.1 코드 컴파일
소스를 저장할 때는 **.kt**라는 확장자를 파일에 붙인다. 컴파일러는 소스코드를 분석해서 **.class** 파일을 만들어 낸다. 만들어진 **.class** 파일은 개발 중인 애플리케이션의 유형에 맞는 표준 패키징 과정을 거쳐 실행될 수 있다. 가장 간단한 방식은 커맨드 라인에서 `kotlinc` 명령을 통해 코드를 컴파일한 다음 자바 명령으로 그 코드를 실행하는 것이다.
{% highlight bash linenos %}
kotlinc <file or directory> -include-runtime -d <jar name>
java -jar <jar name>
{% endhighlight %}
코틀린 컴파일러로 컴파일한 코드는 **Kotlin Runtime Library**에 의존한다. 이 파일을 배포할 때는 런타임 라이브러리도 함께 배포해야 한다.<br>
실제로 개발을 진행하면 컴파일하기 위해 **Maven**, **Gradel**, **Ant**등의 빌드 시스템을 사용하게 된다.

### 1.5.2 대화형 쉘
**대화형 셀**<sup>Read Eval Point Loop, REPL</sup>에서 코틀린 코드를 한 줄 입력하면 즉시 그 코드를 실행한 결과를 볼 수 있다. REPL을 시작하려면 `kotlinc` 명령을 아무 인자 없이 실행하거나 **IntelliJ IDEA**에서 `tool > kotlin > kotlin REPL`를 사용하면 된다.

### 1.5.3 온라인 놀이터
**[온라인 놀이터](http://try.kotl.in/)**에는 코틀린의 특성을 보여주는 여러 코드 예제와 코틀린을 대화식으로 배울 수 있는 연습문제인 **코틀린 선문답**<sup>Kotlin Koans</sup>도 있다.

### 1.5.4 Java-Kotlin 변환기 {#java-kotlin-convert}
**IntelliJ IDEA**에서 `code > Convert Java File to Kotlin File`을 사용하면 된다.
