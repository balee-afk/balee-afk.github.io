const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const db = require('./database');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// API Routes

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.get(sql, [username, password], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (row) {
      res.json({ message: 'Login successful', user: { id: row.id, username: row.username } });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

// Get All Projects
app.get('/api/projects', (req, res) => {
  const sql = 'SELECT * FROM projects ORDER BY created_at DESC';
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Create Project
app.post('/api/projects', upload.single('image'), (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  const tags = req.body.tags || ''; // Comma separated tags

  const sql = 'INSERT INTO projects (title, description, image, tags) VALUES (?, ?, ?, ?)';
  db.run(sql, [title, description, image, tags], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, title, description, image, tags });
  });
});

// Delete Project
app.delete('/api/projects/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM projects WHERE id = ?';
  db.run(sql, id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Project deleted', changes: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
