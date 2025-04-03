import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from './routes/userRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import staffRoutes from './routes/staffRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));  // Move static file serving above routes

// Routes
app.use('/api/users', userRoutes);  
app.use('/api/doctor', doctorRoutes);
app.use('/api/staff', staffRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
