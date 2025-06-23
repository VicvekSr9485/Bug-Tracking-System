
# SPEC-7: Frontend Application (BugTrackr)

## Background

The frontend application for BugTrackr was built using React, TypeScript, and Tailwind CSS. It interacts with the Spring Boot backend API and provides a user interface for user authentication, project and issue management. The goal was to create a modern, responsive, and secure UI that aligns with the UX expectations of a bug tracking system.

## Requirements

**Functional Requirements:**

- **[Must]** Allow users to register and log in securely using JWT authentication.
- **[Must]** Provide dashboard metrics including project and issue stats.
- **[Must]** Allow users to create, read, and view details of issues and projects.
- **[Must]** Support protected routes for authenticated users only.
- **[Should]** Include status and priority filters for issues.
- **[Could]** Add user dropdown with profile info and logout.
- **[Could]** Display error states, spinners, and success toasts.
- **[Won't]** Include full admin panel or role-based permissions in MVP.

## Architecture

### Stack & Tooling

- **React (Vite)** with TypeScript for UI and type safety.
- **TailwindCSS** and **Flowbite** for styling and components.
- **Axios** for API interactions with the backend.
- **React Router** for routing and navigation.
- **JWT Decoding** for extracting user info from tokens.
- **LocalStorage** for session persistence.

### Folder Structure

```
src/
├── api/axios.ts              // Axios setup with token interceptor
├── context/AuthContext.tsx   // Global auth state using Context API
├── pages/                    // Individual pages (Dashboard, Login, etc.)
├── types/                    // Shared TypeScript interfaces
├── App.tsx                   // Route configuration and guards
```

## Features & Implementation Details

- **Authentication Context**
  - Stores JWT in localStorage.
  - Parses token to extract user info on app load.
  - Guards routes using a custom `<PrivateRoute>` logic in `App.tsx`.

- **Dashboard Page**
  - Displays project/issue stats.
  - Pulls recent issues with filtering.
  - Includes logout and navigation.

- **Project & Issue Management**
  - CRUD operations for both entities.
  - Auto-refresh after creation.
  - Detail pages fetch by ID and render additional metadata.

- **Form Validation & Feedback**
  - Required field checks on inputs.
  - Graceful error messages for API/network issues.
  - Loading spinners and empty states.

- **CORS & Auth Errors**
  - Handled globally with Axios interceptors.
  - Shows login prompt if token expires or becomes invalid.

## Lessons Learned

### What Worked Well

- Using `AuthContext` to globally manage session state and protect routes.
- Axios interceptor simplified attaching token headers.
- Flowbite accelerated UI layout with pre-built components.
- Structuring the app with `types/` folder improved maintainability.

### Challenges Encountered

- JWTs originally did not include user email, requiring backend modification.
- Session expiration was not clearly communicated to users until error handling improved.
- Some backend routes were missing proper CORS headers initially.
- Dynamic routing required careful handling of null/undefined states (`useParams`, async calls).

### Improvements for the Future

- Add refresh token handling for longer sessions.
- Centralize toast/notification system.
- Add role-based access control for admin features.
- Unit testing with Vitest or Jest for form and context logic.

## Conclusion

This frontend MVP demonstrates a complete bug tracking UI connected to a secured backend. The use of JWT, Context API, and modular page structure ensures extensibility and production readiness.
