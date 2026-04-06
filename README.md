📊 Finance Dashboard Backend
🚀 Overview

This project is a backend system for a Finance Dashboard that manages financial records and provides aggregated insights for visualization.

The system follows a single-organization model, where financial data is centrally managed and accessed by users based on their roles.

🧠 Architecture

The backend is built using a modular and scalable architecture:

Controllers → Handle HTTP requests and responses
Services → Contain business logic and validations
Models → Manage database queries
Middleware → Handle authentication and authorization

This separation ensures maintainability, scalability, and clean code structure.

👥 User Roles & Access Control

The system uses Role-Based Access Control (RBAC):

Role	Permissions
Admin	Full access: create, update, delete records
Analyst	View dashboard analytics and view financial records
Viewer	View financial records (read-only)

🔐 Access is enforced using authentication and authorization middleware.

💰 Financial Records

Each record includes:

amount (number)
type (income or expense)
category (string)
date (date)
notes (optional)
⚙️ Features
✅ User Management
Create users
View users
Update users
Delete user
Secure authentication using JWT
✅ Record Management
Create records (Admin only)
View records (Admin, Analyst, Viewer)
Update records (Admin only)
Delete records (Admin only)
Filter records by:
Type
Category
Date range
📊 Dashboard Analytics

Provides aggregated data for frontend dashboards:

Total Income
Total Expenses
Net Balance
Category-wise breakdown (income vs expense)
Monthly trends (income vs expense)
Recent transactions
🔐 Authentication & Security
JWT-based authentication
Protected routes using middleware
Role-based authorization
Secure environment variables (.env)
Input validation for data integrity
🗄️ Database
Relational database (MySQL)
Structured schema for financial records
Optimized queries using SQL aggregations (SUM, GROUP BY, CASE)
📦 API Endpoints
🔑 Authentication
POST /api/auth/login → User login
💰 Records
POST /api/records → Create record (Admin)
GET /api/records → Get records (Admin, Analyst, Viewer)
PUT /api/records/:id → Update record (Admin)
DELETE /api/records/:id → Delete record (Admin)
📊 Dashboard
GET /api/dashboard → Get summary analytics (Admin, Analyst)
🧪 Validation & Error Handling
Input validation for required fields and formats
Proper HTTP status codes (200, 201, 400, 401, 403, 404, 500)
Consistent API response structure:
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
Graceful error handling for invalid input and missing resources
🛠️ Tech Stack
Node.js
Express.js
MySQL
JWT (jsonwebtoken)
Middleware: CORS, Morgan, Helmet
▶️ Setup Instructions
1. Clone the repository
git clone "https://github.com/jevita-riya/finance-dashboard-backend.git"
cd finance-dashboard-backend
2. Install dependencies
npm install
3. Configure environment variables

Create a .env file:

PORT=5000
JWT_SECRET=your_secret_key

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=""
DB_NAME=finance
4. Database Setup

Make sure MySQL is installed and running, then:

Step 1: Login to MySQL
mysql -u root -p
Step 2: Create Database
CREATE DATABASE finance;
USE finance;
Step 3: Create Tables
-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'analyst', 'viewer') DEFAULT 'viewer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Financial Records Table
CREATE TABLE records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  type ENUM('income', 'expense') NOT NULL,
  category VARCHAR(100),
  date DATE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Step 4: (Optional) Insert Sample Admin User
INSERT INTO users (name, email, password, role)
VALUES ('Admin User', 'admin@example.com', 'hashed_password_here', 'admin');

⚠️ Replace hashed_password_here with a properly hashed password using bcrypt.

5. Run the server
npm start

Server will run at:

http://localhost:5000
📌 Design Decisions
Centralized Data Model
Financial data belongs to the organization rather than individual users.
RBAC over Data Isolation
Access is controlled using roles instead of user-level ownership.
Service Layer Pattern
Business logic is separated from controllers for better scalability and maintainability.
Optimized Queries
Used SQL aggregation functions for efficient dashboard calculations.
🚀 Future Enhancements
Pagination for large datasets
Advanced search and filtering
Soft delete functionality
API documentation using Swagger
Unit and integration testing
Rate limiting for security
📣 Conclusion

This project demonstrates:

Clean backend architecture
Role-based access control (RBAC)
Input validation and error handling
Efficient database querying and aggregation
Scalable and maintainable design