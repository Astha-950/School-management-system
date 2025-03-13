// const mysql = require("mysql2/promise");
// require("dotenv").config();

// const pool = mysql.createPool({
//   host: "tramway.proxy.rlwy.net",  // Use Railway's proxy host
//   port: 32935,                      // Use Railway's assigned port
//   user: process.env.DB_USER,         // Your MySQL username
//   password: process.env.DB_PASSWORD, // Your MySQL password
//   database: process.env.DB_NAME,     // Your MySQL database name
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// (async () => {
//   try {
//     const connection = await pool.getConnection();
//     console.log("✅ MySQL Connected Successfully!");
//     connection.release();
//   } catch (err) {
//     console.error("❌ MySQL Connection Failed:", err.message);
//   }
// })();

// module.exports = pool;
// // ucWKinwWAESMBJWFShGrHQniPxTIaYBm






const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,  // Use Railway's proxy host
  port: process.env.MYSQLPORT,                      // Use Railway's assigned port
  user: process.env.MYSQLUSER,         // Your MySQL username
  password: process.env.MYSQLPASSWORD, // Your MySQL password
  database: process.env.MYSQLDATABASE,     // Your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log(" MySQL Connected Successfully!");
    connection.release();
  } catch (err) {
    console.error(" MySQL Connection Failed:", err.message);
  }
})();

module.exports = pool;
// ucWKinwWAESMBJWFShGrHQniPxTIaYBm