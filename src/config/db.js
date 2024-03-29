const mysql = require("mysql2");
const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }).promise();

    (async () => {
        try {
          await db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
      
          await db.query(`USE ${process.env.DB_NAME}`);
      
          const createUsersTableQuery = `CREATE TABLE IF NOT EXISTS users (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255)
          )`;
          await db.query(createUsersTableQuery);
          console.log('User table created or already exists');
          const createTasksTableQuery = `CREATE TABLE IF NOT EXISTS tasks (
            task_id INT PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            status VARCHAR(20) DEFAULT 'todo',
            dueDate DATE,
            user_id INT,
            CONSTRAINT fk_user
              FOREIGN KEY (user_id) REFERENCES users(user_id)
              ON DELETE CASCADE
          );`
          await db.query(createTasksTableQuery);
      console.log('Task table created or already exists');
  
      console.log('Database setup completed successfully.');
    } catch (error) {
      console.error('Error setting up the database:', error);
      process.exit(1);
    }
  })();

  module.exports = db;
