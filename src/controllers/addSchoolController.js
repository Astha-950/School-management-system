const SchoolModel = require("../models/schoolModel");
const isValidCoordinates = require("is-valid-coordinates");

const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    // Validation of input fields  
    if (!name || !address || latitude === undefined || longitude === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

     
    if (!/^[a-zA-Z\s'&-]{2,255}$/.test(name.trim())) {
      return res.status(400).json({
        message: "Invalid school name format. Only letters, spaces, and special characters like ' & -",
      });
    }

    
    if (!/^[a-zA-Z0-9\s,.-]{5,255}$/.test(address.trim())) {
      return res.status(400).json({
        message: "Invalid address format. Only letters, numbers, spaces, commas, periods, and dashes",
      });
    }

    
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (!isValidCoordinates(lat, lon)) {
      return res.status(400).json({ message: "Invalid latitude or longitude" });
    }

    //  checking for duplicate entry 
    const existingSchool = await SchoolModel.getSchoolByAddress(address.trim());

    if (existingSchool) {
      return res.status(400).json({
        message: "A school with this address already exists.",
      });
    }

    //   inserting the new school into the database
    const result = await SchoolModel.addSchool(name.trim(), address.trim(), lat, lon);

    return res.status(201).json({
      message: "School added successfully",
      schoolId: result.insertId,
    });
  } catch (error) {
    console.error("Error adding school:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addSchool };
