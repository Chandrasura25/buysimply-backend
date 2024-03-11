const jwt = require('jsonwebtoken');
const Staff = require('../models/staff.model');
const staffData = require('../data/staffs.json');
const secret = process.env.JWT_SECRET;

function login(req, res) {
  const { email, password } = req.body;
  const user = staffData.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email, role: user.role }, secret, { expiresIn: '1h' });
  res.json({ token });
}
function logout(req, res) {
  res.json({ message: 'Logout successful' });
}
module.exports = { login, logout };
