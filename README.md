# NestJS Educational Project Documentation - SO.25.R3.MEARN

This documentation serves as a guide for understanding, setting up, and extending the NestJS educational project used for teaching scalable backend development practices.

---

## 📦 Project Overview

This is a backend RESTful API project built with **NestJS**. It is structured to demonstrate best practices in API development, middleware usage, authentication, authorization, and database relationships.

---

## 🛠️ Setup Instructions

### Prerequisites

* Node.js (v18+ recommended)
* Git

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EyadAymanM/SO.25.R3.MEARN.git
   cd SO.25.R3.MEARN
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm run start:dev
   ```

---

## 📚 Topics Covered

This project is a hands-on walkthrough of essential and advanced NestJS concepts:

* Application architecture (Modules, Controllers, Services)
* Dependency Injection (DI)
* HTTP routing and handlers
* Middleware, Interceptors, and Pipes
* Exception Filters
* DTOs and Validation using `class-validator`
* Custom decorators
* JWT Authentication and Authorization
* Guards and Role-Based Access Control (RBAC)
* Soft deletes and filtering
* Pagination logic

---

## 🔌 API Endpoints Reference

### Auth Module

* `POST /auth/register` – Register a new user
* `POST /auth/login` – Authenticate user and issue JWT

### Users Module

* `GET /users` – List all users (admin-only)
* `GET /users/profile` – View authenticated user profile
* `PATCH /users/:id` – Update user info (admin or self)
* `DELETE /users/:id` – Soft delete user (admin)

---

## 🧰 Developer Tips

* Use `npm run start:dev` for hot-reload during development.
* Use `.env` for flexible configuration.
* Test endpoints with Postman/Insomnia.
* Guard protected routes using roles and permissions.

---

## 📎 License

This project is for educational use. You may fork, modify, and reuse it in learning or teaching contexts.

---

For questions or suggestions, feel free to open an issue or contact [Eyad Ayman](https://github.com/EyadAymanM).
