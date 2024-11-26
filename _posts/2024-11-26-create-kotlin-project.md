---
type: post
title: Create a kotlin project
description:
author: anthony
date: 2024-11-26 09:22:01 +0900
cover: assets/images/post/kotlin.png
categories: [ ]
tags: [ ]
navigation: true
featured: false
math: false
mermaid: false
---

# Spring Initializr 사용

Spring Initializr는 Spring Boot 프로젝트 생성을 빠르고 간편하게 할 수 있는 도구다.

---

## 웹 UI를 사용한 생성

1. Spring Initializr 웹사이트 방문
2. 설정 입력
   - **Project**: Gradle - Kotlin
   - **Language**: Kotlin
   - **Spring Boot Version**: 최신 안정 버전 선택
   - **Dependencies**: 필요한 의존성을 추가 (Spring Web, Spring Data JPA, H2 Database 등)
   - **Group**: com.example
   - **Artifact**: my-kotlin-project
   - **Name**: MyKotlinProject
   - **Packaging**: WAR
   - **Java Version**: 프로젝트에 적합한 버전 선택
3. Generate 버튼 클릭

## IntelliJ IDEA에서 [Spring Initializr][initializr] 사용

1. `IntelliJ IDEA` 실행
2. New Project > Spring Intializr 선택
3. 위의 웹 UI와 동일한 설정을 입력
4. 프로젝트 생성 후 IntelliJ에서 바로 작업 시작

# CLI를 사용한 생성

Spring CLI를 사용하면 터미널에서 Spring Boot 프로젝트를 생성할 수 있다.

---

1. **Spring CLI 설치**: Spring CLI가 설치되어 있어야 한다. ([SDKMAN][sdkman]으로 설치)
```bash
sdk install springboot
```

2. 프로젝트 생성
```bash
spring init --dependencies=web,h2 --build=gradle --language=kotlin my-kotlin-project
```
- --dependencies: 필요한 의존성을 쉼표로 구분하여 입력
- --build: 빌드 도구를 Gradle로 설정
- --language: Kotlin 사용
- my-kotlin-project: 생성될 프로젝트 디렉토리 이름

3. 생성된 디렉토리로 이동
```bash
cd my-kotlin-project
```

# Gradle 설정 확인 및 수정

프로젝트 생성 후 Gradle 설정 파일(build.gradle.kts)을 확인하고 필요한 설정을 추가 또는 수정한다.

---

## 기본 build.gradle.kts 구조
```kotlin
plugins {
    id("org.springframework.boot") version "3.1.0" // 최신 버전 확인
    id("io.spring.dependency-management") version "1.1.0"
    kotlin("jvm") version "1.9.10" // Kotlin 버전 확인
    kotlin("plugin.spring") version "1.9.10"
}

group = "com.example"
version = 0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("com.h2database:h2")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<Test> {
   useJUnitPlatform()
}
```

## 프로젝트 실행

---

1. Gradle Wrapper 실행
```bash
./gradlew bootRun
```

2. 브라우저에서 확인
   - 기본적으로 http://localhost:8080에서 애플리케이션 실행

## 디렉토리 구조

Spring Initializr 또는 CLI로 생성한 프로젝트의 기본 디렉토리 구조는 다음과 같다.

---

```
my-kotlin-project
├── src
│   ├── main
│   │   ├── kotlin
│   │   │   └── com.example.mykotlinproject
│   │   │       └── MyKotlinProjectApplication.kt
│   │   └── resources
│   │       └── application.properties
│   └── test
│       └── kotlin
│           └── com.example.mykotlinproject
│               └── MyKotlinProjectApplicationTests.kt
├── build.gradle.kts
└── settings.gradle.kts
```

이제 프로젝트를 생성하고 원하는 기능을 개발하면 된다!

[initializr]: https://start.spring.io/
[sdkman]: https://sdkman.io/
