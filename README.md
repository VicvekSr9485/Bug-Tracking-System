# 🐞 Bug Tracking System

A simplified Jira-like issue and project tracking tool built with a full‑stack architecture.

## 🔧 Tech Stack

**Backend**  
- **Spring Boot**, **Spring Security**, **JWT**, **Hibernate**  
- **PostgreSQL**  
- REST endpoints: `/api/projects`, `/api/issues`, `/api/users`, `/auth/login`, `/auth/register`

**Frontend**  
- **React**, **Tailwind CSS**, **Axios**, **Flowbite**  
- JWT authentication with protected routes and dashboards

---

## 🚀 Getting Started

### 🔀 Clone the repository
```bash
git clone https://github.com/VicvekSr9485/Bug-Tracking-System.git
cd Bug-Tracking-System
```

---

### 💠 Backend Setup

1. **Prerequisites**
   - Java 17+ (or Java 21)
   - Maven
   - Running PostgreSQL instance

2. **Configure PostgreSQL**
   ```sql
   CREATE DATABASE issue_tracker_db;
   CREATE USER tracker_user WITH ENCRYPTED PASSWORD 'yourpassword';
   GRANT ALL PRIVILEGES ON DATABASE issue_tracker_db TO tracker_user;
   ```
3. **Set environment variables** (Linux/Mac):
   ```bash
   export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/issue_tracker_db
   export SPRING_DATASOURCE_USERNAME=tracker_user
   export SPRING_DATASOURCE_PASSWORD=yourpassword
   ```
4. **Run the backend**:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   Default port: **8080**

5. **Test the API**
   Use Postman or any API client to send a login request:
   ```http
   POST http://localhost:8080/auth/login
   Content-Type: application/json

   {
     "username": "your_username",
     "password": "your_password"
   }
   ```
   Expected response: `200 OK` with a JWT token in the response body.

---

### 🌐 Frontend Setup

1. **Prerequisites**
   - Node.js 16+ and npm

2. **Install and run**:
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The React app launches at: **http://localhost:5173**

3. **Login/Register**
   - Use the form to sign up or log in.
   - Frontend communicates with backend at `http://localhost:8080` using **Axios** and **JWT**.

---

## ✅ Test Cases / Manual Scenarios

1. **User Registration**
   - Action: Click the **Register** button with valid email, username & password  
   - Expected: User is created and redirected to the login screen

2. **Login Flow**
   - Action: Log in with correct credentials  
   - Expected: Redirect to dashboard; JWT stored in browser

3. **Create a Project**
   - Action: Click “Create Project” and submit form  
   - Expected: New project appears in dashboard list

4. **Raise an Issue**
   - Action: Within a project, click “New Issue”, add details, and submit  
   - Expected: Issue is listed under the project view

5. **Unauthorized Access**
   - Action: Access `/dashboard` without login  
   - Expected: Redirect to login page (protected route check)

---

## 📄 Docs & Architecture

- 🔍 Detailed backend architecture: [BACKEND_OVERVIEW.md](backend/BACKEND_OVERVIEW.md)
- 📜 API specification: [API_DOCUMENTATION.md](backend/API_DOCUMENTATION.md)

---

## ✅ Key Takeaways

- Fully-functional issue tracker with JWT-based authentication
- Clean React UI; secure Spring Boot backend

---

## 👥 Contributing

Contributions are welcome!  
1. Fork the project  
2. Create a feature branch: `git checkout -b feature/X`  
3. Commit your changes  
4. Push: `git push origin feature/X`  
5. Open a pull request
