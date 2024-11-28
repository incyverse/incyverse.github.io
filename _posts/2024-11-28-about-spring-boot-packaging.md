---
type: post
title: Spring Boot의 Packaging에 대해서 알아보자
description:
author: anthony
date: 2024-11-28 17:55:02 +0900
cover: assets/images/post/spring-boot-1.webp
categories: [ development, programing, framework, spring boot ]
tags: [ jar, war, gradle, kotlin ]
navigation: true
featured: false
math: false
mermaid: false
---

# JAR and WAR

Spring Boot에서 **JAR**<sup>Java Archive</sup>와 **WAR**<sup>Web Application Archive</sup> 중 무엇을 사용할지는 애플리케이션의
**배포 환경**과 **요구사항**에 따라 다르다. 새로운 프로젝트나 클라우드 네이티브 애플리케이션을 개발하는 경우라면 JAR로 시작하는 것이 좋으며, 기존
인프라와의 통합이 중요한 경우라면 WAR를 고려해야 한다. 유연하게 상황에 맞게 사용하자.

## JAR

Spring Boot의 기본 패키징 형태는 JAR다.

____

### 장점

#### 독립 실행 가능

- 내장 웹 서버(Tomcat, Jetty 등)가 포함되어 있어 별도의 애플리케니션 서버가 필요하지 않다.
- java -jar 명령으로 간편하게 실행 가능하다.

#### 배포 간소화

- JAR 파일 하나로 모든 의존성을 포함하므로 배포가 간단하다.
- DevOps 환경이나 컨테이너 기반 배포(Docker, Kubernetes)에 적합하다.

#### Spring Boot 특화

- Spring Boot의 철학인 **"빠른 개발 및 독립 배포"**에 잘 맞는다.
- 애플리케이션을 빠르게 개발하고 실행할 수 있다.

### 단점

#### 유연성 제한

- 기존의 애플리케이션 서버(예: 기존 Tomcat 설치 환경)와 통합이 어렵다.
- 특정 웹 서버 커스터마이징이 복잡할 수 있다.

#### 운영 환경 제약

- 애플리케이션 서버를 사용하는 기존 인프라에서는 적합하지 않을 수 있다.

## WAR

WAR는 전통적인 Java EE 방식의 웹 애플리케이션 배포 형태다.

____

### 장점

#### 기존 환경과의 호환성

- 외부 애플리케이션 서버(Tomcat, JBoss, WebLogic 등)가 있는 환경에 적합하다.
- 여러 애플리케이션을 동일한 서버에서 실행할 수 있다.

#### 확장성 및 관리 용이성

- 기업 환경에서 관리되는 중앙화된 애플리케이션 서버에 배포하기 쉽다.
- 서버 설정을 통해 고급 기능 사용 가능하다.

#### 전통적인 Java 애플리케이션 통합

- Spring Boot를 기존 Java EE 애플리케이션 환경에 통합할 때 유용하다.

### 단점

#### 복잡한 배포

- 애플리케이션 서버 설정과 배포 과정이 추가로 필요하다.
- 서버에 따라 설정 방식이 다를 수 있어 관리가 번거로울 수 있다.

#### Spring Boot의 장점 제한

- 내장 서버 기능을 사용하지 않으므로 Spring Boot의 간소화된 배포 철학과 멀어질 수 있다.

## 언제 JAR을 선택해야 하나?

____

- **컨테이너 환경**(Docker, Kubernetes)에서 배포하는 경우
- **클라우드 네이티브 애플리케이션**을 개발하는 경우
- 독립적으로 실행되는 **마이크로서비스**를 구축하는 경우
- 개발 및 배포를 빠르고 간소화하고 싶은 경우

## 언제 WAR을 선택해야 하나?

____

- 기존 애플리케이션 서버와 통합해야 하는 경우
- **기업 환경**에서 이미 Tomcat, JBoss, WebLogic 등의 서버를 운영 중인 경우
- 하나의 서버에서 여러 애플리케이션을 관리하는 경우
- 조직의 정책상 애플리케이션 서버 기반 배포가 요구되는 경우


# 패키징 변경하기

Spring Boot에서 **JAR로 시작한 프로젝트를 WAR로 변경**도 가능하다. Gradle에서 WAR로 변경해 보자.

## Build Type을 JAR → WAR 변경

build.gradle.kts 파일에서 패키징 타입을 WAR로 변경해야 한다. 기본적으로 Spring Boot는 JAR 패키징이지만 WAR도 지원한다.

____

**build.gradle.kts**

```kotlin
plugins {
    id("org.springframework.boot") version "3.4.0"
    id("io.spring.dependency-management") version "1.1.6"
    id("war") // WAR 플러그인 활성화
    kotlin("jvm") version "1.9.25"
    kotlin("plugin.spring") version "1.9.25"
    kotlin("plugin.jpa") version "1.9.25"
}

tasks.getByName<Jar>("bootJar") {
    enabled = false // bootJar 비활성화
}

tasks.getByName<War>("war") {
    enabled = true // WAR 활성화
}
```

## 내장 톰캣 비활성화

Spring Boot JAR에서는 내장 톰캣을 사용하지만, WAR로 변경하면 외부 톰캣이나 WAS에서 실행되므로 톰캣을 provided로 설정해야 한다.

____

**build.gradle.kts**

```kotlin
dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    providedRuntime("org.springframework.boot:spring-boot-starter-tomcat") // 톰캣 의존성 설정
}
```

## SpringBootServletInitializer 추가

WAR로 패키징된 애플리케이션은 서블릿 컨테이너에서 실행되기 때문에 SpringBootServletInitializer를 상속받아 초기화 설정을 해야 한다.

____

**Application.kt**

```kotlin
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer

@SpringBootApplication
class Application : SpringBootServletInitializer() {

    override fun configure(builder: SpringApplicationBuilder): SpringApplicationBuilder {
        return builder.sources(Application::class.java)
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
```

## 빌드 및 배포

Gradle을 사용해 WAR 파일을 빌드하고 애플리케이션 서버에 배포한다.

____

### WAR 파일 빌드

```bash
./gradlew clean build
```

빌드 결과는 build/libs 폴더에 project-name.war 파일로 생성된다.

### WAR 파일 배포

1. WAR 파일을 애플리케이션 서버(Tomcat, JBoss, WebLogic 등)의 webapps 디렉토리에 복사
2. 서버를 재시작하여 애플리케이션 실행

## 필요한 추가 설정

____

- WAR로 변경 시 기존 JAR에서 사용하는 내장 서버 설정(server.port 등)을 제거하거나 외부 WAS 환경에 맞게 수정해야 할 수 있다.
- WAR 배포 후 외부 WAS와의 의존성 충돌 가능성을 테스트

## 결론

____

Gradle로 구성된 Spring Boot 프로젝트에서 JAR을 WAR로 변경하는 작업은 간단히 플러그인 추가와 의존성 설정 변경, 그리고 SpringBootServletInitializer
클래스를 추가하는 것으로 가능하다. WAR로 패키징한 뒤에는 애플리케이션 서버 환경에 맞게 추가 설정과 테스트를 진행하는 것이 중요하다.
