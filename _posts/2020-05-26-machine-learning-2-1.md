---
layout: post
cover: /assets/images/cover/machine-learning.jpg
title: "간단한 분류 알고리즘 훈련"
description: "분류를 위한 초창기 머신 러닝 알고리즘인 퍼셉트론과 적응형 선형 뉴런으로 기본적인 최적화에 대하여 공부하자."
authors: anthony
date: 2021-05-26 12:45:08 +0900
categories: development
tags: ["machine learning"]
class: post
navigation: true
comment: true
---

# 알고리즘 훈련
***
분류를 위한 초창기 머신 러닝 알고리즘인 퍼셉트론<sup>Perceptron</sup>과 적응형 선형 뉴런으로 기본적인 최적화에 대하여 공부하자.

- 머신 러닝 알고리즘을 직관적으로 이해하기
- 판다스, 넘파이, 맷플롯립으로 데이터를 읽고 처리하고 시가화하기
- 파이썬으로 선형 분류 알고리즘 구현하기

## 인공 뉴련: 초기 머신 러닝의 간단한 역사
***
AI를 설계하기 위해 생물학적 뇌가 동작하는 방식을 이해라려는 시도로, 1943년 워런 매컬록<sup>Warren McCulloch</sup>과 월터 피츠<sup>Walter Pitts</sup>는 처음으로 
간소화된 뇌의 뉴런 개념을 발표했다. 이를 **매컬록-피츠**<sup>MCP</sup> 뉴런이라고 한다.

몇 년 후에 프랑크 로제블라트<sup>Frank Rosenblatt</sup>는 MCP 뉴런 모델을 기반으로 퍼셉트론 학습 개념인 자동으로 최적의 가중치를 학습하는 알고리즘을 제안한다. 이 가중치는 뉴런의 
출력 신호를 낼지 말지를 결정하기 위해 입력 특성에 곱하는 계수이며 샘플이 한 클래스에 속하는지 아닌지를 예측할 수 있다.

### 인공 뉴런의 수학적 정의
***
**인공 뉴런**<sup>Artificial Neuron</sup> 아이디어를 두 개의 클래스가 있는 이진 분류<sup>Binary Classification</sup> 작업으로 볼 수 있다. 두 클래스는 양성 
클래스와 음성 클래스로 나타내며, 입력 값 **𝑥**와 이에 상응하는 가중치 벡터 **𝑤**의 선형 조합으로 결정 함수**𝜙(𝑧)**를 정의, 최종 입력<sup>Net Input</sup> **𝑧 =
𝑤<sub>1</sub>𝑥<sub>1</sub> + ... + 𝑤<sub>𝑚</sub>𝑥<sub>𝑚</sub>**이다.

특정 샘플 **𝑥<sup class="non-color">❨𝑖❩</sup>**의 최종 입력이 사전에 정의된 임계 값**𝜃**보다 크면 양성 클래스로 예측하고, 그렇지 않으면 음성 클래스로 예측한다. 퍼셉트론 
알고리즘에서는 결정 함수**𝜙(⋅)**는 **단위 계단 함수**<sup>Unit Step Function</sup>[^1]를 변형한 것이다. 머신 러닝 분야에서는 음수 임계 값 또는 가중치 
**𝑤<sub>0</sub> = -𝜃**를 **절편**이라고 한다.

> <i class="fas fa-info-circle"></i> NOTE
> 
> 선형대수 표기법: 지코 콜터<sup>Zico Kolter</sup>가 쓴 선형대수 소개 자료인 [Linear Algebra Review and Reference](http://www.cs.cmu.
> edu/~zkolter/course/linalg/linalg_notes.pdf){:target="_blank"}를 참고하자.

### 퍼셉트론 학습 규칙
***
MCP 뉴런과 임계 퍼셉트론 모델 이면에 있는 전반적인 아이디어는 뇌의 뉴런 하나가 작동하는 방식을 흉내 내려는 환원주의<sup>Reductionism</sup>[^2] 접근 방식을 사용한 것이다. 출력을 
내거나 내지 않는 두 가지 경우만 존재한다. 요약하면 다음과 같다.
1. 가중치를 0 또는 랜덤한 작은 값으로 초기화
2. 각 훈련 샘플 𝑥<sup class="non-color">❨𝑖❩</sup>에서 다음을 작업
    1. 출력 값 ŷ를 계산
    2. 가중치를 업데이트
    
출력 값은 단위 계산 함수로 예측한 클래스 레이블이다. 가중치 벡터𝑤에 있는 개별 가중치 𝑤<sub>𝑗</sub>가 동시에 업데이트되는 것을 다음과 같이 쓸수 있다.[^3]

**𝑤<sub>𝑗</sub> := 𝑤<sub>𝑗</sub> + ∆𝑤<sub>𝑗</sub>**

