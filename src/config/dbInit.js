const pool = require("./db");

const createTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
    latitude FLOAT(10, 8) NOT NULL,
longitude FLOAT(11, 8) NOT NULL

    )
  `;

  try {
    await pool.execute(sql);
    console.log("Table 'schools' created (if not exists).");
  } catch (error) {
    console.error("Error creating table:", error.message);
  }
};

createTable();
