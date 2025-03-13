const SchoolModel = require("../models/schoolModel");

const isValidLatLon = (lat, lon) => {
  return (
    typeof lat === "number" &&
    typeof lon === "number" &&
    !isNaN(lat) &&
    !isNaN(lon) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180
  );
};

const addSchool = async (req, res) => {
  try {
    let { name, address, latitude, longitude } = req.body;

    // Trim values
    name = name?.trim();
    address = address?.trim();

    // Validate required fields
    if (!name || !address || latitude === undefined || longitude === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate School Name
    if (!/^[a-zA-Z\s'&-]{2,255}$/.test(name)) {
      return res.status(400).json({
        message: "Invalid school name format. Only letters, spaces, and special characters like ' & - are allowed.",
      });
    }

    // Validate Address
    if (!/^[a-zA-Z0-9\s,.-]{5,255}$/.test(address)) {
      return res.status(400).json({
        message: "Invalid address format. Only letters, numbers, spaces, commas, periods, and dashes are allowed.",
      });
    }

    // Parse and Validate Latitude & Longitude
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    console.log("Latitude:", lat, "Longitude:", lon);

    if (!isValidLatLon(lat, lon)) {
      return res.status(400).json({ message: "Invalid latitude or longitude" });
    }

    // Check for Duplicate School by Address
    const existingSchool = await SchoolModel.getSchoolByAddress(address);

    if (existingSchool) {
      return res.status(400).json({
        message: "A school with this address already exists.",
      });
    }

    // Insert into Database
    const result = await SchoolModel.addSchool(name, address, lat, lon);

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
