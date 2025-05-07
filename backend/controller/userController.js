import prisma from '../DB/db.config.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Role-based login
export const login = async (req, res) => {
  const { username, password, role } = req.body;
  console.log('Use');
  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    console.log('User');
    // Check role
    if (user.role !== role) {
      return res.status(403).json({ error: `Unauthorized: Not a ${role}` });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate token
    const token = jwt.sign(
      { username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    console.log('User:', user);
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    console.log('Token:', token);
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};


//Admin : create doctor or staff
export const createUser = async (req, res) => {
  const { username, password, role } = req.body;

  
  console.log('Received request body:', req.body);
  // Validate role
  if (!['doctor', 'staff', 'admin' , 'patient'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role. Allowed: doctor, staff, admin' });
  }

  try {
    // Check if username already exists
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    // Create new user (storing password in plaintext, NOT RECOMMENDED)
    const newUser = await prisma.user.create({
      data: { username, password, role },
    });

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error); // Log the error
    return res.status(500).json({ error: error.message });
  }
};