import { pool } from "../database/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        message: "Bad request",
      });
    }

    const query = `
      SELECT * FROM users
      WHERE email = $1
    `;
    const dbRes = await pool.query(query, [email]);
    const user = dbRes.rows[0];
    console.log(user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const token = jwt.sign({ foo: "bar" }, "shhhhh");

    res.status(200).json({
      message: "Token has been created",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default createToken;
