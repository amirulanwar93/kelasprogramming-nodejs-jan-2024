import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";
import createFilesTable from "../model/file.js";

export const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function databaseInit() {
  try {
    const dbName = await pool.query("SELECT current_database()");
    const dbRes = await pool.query("SELECT NOW()");
    const time = dbRes.rows[0].now;
    const name = dbName.rows[0].current_database;
    console.log(`Connected to ${name} at ${time}`);
    
    await createFilesTable()
  } catch (error) {
    console.error(error);
    console.error("Database connection failed");
  }
}
