# 📊 Finance Dashboard Backend

## 🚀 Overview
This project is a backend system for a **Finance Dashboard** that manages financial records and provides aggregated insights for visualization.

The system follows a **single-organization model**, where financial data is centrally managed and accessed by users based on their roles.

---

## 🧠 Architecture
The backend follows a **modular and scalable architecture**:

- **Controllers** → Handle HTTP requests and responses  
- **Services** → Contain business logic and validations  
- **Models** → Manage database queries  
- **Middleware** → Handle authentication and authorization  

This ensures **clean, maintainable, and scalable code**.

---

## 👥 User Roles & Access Control

| Role      | Permissions |
|----------|------------|
| **Admin**   | Full access (CRUD operations) |
| **Analyst** | View analytics + records |
| **Viewer**  | Read-only access |

🔐 Access is enforced using authentication & authorization middleware.

---

## 💰 Financial Records

Each record contains:

- `amount`
- `type` (`income` / `expense`)
- `category`
- `date`
- `notes` (optional)

---

## ⚙️ Features

### 👤 User Management
- Create users  
- View users  
- Update users  
- Delete users  
- JWT-based authentication  

### 💼 Record Management
- Create records (**Admin only**)  
- View records (**All roles**)  
- Update records (**Admin only**)  
- Delete records (**Admin only**)  

**Filters:**
- Type  
- Category  
- Date range  

---

### 📊 Dashboard Analytics
- Total Income  
- Total Expenses  
- Net Balance  
- Category-wise breakdown  
- Monthly trends  
- Recent transactions  

---

## 🔐 Authentication & Security
- JWT Authentication  
- Protected routes  
- Role-based authorization (RBAC)  
- Environment variables (`.env`)  
- Input validation  

---

## 🗄️ Database
- **MySQL (Relational DB)**
- Optimized queries using:
  - `SUM`
  - `GROUP BY`
  - `CASE`

---

## 📦 API Endpoints

### 🔑 Auth

POST /api/auth/login


### 💰 Records

POST /api/records
GET /api/records
PUT /api/records/:id
DELETE /api/records/:id


### 📊 Dashboard

GET /api/dashboard


---

## 🧪 Validation & Error Handling

Example response:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
Proper HTTP status codes
Consistent API structure
Graceful error handling
🛠️ Tech Stack
Node.js
Express.js
MySQL
JWT (jsonwebtoken)
Middleware: CORS, Morgan, Helmet
⚙️ Setup Instructions
1. Clone Repo
git clone https://github.com/jevita-riya/finance-dashboard-backend.git
cd finance-dashboard-backend
2. Install Dependencies
npm install
3. Configure Environment

Create .env file:

PORT=5000
JWT_SECRET=your_secret_key

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=finance
🗄️ Database Setup
Step 1: Login to MySQL
mysql -u root -p
Step 2: Create Database
CREATE DATABASE finance;
USE finance;
Step 3: Create Tables
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'analyst', 'viewer') DEFAULT 'viewer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  type ENUM('income', 'expense') NOT NULL,
  category VARCHAR(100),
  date DATE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Step 4: Insert Admin (Optional)
INSERT INTO users (name, email, password, role)
VALUES ('Admin', 'admin@example.com', 'hashed_password', 'admin');

⚠️ Use bcrypt hashed password

▶️ Run Server
npm start

Server:

http://localhost:5000
📌 Design Decisions
Centralized data model
RBAC over user-based isolation
Service layer pattern
Optimized SQL queries
🚀 Future Enhancements
Pagination
Advanced filters
Soft delete
Swagger docs
Testing
Rate limiting
📣 Conclusion

This project demonstrates:

Clean architecture
RBAC implementation
Secure authentication
Efficient data handling
Scalable backend design