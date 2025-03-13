const express = require("express");
const router = express.Router();
const { addSchool } = require("../controllers/addSchoolController");
const { listSchools } = require("../controllers/listSchoolsController");

router.post("/addSchool", addSchool);  
router.get("/listSchools", listSchools);  

module.exports = router;
// .gitignore   