가중치 𝑤<sub>𝑗</sub>를 업데이트하는 데 사용되는 ∆𝑤<sub>𝑗</sub> 값은 퍼셉트론 학습 규칙에 따라 계산된다.

**∆𝑤<sub>𝑗</sub> = ƞ(𝑦<sup class="hat non-color">ˆ</sup><sup class="non-color left">❨𝑖❩</sup> - 𝑦<sup 
class="non-color">❨𝑖❩</sup>)𝑥<sub>𝑗</sub><sup class="non-color left">❨𝑖❩</sup>**

여기서 ƞ는 **학습률**<sup>Learning Rate</sup>이다.[^4] 𝑦<sup class="non-color">❨𝑖❩</sup>는 𝑖번째 훈련 샘플의 **진짜 클래스 레이블**<sup>True 
Class Label</sup>이다. 𝑦<sup class="hat non-color">ˆ</sup><sup class="non-color left">❨𝑖❩</sup>는 **예측 클래스 
레이블**<sup>Predicted Class Label</sup>이다. 가중치 벡터의 모든 가중치를 동시에 업데이트한다는 점이 중요하다. 모든 가중치 ∆𝑤<sub>𝑗</sub>를 업데이트하기 전에 𝑦<sup 
class="hat non-color">ˆ</sup><sup class="non-color left">❨𝑖❩</sup>를 다시 계산하지 않는다. 2차원 데이터셋에서는 다음과 같이 업데이트된다.

**∆𝑤<sub>0</sub> = ƞ(𝑦<sup class="non-color">❨𝑖❩</sup> - output<sup class="non-color">❨𝑖❩</sup>)**
**∆𝑤<sub>1</sub> = ƞ(𝑦<sup class="non-color">❨𝑖❩</sup> - output<sup class="non-color">❨𝑖❩</sup>)𝑥<sub>1</sub><sup 
class="non-color left">❨𝑖❩</sup>**
**∆𝑤<sub>2</sub> = ƞ(𝑦<sup class="non-color">❨𝑖❩</sup> - output<sup class="non-color">❨𝑖❩</sup>)𝑥<sub>2</sub><sup 
class="non-color left">❨𝑖❩</sup>**

> <i class="fas fa-info-circle"></i> NOTE
> 
> 이 후 계산식 예는 책을 참조 하자. p.053

퍼셉트론은 두 클래스가 선형적으로 구분되고 학습률이 충분히 작을 때만 수렴이 보장된다. 두 클래스를 선형 결졍 경계로 나눌 수 없다면 훈련 데이터셋을 반복할 최대 횟수<sup>Epoch</sup>를 지정하고 
분류 허용 오차를 지정할 수 있다. 그렇지 않으면 퍼셉트론은 가중치 업데이트를 멈추지 않는다.

## 파이썬으로 퍼셉트론 학습 알고리즘 구현
***

### 객체 지향 퍼셉트론 API
***
> <i class="fas fa-info-circle"></i> NOTE
> 
> 파이썬의 과학 라이브러리에 익숙하지 않거나 기억을 되살리고 싶다면 다음 자료를 참고
> 
> [NumPy](https://sebastianraschka.com/pdf/books/dlb/appendix_f_numpy-intro.pdf){:target="_blank"},
> [Pandas](https://pandas.pydata.org/pandas-docs/stable/10min.html){:target="_blank"},
> [Matplotlib](http://matplotlib.org/users/beginner.html){:target="_blank"}

Perceptron 객체를 초기화한 후 fit 메소드로 데이터에서 학습하고, 별도의 predict 메소드로 예측을 만든다. 객체 초기화 과정에서 생성하지 않고 다른 메소드를 호출하여 만든 속성은 밑줄(_)을 
추가한다.

[^1]: 단위 계단 함수는 𝑧 ≥ 0일 때 1, 그렇지 않으면 0을 반환하는 함수
[^2]: 환원주의는 복잡하고 추상적인 개념을 더 단순한 요소로 명확하게 정의할 수 있다는 믿음, 예를 들어 생물의 어떤 현상을 물리적, 화학적으로 설명할 수 있다는 주장
[^3]: 퍼셉트론 학습 규치과 경사 하강법의 가중치 업데이트 식의 부호가 다르게 표현되는 경우가 있다. 𝑤<sub>𝑗</sub> := 𝑤<sub>𝑗</sub> - ∆𝑤<sub>𝑗</sub>와 ∆𝑤<sub>𝑗</sub> := ƞ(𝑦<sup class="non-color">❨𝑖❩</sup> - 𝑦<sup class="non-color">❨𝑖❩</sup>)𝑥<sub>𝑗</sub><sup class="non-color left">❨𝑖❩</sup>처럼 쓴다. 부호 위치가 바뀌었을 뿐 전체 식이 의미하는 바는 같다.
[^4]: 일반적으로 0.0에서 0.1 사이 실수
