# Inventory Mini System

Simple full-stack application for managing inventory products.

The project demonstrates basic full-stack development skills: REST API, database integration, React UI, Docker setup, and error handling.

---

## 🚀 Tech Stack

### Backend
- Node.js (Express)
- TypeScript
- TypeORM
- PostgreSQL
- Docker

### Frontend
- React
- TypeScript
- Axios

### Database
- PostgreSQL

---

## 📦 Features

### ProductEntity Management
- View product list
- Create product
- Edit product
- Delete product
- Update product quantity
- View product status based on quantity

### ProductEntity Status Logic
- 0 → out_of_stock
- 1–5 → low_stock
- 6+ → in_stock

---

## ⚙️ Backend API

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /products | Get all products |
| GET | /products/:id | Get product by id |
| POST | /products | Create product |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

---

## 🗄️ Database

PostgreSQL is used as a persistent database.

### Table: products

- id (number)
- name (string)
- quantity (number)
- price (decimal)
- status (enum)
- createdAt (timestamp)

---

## 🐳 Docker Setup

The project runs using Docker Compose.


### Requirements:
- Docker
- Docker Compose
---

### Setup Environment Variables (.env):

Create a .env file inside the backend/ directory:

environment variables:

POSTGRES_USER=postgres

POSTGRES_PASSWORD=postgres

POSTGRES_DB=inventory_db

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/inventory_db

PORT=4000

---

### Run project:

```bash
docker compose up --build
```
or
```bash
npm run dev
```

### Services:

- backend-express → http://localhost:4000
- frontend → http://localhost:3000
- database → localhost:5432

---

### Run migrations:
```bash
docker compose exec backend-express npm run migration:generate
```
```bash
docker compose exec backend-express npm run migration:run
```
```bash
docker compose exec backend-express npm run seed
```
---
