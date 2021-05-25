---
layout: post
cover: /assets/images/cover/kotlin.jpg
title: "코틀린 기초: 클래스와 프로퍼티"
description: "코틀린 클래스와 프로퍼티"
authors: anthony
date: 2020-10-05 00:16:51 +0900
categories: kotlin
tags: dev kotlin
class: post
navigation: true
comment: true
---

<!-- alert-info -->
<i class="fas fa-info-circle"></i> Note
: 해당 내용은 <strong>Kotlin IN ACTION</strong> 책을 참조하였다.

## 2.2 클래스와 프로퍼티

***
모든 프로그램의 필수 요소인 **클래스**<sup>Class</sup>의 선언 방법과 **프로퍼티**<sup>Property</sup>[^1]의 개념을 알아보자.<br>
간단히 자바빈<sup>JavaBean</sup> 클래스인 Person을 정의하자. Person에는 name이라는 프로퍼티만 들어있다. {% highlight java linenos %} public class
Person { private final String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

} {% endhighlight %} 위 소스를 [변환기](/what-is-kotlin#java-kotlin-convert)를 써서 코틀린으로 변환해보자. {% highlight kotlin linenos %}
class Person(val name: String)
{% endhighlight %} 이런 유형의 클래스<span class="parenthesis">(코드가 없이 데이터만 저장하는 클래스)</span>를 **값 객체**<sup>value Object</sup>라
부르며, 값 객체를 간결하게 기술할 수 있는 구문을 제공한다.<br>
자바를 코틀린으로 변환한 결과 public **가시성 변경자**<sup>Visibility Modifier</sup>가 사라졌다. 코틀린은 기본 가시성은 public이므로 변경자를 생략해도 된다.

### 2.2.1 프로퍼티

클래스라는 개념의 목적은 데이터를 **캡슐화**<sup>Encapsulate</sup>하고 캡슐화한 데이터를 다루는 코드를 한 주체 아래 가두는 것이다. 자바에서는 데이터를 **필드**<sup>Field</sup>에
저장하며, 멤버 필드의 가시성은 보통 **비공개**<sup>Private</sup>다. 클래서는 자신을 사용하는 클라이언트가 그 데이터에 접근하는 통로로 쓸 수 있는 **접근자 메소드**<sup>Accessor
Method</sup>를 제공한다. 보통은 필드를 읽기 위한 **게터**<sup>Getter</sup>를 제공하고 필드를 변경하게 허용해야 할 경우 **세터**<sup>Setter</sup>를 추가 제공할 수
있다.<br>
자바에서는 필드와 접근자를 한데 묶어 **프로퍼티**<sup>Property</sup>라고 부르며, 프로퍼티라는 개념을 활용하는 프레임워크가 많다. 코틀린으 프로퍼티를 기본 기능으로 제공하며, 코틀린 프로퍼티는
자바의 필드와 접근자 메소드를 완전히 대체한다. 클래스에서 프로퍼티를 선언할 때는 val<span class="parenthesis">(읽기 전용)</span>과
var<span class="parenthesis">(변경 가능)</span>로 선언한다. {% highlight kotlin linenos %} class Person { // 읽기 전용 프로퍼티, 코틀린은 (
비공개) 필드와 필드를 읽는 단순한 (공개) 게터를 만들어낸다. val name: String, // 쓸 수 있는 프로퍼티, 코틀린은 (비공개) 필드, (공개) 게터, (공개) 세터를 만들어낸다. var
isMarried: Boolean } {% endhighlight %} 코틀린에서 프로퍼티를 선언하는 방식은 프로퍼티와 관련 있는 접근자를 선언하는 것이다.[^1] 코틀린은 값을 저장하기 위한 비공개 필드와 그 필드
값을 저장하기 위한 세터, 필드의 값을 읽기 위한 게터로 이뤄진 간단한 디폴트 접근자 구현을 제공한다. {% highlight java linenos %} /*

* 자바에서 Person 클래스를 사용
  */

> > > Person person = new Person("Bob", true);
> > > System.out.println(person.getName()); Bob
> > > System.out.println(person.isMarried()); true {% endhighlight %} 자바와 코틀린에서 정의한 Person 클래스 중 어느 쪽을 사용해도 이 코드를 바꿀 필요는 없다. 코틀린의 name 프로퍼티를 자바 쪽에서는 getName이라는 이름으로 불 수 있다. 게터와 세터의 이름을 정하는 규칙에는 예외가 있다. 이름이 `is`로 시작하는 프로퍼티의 게터에는 `get`이 붙지 않고 원래 이름을 그대로 사용하며, 세터에는 `is`를 `set`으로 바꾼 이름을 사용한다. 따라서 자바에서 `isMarried` 프로퍼티의 게터를 호출하려면 `isMarried()`를 사용해야 한다. {% highlight kotlin linenos %} /*

* 코틀린에서 Person 클래스 사용
  */ // new 키워드를 사용하지 않고 생성자를 호출

> > > val person = Person("Bob", true)
// 프로퍼티 이름을 직접 사용해도 코틀린이 자동으로 게터를 호출
> > > println(person.name)
Bod
> > > println(person.isMarried)
true {% endhighlight %} 게터를 호출하는 대신 프로퍼티를 직접 사용했다.
> 자바에서 선언한 클래스에 대해 코틀린 문법을 사용해도 된다. 코틀린에서는 자바 클래스의 게터를 `val` 프로퍼티처럼 사용할 수 있고, 게터/세터 쌍이 있는 경우에는 `var` 프로퍼티처럼 사용할 수 있다. 프로퍼티에는 그 프로퍼티의 값을 저장하기 위한 필드가 있다. 이를 프로퍼티를 **뒷받침하는 필드**<sup>Backing Field</sup>라고 부른다.

### 2.2.2 커스텀 접근자

{% highlight kotlin linenos %} class Rectangle(val height: Int, val width: Int) { val isSquare: Boolean // 프로퍼티 게터 선언
get() { return height == width } } {% endhighlight %}

### 2.2.3 코틀린 소스코드 구조: 디렉터리와 패키지

***
[^1]: 일부 객체 지향 프로그램 언어에서 필드와 메소드 간 기능의 중간인 클래스 멤버의 특수한 유형, 읽기 전용 프로퍼티의 경우 게터만 선언하며, 변경할 수 있는 프로퍼티의 경우 게터와 세터를 모두 선언한다.
