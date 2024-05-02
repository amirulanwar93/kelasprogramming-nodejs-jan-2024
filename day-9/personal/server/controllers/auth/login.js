import { pool } from "../../database/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import "dotenv/config";
import { validateEmail } from "../../utils/helper.js";

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        message: "Bad request",
      });
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const query = `
      SELECT * FROM users
      WHERE email = $1
    `;
    const dbRes = await pool.query(query, [email]);
    const user = dbRes.rows[0];

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

    const data = {
      id: user.id,
      email: user.email,
    };
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(data, secretKey);

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

export default login;
