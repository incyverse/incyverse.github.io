---
type: post
title: Markdown Cheatsheet
description:
author: anthony
date: 2024-08-31 21:45:56 +0900
cover: assets/images/post/markdown.jpg
categories: [ development, programming, language, markdown ]
tags: [ markdown ]
navigation: true
---

## 개요

이 마크다운<sup>Markdown, md</sup> 치트시트는 모든 마크다운 구문 요소에 대한 간략한 개요를 제공합니다. 마크다운 구문에 대한 전체 소개는
[마크다운 가이드][guide]에 있습니다. 블로그를 작성할 때 쉽게 참고할 있도록 아래에 정리했습니다.

## 세그먼트 및 분기

단락을 구분하려면 하나 이상의 빈 줄을 사용하고, 단락 내의 줄을 나누려면 두 개의 이상의 공백을 사용하십시오.

## 제목 <sup>Headings</sup>

```markdown
This is an H1
=============

This is an H2
-------------

# H1 Default styles for headings

## H2 Default styles for headings

### H3 Default styles for headings

#### H4 Default styles for headings

##### H5 Default styles for headings

###### H6 Default styles for headings
```

## 문단 <sup>Paragraphs</sup>

문단을 만들려면 빈 줄을 사용하여 하나 이상의 텍스트 줄을 구분합니다.

---

### Blockquote

각 줄 앞에 `>`를 쓰세요.

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

```

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

또는 각 단락 앞에 `>`를 쓰세요.

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

```

### 多重引用

```
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

```

效果：

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

### 列表

列表项占一行，以*、+、-开头即可：

```
*   Red
*   Green
*   Blue

```

效果：

-   Red
-   Green
-   Blue

有序列表只需要将上述标记符换成数字加句点。而且顺序由书写顺序决定，与数字无关，但数字需要从1开始。例如：

```
1\.  Bird
3.  McHale
2.  Parish

```

效果：

1.  Bird
2.  McHale
3.  Parish

每一个列表项可以多行：

```
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.

```

效果：

-   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
-   Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

### 代码块

每一行前面缩进四个或以上个空格，就认为是开始了一段代码块。代码块内原样输出。

```
This is a normal paragraph:

    This is a code block.

```

效果：

This is a normal paragraph:

```
This is a code block.

```

### 横线

三个或更多个`*`、`-`（它们之间可以有空格）会产生横线：

```
* * *

```

效果：

* * * * *

### 链接

内嵌链接：

```
I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").

```

或参考文献式链接（缺省的链接标记认为与文本一致）：

```
I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

  [google]: http://google.com/        "Google"
  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
  [msn]:    http://search.msn.com/    "MSN Search"

```

效果：

I get 10 times more traffic from [Google](http://google.com/ "Google") than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or [MSN](http://search.msn.com/ "MSN Search").

如果直接以链接地址作为链接文本，可以用如下快捷写法：

```
<http://www.shengbin.me> 效果：

```

[http://www.shengbin.me](http://www.shengbin.me/)

### 强调

单个`*`或`_`产生斜体，两个（`**`、`__`）则产生粗体。例如：

```
*like* _this_

**like** **this**

```

效果：

*like* *this*

**like** **this**

### 内嵌代码

```
code: `echo hello`

```

效果：

code: `echo hello`

### 图片

图片与链接类似，只需在文本前面加上感叹号`!`即可。图片位置和大小无法通过Markdown来指定。

### 转义字符

以下特殊字符需要用`\`转义得到。

```
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
```

[guide]: https://www.markdownguide.org/
