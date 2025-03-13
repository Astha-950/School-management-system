const pool = require("../config/db");

const SchoolModel = {
   
  getAllSchools: async () => {
    try {
      const sql = "SELECT * FROM schools";
      const [results] = await pool.execute(sql);
      return results;
    } catch (err) {
      throw err;
    }
  },

   
  getSchoolByAddress: async (address) => {
    try {
      const sql = "SELECT * FROM schools WHERE LOWER(address) = LOWER(?) LIMIT 1";
      const [results] = await pool.execute(sql, [address]);
      return results.length > 0 ? results[0] : null;
    } catch (err) {
      throw err;
    }
  },

 
  addSchool: async (name, address, latitude, longitude) => {
    try {
      const sql =
        "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
      const [result] = await pool.execute(sql, [name, address, latitude, longitude]);
      return result;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = SchoolModel;
