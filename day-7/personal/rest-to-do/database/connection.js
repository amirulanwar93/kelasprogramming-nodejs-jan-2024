import pkg from "pg";
import createUsersTable from "../model/user.js";
import createToDosTable from "../model/todo.js";
const { Pool } = pkg;

// import dotenv from "dotenv";
// dotenv.config();

export const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "AamirulL93*",
  database: "todo-app-2024",

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

    // create database tables
    await createUsersTable();
    await createToDosTable();
  } catch (error) {
    console.error(error);

    console.error("Database connection failed");
  }
}
