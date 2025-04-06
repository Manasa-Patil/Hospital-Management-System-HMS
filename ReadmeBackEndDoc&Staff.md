-- creating the admin credintials 
node prisma/seed.js


-- Step 1: Truncate the dependent table first
TRUNCATE TABLE "Doctor" RESTART IDENTITY CASCADE;

-- Step 2: Truncate the main table
TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;


-- staff 
POST: http://localhost:5000/api/staff/create
GET : http://localhost:5000/api/staff/getStaff/1
PUT : http://localhost:5000/api/staff/Putstaff/1
    - 'Content-Type: application/json`
    - `Authorization: Bearer <JWT_TOKEN>`

-- Doctor
POST: http://localhost:5000/api/doctor/createDoctor
GET : http://localhost:5000/api/doctor/getDoctor/1
PUT : http://localhost:5000/api/doctor/PutDoctor/1

  - `Authorization: Bearer <JWT_TOKEN>`
  - `Content-Type: multipart/form-data`


-- Attendence and Leave 
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

GET(to generate the reports based on the provided date) : http://localhost:5000/api/doctor/attendanceLeave/report?month=4&year=2025

PUT : http://localhost:5000/api/doctor/attendanceLeave/leave/3

POST :  http://localhost:5000/api/doctor/attendanceLeave/leave


Doctor Attendance (Check-in / Check-out)

POST : http://localhost:5000/api/doctor/attendanceLeave/checkin

POST: http://localhost:5000/api/doctor/attendanceLeave/checkout

GET : http://localhost:5000/api/doctor/attendanceLeave/:doctorId