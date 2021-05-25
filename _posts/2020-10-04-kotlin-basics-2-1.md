---
layout: post
cover: /assets/images/cover/kotlin.jpg
title: "코틀린 기초: 함수와 변수"
description: "코틀린 함수와 변수"
authors: anthony
date: 2020-10-04 14:37:56 +0900
categories: development
tags: kotlin
class: post
navigation: true
comment: true
---

<i class="fas fa-info-circle"></i> NOTE
: 해당 내용은 <strong>Kotlin IN ACTION</strong> 책을 참조하였다.

## 2.1 기본 요소: 함수와 변수
***
모든 프로그램의 필수 요소인 **함수**<sup>Function</sup>, **변수**<sup>Variable</sup>의 선언 방법을 알아보자.

### 2.1.1 Hello, World!

***
고전이 된 예제인 **Hello, World!**를 찍는 프로그램으로 시작해 보자. {% highlight kotlin linenos %} fun main(args: Array<String>) { println("
Hello, world!")
} {% endhighlight %}

- 함수를 선언할 때 `fun` 키워드를 사용한다.
- 파라미터 이름 뒤에 타입을 작성한다.
- 함수를 최상위 수준에 정의, 꼭 클래스 안에 함수를 넣을 필요는 없다.
- 배열도 일반적인 클래스와 마찬가지다. 배열 처리를 위한 문법이 따로 존재하지 않는다.
- `System.out.println` 대신 `println`이면 된다. 코틀린 표준 라이브러리는 여러 가지 표준 자바 라이브러리 함수를 간결하게 사용할 수 있게 감싼 **래퍼**<sup>Wrapper</sup>를
  제공한다.
- 줄 끝에 **;**<sup>Semi Colon</sup>을 붙이지 않아도 된다.

### 2.1.2 함수

***
코틀린 함수의 기본 구조는 다음과 같다. {% highlight kotlin linenos %} // fun 함수이름(파라미터 목록) : 반환 타입 fun max(a: Int, b: Int) : Int { // 함수
본문 return if (a > b) a else b } {% endhighlight %} 코틀린의 `if`는 값을 만들어내지 못하는 **문장**<sup>Statement</sup>이 아니고 결과를 만드는 **
식**<sup>Expression</sup>이다. 이 예제의 if식은 자바 3항 연산자로 작성한 `(a > b) ? a : b` 식과 비슷하다.

> #### 문(Statement)과 식(Expression)의 구분
> 식은 값을 만들어 내며 다른 식의 하위 요소로 계산에 참여할 수 있는 반면 문은 자신을 둘러싸고 있는 가장 안쪽 블록의 최상위 요소로 존재하며 아무런 값을 만들어내지 않는다는 차이가 있다. 자바에서는 모든 제어 구조가 문인 반면 코틀린에서는 루프를 제외한 대부분의 제어 구조가 식이다. 반면 대입문은 자바에서는 식이었으나 코틀린에서는 문이다. 그로 인해 자바와 달리 대입식과 비교식을 잘못 바꿔 써서 버그가 발생하는 겨우가 많다.

#### 식이 본문인 함수

더 간결한 함수로 표현을 해보자. {% highlight kotlin linenos %} fun max(a: Int, b: Int) : Int = if (a > b) a else b {% endhighlight %}

**{ }**<sup>Braces</sup>를 없애고 return를 제거하면서 **=**<sup>Equal Sign</sup>를 식 앞에 붙이면 더 간결하게 함수를 표현할 수 있다.<br>
본문이 **{ }**으로 둘러싸인 함수를 **블록이 본문인 함수**라 부르고, **=**과 식으로 이뤄진 함수를 **식이 본문인 함수**라고 한다.

<i class="fas fa-lightbulb"></i> TIP
: IntelliJ IDE는 이 두 방식의 함수를 서로 변환하는 메뉴가 있다. **식 본문으로 변환**<sup>Convert to expression body</sup>과 **블록 본문으로 변환**<sup>
Convert to block body</sup>이다.

반환 타입을 생략하면 함수를 더 간략하게 만들 수 있다. {% highlight kotlin linenos %} fun max(a: Int, b: Int) = if (a > b) a else b {%
endhighlight %}

코틀린에서는 식이 본문인 함수를 자주 쓴다. `if`, `when`, `try`등의 더 복잡한 식도 자주 쓴다. 정적 타입 지정 언어는 컴파일 시점에 모든 식의 타입을 지정해야 하지만, 식이 본문인 함수의 경우 굳이
사용자가 반환 타입을 적지 않아도 컴파일러가 분석하여 반환 타입을 정한다. 컴파일러가 타입을 분석해 프로그래머 대신 프로그램 구성 요소의 타입을 정해주는 기능을 **타입 추론**<sup>Type
Iference</sup>이라 부른다.<br>
식이 본문인 함수의 반환 타입만 생략이 가능하며 블록이 본문인 함수는 반드시 반환 타입과 return문을 사용해 반환 값을 명시해야 한다.

### 2.1.3 변수

***
코틀린에서는 변수 이름 뒤에 타입을 명시하거나 타입 지정을 생략 할 수 있도록 허용한다. {% highlight kotlin linenos %} // 컴파일러가 초기화 식을 분석해서 타입을 변수 타입으로 지정한다.
var question = "삶, 우주, 그리고 모든 것에 대한 궁극적인 질문"

// 초기화 식은 42로 Int 타입이며 변수도 Int 타입이 된다. var answer = 42

// 원한다면 타입을 명시해도 된다. var answer: Int = 42 {% endhighlight %}

**부동소수점**<sup>Floating Point</sup> 상수를 사용한다면 변수 타입은 **Double**이 된다. {% highlight kotlin linenos %} var yearsToCompute =
7.5e6 // 7.5 * 10^6 = 7500000.0 {% endhighlight %}

