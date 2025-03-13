# School Management System - Backend

This is the backend service for the School Management System, built using **Node.js**, **Express.js**, and **MySQL**. It provides APIs to add and list schools with their geographical locations.

## 🚀 Features
- Add a new school with name, address, latitude, and longitude.
- Retrieve a list of schools sorted by distance from a given location.

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Deployment:** Render

## 📌 API Endpoints

### 1️⃣ Add a School
- **Endpoint:** `POST /api/addSchool`

 ### 1️⃣ Get School
- **Endpoint:** `GET /api/listSchools`

- ## Installation & Setup

Follow these steps to set up the project locally:

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/school-management-backend.git
   cd school-management-backend

2. **Install dependencies**
   ```sh
      npm install
3. **Start the server**
   ```sh
    npm start

## 🚀 Deployment

This project is deployed on Render. You can access the live APIs at:

- **Add School API:** [`POST https://school-management-system-3iad.onrender.com/api/addSchool`](https://school-management-system-3iad.onrender.com/api/addSchool)
- **List Schools API:** [`GET https://school-management-system-3iad.onrender.com/api/listSchools?latitude=40.7128&longitude=-74.0060`](https://school-management-system-3iad.onrender.com/api/listSchools?latitude=40.7128&longitude=-74.0060)
   
 
