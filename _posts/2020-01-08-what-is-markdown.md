---
layout: post
cover: /assets/images/cover/markdown.png
title: "Markdown 이란?"
authors: anthony
date: 2020-01-08 17:03:11 +0900
categories: development
tags: markdown
class: post
navigation: true
comment: true
---

<!-- <img src="https://img.shields.io/badge/MARKDOWN-v4-important"> -->

<!-- ![GitHub User's stars](https://img.shields.io/github/stars/incyverse?style=social) -->

## 개요(Overview)
***
**마크다운**<sup>Markdown</sup>은 **존 그루버**<sup>John Gruber</sup>의 원본 디자인 문서에 설명된 기본 구문을 지원하며, 일반 텍스트 서식 문서를 작성하는데 사용되는 텍스트 기반의 경량 마크업 언어다. 일반 마크업 언어에 비해 문법이 쉽고 간단한 것이 특징이다. **HTML**<sup>Hyper Text Markup Language</sup>과 **RTF**<sup>Rich Text Format</sup>[^1]등 서식 문서로 쉽게 변환되기 때문에 **응용 소프트웨어**<sup>[Application Software, App](/wiki#application-software)</sup>와 함께 배포되는 [README 파일](/wiki/#readme)이나 온라인 게시물 등에 많이 사용된다.


## 역사(History)
***
존 그루버는 2004년 문법 면에서 **에렌 스워츠**<sup>Aron H. Swartz</sup>와 중대한 협업을 통해 마크다운 언어를 만들었으며, 사람들이 읽기 쉽고 쓰기 쉬운 **PTF**<sup>Plain Text Format</sup>[^2]을 사용하여 쓸 수 있으면서 구조적으로 유효한 XHTML<span class="parenthesis">(또는 HTML)</span>로 선택적 변환이 가능하도록 하는게 목적이다.


## 문법(Syntax)
***
### 제목(Headings)
***
`<h1>`부터 `<h6>`까지 제목은 단어나 구문 앞에 **#**<sup>Number Sign, Hash</sup>을 추가한다. 사용하는 #의 수는 제목 수준과 일치해야 한다.
{% highlight markdown linenos %}
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
{% endhighlight %}

#### 대체 구문(Alternate Syntax)
또는 텍스트 아래 줄에 `<h1>`의 경우 **=**<sup>Equal Sign</sup> 문자를 추가, `<h2>`의 경우 **-**<sup>Minus Sign, Hyphen</sup> 문자를 추가한다.
{% highlight markdown linenos %}
Heading level 1
=

Heading level 2
-
{% endhighlight %}


### 단락(Paragraphs)
***
단락 `<p>`는 빈 줄을 사용하여 하나 이상의 텍스트 줄로 구분한다.
{% highlight markdown linenos %}
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
{% endhighlight %}


### 줄 바꿈(Line Breaks)
***
줄 바꿈 `<br>`은 문장 끝에 두 개 이상의 공백 입력한다.
{% highlight markdown linenos %}
This is the first line.  <!-- space 2번 -->
And this is the second line.
{% endhighlight %}

> 거의 모든 마크다운 응용 프로그램에서 줄 바꿈을 위해 둘 이상의 공백(일반적으로 "후행 공백"이라고 함)을 사용할 수 있지만 논란의 여지가 있다. 편지기에서 후행 공백을 보기가 어렵고 많은 살마들이 실수로 또는 의도적으로 모든 문장 뒤에 두 개의 공백을 넣는다. 이러한 이유로 줄 바꿈에 후행 공백 이외의 다른 것을 사용할 수 있다. 다행히 거의 모든 마크다운 애플리케이션에서 지원하는 또 다른 옵션 `<br>` 태그가 있으며, 호환성을 위해 줄 끝에 `<br>`를 사용하자.


### 굵게(Bold)
***
텍스트를 굵게 표시하려면 단어 또는 구문 앞뒤에 두 개의 __*__<sup>Asterisk</sup> 또는 **_**<sup>Underscore</sup>을 추가한다. `<strong>` 태그로 변환된다.
{% highlight markdown linenos %}
I just love **bold text**.
I just love __bold text__.
Love**is**bold
{% endhighlight %}


### 이탤릭체(Italic)
***
텍스트를 기울임 꼴로 표시하려면 단어 또는 구문의 앞뒤에 __*__<sup>Asterisk</sup> 또는 **_**<sup>Underscore</sup> 하나를 추가한다. `<em>` 태그로 변환된다.
{% highlight markdown linenos %}
Italicized text is the *cat's meow*.
Italicized text is the _cat's meow_.
A*cat*meow
{% endhighlight %}


### 굵은 기울임 꼴(Bold and Italic)
***
굵은체와 이탤릭체가 있는 텍스트를 동시에 강조하려면 단어 또는 구문 앞뒤에 __*__<sup>Asterisk</sup> 또는 **_**<sup>Underscore</sup> 세 개를 추가한다.
{% highlight markdown linenos %}
This text is ***really important***.
This text is ___really important___.
This text is __*really important*__.
This text is **_really important_**.
This text is really***very***important text.
{% endhighlight %}


### 인용구(Blockquotes)
***
인용구를 만들려면 단락 앞에 **>**<sup>Greater than</sup> 를 추가한다.
{% highlight markdown linenos %}
> Dorothy followed her through many of the beautiful rooms in her castle.
{% endhighlight %}

#### 여러 단락이 있는 인용구(Blockquotes with Multiple Paragraphs)
인용구는 여러 단락을 포함 할 수 있다. 단락 사이의 빈 줄에 **>**<sup>Greater than</sup> 를 추가한다.
{% highlight markdown linenos %}
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
{% endhighlight %}

#### 중첩 인용구(Nested Blockquotes)
인용구는 중첩 될 수 있다. 중첩하려는 단락 앞에 **>**<sup>Greater than</sup> 두 개를 추가한다.
{% highlight markdown linenos %}
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
{% endhighlight %}

#### 다른 요소와 인용구(Blockquotes with Other Elements)
인용구는 다른 마크다운 형식의 요소를 포함 할 수 있다. 모든 요소를 사용할 수 있는 것은 아니다.
{% highlight markdown linenos %}
> #### The quarterly results look greate!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going according to **plan**
{% endhighlight %}


### 목록(Lists)
***
항목을 정렬 된 목록과 정렬되지 않은 목록으로 구성 할 수 있다. `<ol>`, `<ul>`으로 변환된다.

#### 정렬 된 목록(Ordered Lists)
정렬 된 목록을 만들려면 숫자 뒤에 마침표가 있는 항목을 추가한다. 숫자 순서는 상관없지만 처음은 1로 시작해야한다.
{% highlight markdown linenos %}
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
   {% endhighlight %}

#### 정렬되지 않은 목록(Unordered Lists)
정렬되지 않은 목록을 만들려면 항목 앞에 __*__<sup>Asterisk</sup>, **-**<sup>Minus Sign, Hyphen</sup>, **+**<sup>Plus Sign</sup>를 추가한다.
{% highlight markdown linenos %}
- First item
- Second item
    * Indented item
    + Indented item
      {% endhighlight %}

#### 정의 목록(Definition Lists)
용어 정의 목록과 해당 정의를 만들 수 있다. 정의 목록을 만들려면 첫번째 줄에 용어를 입력하고 다음 줄엔 **:**<sup>Colon</sup>과 공백 및 정의를 입력한다.
{% highlight markdown linenos %}
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
{% endhighlight %}


### 코드(Code)
***
단어 또는 구문를 코드로 표시하려면 **`**<sup>Grave Accent</sup>으로 묶는다.
{% highlight markdown linenos %}
At the command prompt, type `nano`.
{% endhighlight %}

#### 코드 탈출(Escaping Backticks)
단어나 구문에 **\`**<sup>Grave</sup>가 하나 이상 포함되어 있는 경우 단어나 구문을 **\`**<sup>Grave</sup> 2개로 묶어 탈출한다.
{% highlight markdown linenos %}
``Use `code` in your Markdown file.``
{% endhighlight %}

``Use `code` in your Markdown file.``


### 수평선(Horizontal Rule)
---
수평선은 3개 이상의 __*__<sup>Asterisk</sup>, **-**<sup>Hyphen</sup>, **_**<sup>Underscore</sup>을 한 줄에 단독으로 사용한다.
{% highlight markdown linenos %}
***
___
---
{% endhighlight %}


### 연결(Links)
***
링크 텍스트를 **[ ]**<sup>Brackets</sup>으로 묶은 다음 바로 뒤에 URL을 **( )**<sup>Parenthesis</sup>로 묶는다.
{% highlight markdown linenos %}
My favorite search engine is [Google](https://google.com).
{% endhighlight %}

My favorite search engine is [Google](https://google.com).

#### 제목 추가(Adding Titles)
제목을 추가하려면 URL 뒤 **"**<sup>Quotation Mark</sup>로 내용을 묶어준다. 링크에 마우스를 가져 가면 툴팁으로 표시된다.
{% highlight markdown linenos %}
My favorite search engine is [Google](https://google.com "The best search engine").
{% endhighlight %}

My favorite search engine is [Google](https://google.com "The best search engine").

#### URL 및 이메일 주소(URLs and Email Addresses)
URL 또는 이메일 주소를 링크로 빠르게 전환하려면 **< >**<sup>Angle Brackets</sup>로 묶는다.
{% highlight markdown linenos %}
<https://www.incyverse.com>
<incyverse@gmail.com>
{% endhighlight %}

<https://www.incyverse.com>{:target="_blank"}

#### 링크 서식 지정(Formatting Links)
링크를 강조하려면 앞뒤에 __*__<sup>Asterisk</sup> 추가한다. 링크를 코드로 표시하려면 **[ ]**<sup>Brackets</sup> 안에 **`**<sup>Brace</sup>를 추가한다.
{% highlight markdown linenos %}
I love supporting the **[inCyVerse](https://www.incyverse.com)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
{% endhighlight %}

I love supporting the **[inCyVerse](https://www.incyverse.com)**.<br>
This is the *[Markdown Guide](https://www.markdownguide.org)*.<br>
See the section on [`code`](#code).


### 참조(Reference-style)
***
참조 스타일 링크는 마크다운에서 URL을 더 쉽게 표시하고 읽을 수 있게 해주는 특별한 종류의 링크다. 참조 스타일 링크는 두 부분으로 구성된다. 텍스트와 인라인으로 유지하는 부분과 텍스트를 쉽게 읽을 수 있도록 파일의 다른 곳에 저장하는 부분이다.<span class="parenthesis">(Endnotes or Footnotes)</span>
{% highlight markdown linenos %}
[hobbit-hole][1]

[1]: https://ko.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
[1]: https://ko.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'
[1]: https://ko.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)

[hobbit-hole](https://ko.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles")
{% endhighlight %}


### 취소선(Strikethough)
***
원하는 단어나 구문의 앞뒤에 두개의 **~**<sup>Tilde</sup>을 넣어 취소선을 칠 수 있다.
{% highlight markdown linenos %}
~~The world is flat.~~ We now know that the world is round.
{% endhighlight %}
~~The world is flat.~~ We now know that the world is round.


### 이미지(Images)
***
이미지를 추가하려면 **!**<sup>Exclamation Mark</sup>, 대괄호 안에 대체 텍스트, 괄호 안에 이미지 자산의 경로 또는 URL을 추가한다. 선택적으로 괄호안의 URL 뒤에 제목을 추가 할 수 있다.
{% highlight markdown linenos %}
![Philadelphia`s Magic Gardens. This place was so cool!](/assets/images/tags.jpg "Philadelphia's Magic Gardens")
{% endhighlight %}
![Philadelphia`s Magic Gardens. This place was so cool!](/assets/images/cover/tags.jpg "Philadelphia's Magic Gardens")
*Philadelphia's*

#### 이미지 링크(Linking Images)
이미지에 링크를 추가하려면 이미지의 마크다운을 괄호로 링크를 추가한다.
{% highlight markdown linenos %}
[![An old rock in the desert](/assets/images/cover/tags.jpg "Tags")](https://www.incyverse.com)
{% endhighlight %}


### 이모티콘(Emoji)
***
이모티콘을 추가하는 방법은 두 가지가 있다. 복사하여 마크다운 형식의 텍스트에 붙여 넣거나 단축 코드를 입력한다.

#### 이모티콘 복사 및 붙여넣기(Copying and Pasting Emoji)
대부분의 경우 [Emojipedia](https://emojipedia.org){:target="_blank"}와 같은 소스에서 이모티콘을 복사하여 문서에 붙여 넣을 수 있다. 😀

#### 이모티콘 단축 코드 사용(Using Emoji Shortcodes)
일부 마크다운 어플리케이션에서는 이모티콘 단축 코드를 지원한다. **:**<sup>Colon</sup>으로 코드를 묶어준다.
{% highlight markdown linenos %}
Gone camping! :tent: Be back soon.

That is so funny! :joy:
{% endhighlight %}


### 이스케이프 문자(Escaping Characters)
***
마크다운에서 텍스트 서식을 지정하는데 사용되는 리터럴 문자를 표시하려면 문자 앞에 **\\**<sup>Backslash</sup>를 추가한다.


### 각주(Footnotes)
***
각주를 사용하면 메모와 참조를 추가 할 수 있다.
{% highlight markdown linenos %}
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`
{% endhighlight %}


### 제목 ID(Heading IDs)
***
마크다운은 제목에 대한 사용자 지정 ID를 지원하며, 일부 프로세서는 자동으로 추가를 한다. 사용자 지정 ID를 **{ }**<sup>Braces</sup>로 묶는다.
{% highlight markdown linenos %}
### My Great Heading {#custom-id}
{% endhighlight %}

### 제목 ID에 연결(Linking to Heading IDs)
***
{% highlight markdown linenos %}
[Heading IDs](#heading-ids)
{% endhighlight %}


[^1]: 서식 있는 텍스트 포맷은 마이크로소프트사가 1987년에 개발한 규격인 사유의 문서 파일 형식이며 크로스 플랫폼 문서 교환을 위하여 만들었다.
[^2]: 그래픽 표현이나 그 밖의 오브젝트가 아닌 읽을 수 있는 자료의 문자열만을 대표하는 데이터

<!--
@ Ampersat
$ Dollar Sign
% Percent Sign
^ Caret, Circumflex
& Ampersand
| Vertical Bar, Pipe
; Semicolon
‘ Apostrophe, Single Quote
, Comma
. Period, Dot
< Less than
/ Slash
? Question Mark
-->
