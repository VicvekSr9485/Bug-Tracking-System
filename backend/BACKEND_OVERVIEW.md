# 🛠️ BugTracker Backend Overview

A simplified issue tracking system inspired by Jira, built with **Spring Boot**, **PostgreSQL**, and **JWT authentication**. This document summarizes the backend development process, architectural decisions, lessons learned, and how to work with the codebase.

---

## 📦 Tech Stack

- **Language:** Java 17+
- **Framework:** Spring Boot 3.5+
- **Database:** PostgreSQL 14
- **ORM:** Spring Data JPA + Hibernate
- **Security:** Spring Security + JWT
- **Build Tool:** Maven
- **Testing:** JUnit (basic context test)
- **DTO Handling:** Custom DTOs for all API responses

---

## 🧱 Architecture

- Each controller uses **DTOs** to decouple domain models from API contracts.
- `JwtAuthFilter` inspects tokens and sets the Spring security context.
- `JwtUtil` handles token creation, expiration, and validation logic.

---

## ✅ What Worked

### ✔ DTO Layering
- Solved cyclic serialization issues (`Issue → User → Issue → ...`)
- Allowed shaping lightweight, client-friendly JSON responses

### ✔ JWT Security
- Users log in via `/auth/login`
- Token must be attached to the `Authorization: Bearer <token>` header
- Stateless design; no server-side sessions required

### ✔ Sample Data Bootstrapping
- `CommandLineRunner` initializes demo users, projects, and issues
- Helps quickly test the API with Postman or curl

### ✔ Entity Modeling
- Well-structured mappings between `User`, `Project`, and `Issue`
- JPA relationships (`@ManyToOne`, `@OneToMany`) worked reliably

---

## ❌ What Didn’t Work (Initially)

### ❌ Entity Named `User`
- Caused Postgres syntax errors (`user` is a reserved keyword)
- ✅ Solved with: `@Table(name = "app_user")`

### ❌ Duplicate Demo Data
- Occurred on reruns of `CommandLineRunner`
- ✅ Solved by clearing or checking before inserting demo entries

### ❌ Infinite JSON Recursion
- Triggered when returning JPA entities with nested relationships
- ✅ Resolved by returning **DTOs** instead of full entities

### ❌ Silent Failures for JWT Errors
- Initial filter ignored missing/invalid tokens
- ✅ Now returns clear `401`/`403` JSON messages using `HttpServletResponse`

---