import pkg from "pg";
const { Pool } = pkg;
// import dotenv from "dotenv";
// dotenv.config();

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "AamirulL93*",
  database: "todo-app-2024",

  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function testConnection() {
  try {
    const dbName = await pool.query("SELECT current_database()");
    const dbRes = await pool.query("SELECT NOW()");
    const time = dbRes.rows[0].now;
    const name = dbName.rows[0].current_database;

    console.log(`Connected to ${name} at ${time}`);
  } catch (error) {
    console.error(error);

    console.error("Database connection failed");
  }
}
