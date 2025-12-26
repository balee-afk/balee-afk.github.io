const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'portfolio.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

db.serialize(() => {
    // Create Projects Table
    db.run(`CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    image TEXT,
    tags TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

    // Create Users Table (Simple admin)
    db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);

    // Seed Admin User (password should be hashed in production, keeping simple for now)
    const insertUser = 'INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)';
    db.run(insertUser, ['admin', 'admin123']);

    // Seed Projects if empty
    db.get("SELECT count(*) as count FROM projects", (err, row) => {
        if (row && row.count === 0) {
            const insertProject = 'INSERT INTO projects (title, description, image, tags) VALUES (?, ?, ?, ?)';
            db.run(insertProject, [
                'Sample Project',
                'This is a sample project to demonstrate the portfolio capabilities. You can delete this and add your own via the Admin Dashboard.',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
                'Demo, Vue, Express'
            ]);
            console.log('Seeded demo project');
        }
    });
});

module.exports = db;
