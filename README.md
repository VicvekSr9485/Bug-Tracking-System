# 🐞 Mini Jira - Bug Tracking System

A simplified Jira-like issue and project tracking tool built with a full-stack architecture.

---

## 🔧 Tech Stack Overview

### Backend (Spring Boot + PostgreSQL)
- User authentication via JWT
- Role-based access for API endpoints
- Entity management for Users, Projects, and Issues
- DTOs to avoid cyclic references
- Tested with Postman, ready for Swagger/OpenAPI

See [`BACKEND_OVERVIEW.md`](BACKEND_OVERVIEW.md) for architecture details and setup guide.  
See [`API_DOCUMENTATION.md`](API_DOCUMENTATION.md) for full endpoint reference.

---

### Frontend (Coming Soon)
- Planned: React
- Features will include:
  - JWT-based login and protected routes
  - Project and issue dashboards
  - Create/update/delete operations with live API connection

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/VicvekSr9485/Bug-Tracking-System.git
cd Bug-Tracking-System

# Run backend
./mvnw spring-boot:run
