
# 📘 API_DOCUMENTATION.md

This document provides a full specification of the available API endpoints in the BugTracker backend, including paths, methods, descriptions, expected inputs, and sample responses.

---

## 🔐 Authentication

### ✅ Register

**Endpoint:** `POST /auth/register`

Registers a new user with a username, email, and password.

**Request Body:**
```json
{
  "username": "alice",
  "email": "alice@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "User registered successfully"
}
```

---

### ✅ Login

**Endpoint:** `POST /auth/login`

Authenticates the user and returns a JWT token.

**Request Body:**
```json
{
  "username": "alice",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

---

## 👥 Users

### 🔒 Get All Users

**Endpoint:** `GET /api/users`  
**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
[
  {
    "id": 1,
    "username": "alice",
    "email": "alice@example.com"
  }
]
```

---

## 📁 Projects

### 🔒 Get All Projects

**Endpoint:** `GET /api/projects`  
**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Bug Tracker Core",
    "description": "Main project for issue tracking"
  }
]
```

### 🔒 Create a Project

**Endpoint:** `POST /api/projects`  
**Request Body:**
```json
{
  "name": "New Project",
  "description": "Short project description"
}
```

**Response:**
```json
{
  "id": 2,
  "name": "New Project",
  "description": "Short project description"
}
```

### 🔒 Update a Project

**Endpoint:** `PUT /api/projects/{id}`  
**Request Body:**
```json
{
  "name": "Updated Project",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "id": 2,
  "name": "Updated Project",
  "description": "Updated description"
}
```

### 🔒 Delete a Project

**Endpoint:** `DELETE /api/projects/{id}`

**Response:** HTTP 204 No Content

---

## 🐛 Issues

### 🔒 Get All Issues

**Endpoint:** `GET /api/issues`  
**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Login not working",
    "description": "Users cannot log in with valid credentials.",
    "status": "Open",
    "priority": "High",
    "projectId": 1,
    "projectName": "Bug Tracker Core",
    "assigneeId": 1,
    "assigneeUsername": "alice"
  }
]
```

### 🔒 Create an Issue

**Endpoint:** `POST /api/issues`  
**Request Body:**
```json
{
  "title": "New Issue",
  "description": "Description here",
  "status": "Open",
  "priority": "Medium",
  "projectId": 1,
  "assigneeId": 1
}
```

**Response:**
```json
{
  "id": 2,
  "title": "New Issue",
  ...
}
```

### 🔒 Update an Issue

**Endpoint:** `PUT /api/issues/{id}`  
**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "status": "Resolved",
  "priority": "High",
  "projectId": 1,
  "assigneeId": 1
}
```

**Response:**
```json
{
  "id": 2,
  "title": "Updated Title",
  ...
}
```

### 🔒 Delete an Issue

**Endpoint:** `DELETE /api/issues/{id}`

**Response:** HTTP 204 No Content

---

## ⚠️ Notes

- All `/api/**` endpoints require an **Authorization Bearer Token**
- JWT tokens are returned upon successful login and should be sent in every secured request
- Use Postman, curl, or Swagger UI to interact with these endpoints

---
