import { pool } from "../../database/connection.js";
import bcrypt from "bcrypt";

const query = `
INSERT INTO users (username, password, email, is_admin)
 VALUES ($1, $2, $3, $4)
`;

async function createUser(req, res) {
  try {
    const saltRounds = 10;

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const isAdmin = req.body.is_admin;

    if (!username || !password || !email) {
      return res.status(400).json({
        message: "username, password, email is required",
      });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const dbRes = await pool.query(query, [
      username,
      hashedPassword,
      email,
      isAdmin,
    ]);
    console.log(dbRes);
    res.status(201).json({
      message: "User is created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export default createUser;
