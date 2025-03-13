const SchoolModel = require("../models/schoolModel");
const haversineDistance = require("../utils/distance");

const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    // Fetch all schools from the database
    const schools = await SchoolModel.getAllSchools();

    
    if (!schools || schools.length === 0) {
      return res.status(404).json({ message: "No schools found" });
    }

    // Calculate distances and sort
    const sortedSchools = schools.map((school) => ({
      ...school,
      distance: haversineDistance(userLat, userLon, parseFloat(school.latitude), parseFloat(school.longitude))
    })).sort((a, b) => a.distance - b.distance);

    return res.status(200).json(sortedSchools);
  } catch (error) {
    console.error("Error fetching schools:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { listSchools };
