const mysql = require("mysql2/promise");
const db = require("../db/dbConfig"); 


const seedAdmin = async () => {
  try {
    console.log("🚀 Seeding admin...");

    // 1. Check if admin already exists
    const [rows] = await db.query(
      "SELECT * FROM users WHERE role = 'admin'"
    );

    if (rows.length > 0) {
      console.log("⚠️ Admin already exists. Skipping...");
      process.exit();
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // 3. Insert admin
    await db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      ["Admin", "admin@gmail.com", hashedPassword, "admin"]
    );

    console.log("✅ Admin created successfully!");
    console.log("📧 Email: admin@gmail.com");
    console.log("🔑 Password: admin123");

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();