초기화 식을 사용하지 않고 변수를 선언하려면 변수 타입을 반드시 명시해야 한다. 초기화 식이 없다면 아무 정보가 없어 컴파일러가 타입 추론이 불가능하다. {% highlight kotlin linenos %} val
answer: Int answer = 42 {% endhighlight %}

#### 변경 가능한 변수와 변경 불가능한 변수

변수 선언 시 키워드 조건은 다음과 같다.

- **val**[^2] - **변경 불가능한**<sup>Immutable</sup> 참조를 저장하는 변수, **val**로 선언된 변수는 일단 초기화하고 나면 재대입이 불가능하다.
- **var**[^3] - **변경 가능한**<sup>Mutable</sup> 참조, 변수의 값을 변경 가능하다.

기본적으로 모든 변수를 **val**를 사용해 불변 변수로 선언하고, 꼭 필요할 때만 **var**로 변경하자. 변경 불가능한 참조와 변경 불가능한 객체를 부수 효과가 없는 함수와 조합해 사용하면 코드가 함수형
코드에 가까워진다.<br>
**val** 변수는 한 번만 초기화돼야 한다. 하지만 실행될 때 초기화 문장만 실행됨을 컴파일러가 확인할 수 있다면 조건에 따라 **val** 값을 다른 여러 값으로 초기화할 수도 있다. {% highlight
kotlin linenos %} val message: String if (canPerformOperation()) { message = "Success"
// ...연산을 수행 } else { message = "Failed"
} {% endhighlight %}

**val** 참조 자체는 불변일지라도 그 참조가 가리키는 객체의 내부 값은 변경될 수 있다. {% highlight kotlin linenos %} // 불변 참조를 선언한다. val languages =
arrayListOf("Java")
// 참조가 가리키는 객체 내부를 변경한다. languages.add("Kotlin")
{% endhighlight %}

**var**를 사용하면 변수 값은 변경이 가능하지만 타입은 변경이 불가능하다. {% highlight kotlin linenos %} var answer = 42 // "Error: type mismatch"
컴파일 오류 발생 answer = "no answer"
{% endhighlight %}
**문자열 리터럴**<sup>String Literal</sup>에서 컴파일 오류가 발생한다. 타입(`String`)이 컴파일러가 인식하는 타입(`Int`)과 다르기 때문이다.

### 2.1.4 더 쉽게 문자열 형식 지정: 문자열 템플릿

***
다음은 **문자열 템플릿**<sup>String Template</sup>이라는 기능을 보여준다. {% highlight kotlin linenos %} fun main(args: Array<String>) {
val name = if (args.size > 0) args[0] else "Kotlin"
println("Hello, $name!")
} {% endhighlight %} 문자열 리터럴의 필요한 곳에 선언된 변수 앞에 **$**<sup>Dollar Sign</sup>를 추가하여 넣어준다. 컴파일러는 각 식을 정적<sup>Static</sup>으로
컴파일 시점에 검사하기 때문에 존재하지 않는 변수를 문자열 템플릿 안에서 사용하면 컴파일 오류가 발생한다.<br>
**$**문자를 문자열에 넣고 싶으면 `println("\$x")`와 같이 **\\**를 사용해 **$**를 이스케이프<sup>Escape</sup>시켜야 한다.

복잡한 식도 **{ }**로 묶어서 문자열 템플릿 안에 넣을 수 있다. {% highlight kotlin linenos %} fun main(args: Array<String>) { if (args.size >

0) { println("Hello, ${args[0]}!")
   } } {% endhighlight %}

> #### 한글을 문자열 템플릿에서 사용할 경우 주의할 점
> 글자로 분류할 수 있는 모든 유니코드 문자를 식별자에 사용할 수 있으므로 변수 이름에 한글이 들어갈 수 있다. 문자열 템플릿 안에 **$**로 변수를 지정할 때 변수명 바로 뒤에 한글을 붙여서 사용하면 컴파일러는 영문자와 한글을 한꺼번에 식별자로 인식해서 **Unresolved reference** 오류를 발생시킨다. 이 문제를 해결하는 방법은 `$name님 반가워요!` 처럼 작성된 문자열을 `${name}님 반가워요!` 처럼 변수를 **{ }**으로 묶어주면 된다.

**{ }**으로 둘러싼 식 안에서 **"**<sup>Quotation Mark</sup>를 {% highlight kotlin linenos %} fun main(args: Array<String>) {
println("Hello, ${if (args.size > 0) args[0] else "someone"}!")
} {% endhighlight %}

**{ }**으로 둘러싼 식 안에서 문자열 템플릿을 사용해도 된다. {% highlight kotlin linenos %} ${if (s.length > 2) "too short" else "normal string
${s}"} {% endhighlight %}


***
[^1]: 일부 객체지향 프로그래밍 언어에서 필드(데이터 멤버)와 메소드 간 기능의 중간인 클래스 멤버의 특수한 유형, 프로퍼티의 읽기와 쓰기는 **게터**<sup>Getter</sup>와 **세터**<sup>
Setter</sup> 메소드 호출로 변환
[^2]: 값을 뜻하는 Value에서 따옴
[^3]: 변수를 뜻하는 Variable에서 따옴, Variable이 형용사로 쓰이면 '변할 수 있는'이라는 뜻이다. 이미 변화라는 개념이 내재돼 있어 함수형 프로그래머 중에는 변경 불가능한 변수를 표현하기 위해
변수라는 단어 대신 '값'이나 '이름'이라는 단어를 사용하는 사람도 있다. 문맥에 따라 '값'과 '이름'을 혼용하기도 한다.
