import { pool } from "../../database/index.js";
import bcrypt from "bcrypt";
import { validateEmail } from "../../utils/helper.js";

const insertNewUser = `
INSERT INTO users (password, email)
 VALUES ($1, $2)
`;

const checkEmailQuery = `
SELECT * FROM users
WHERE email = $1
`;

const register = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!password || !email) {
      return res.status(400).json({
        message: "password, email is required",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const dbResEmail = await pool.query(checkEmailQuery, [email]);
    if (dbResEmail.rows.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const dbRes = await pool.query(insertNewUser, [hashedPassword, email]);
    console.log(dbRes);
    res.status(201).json({
      message: "User is created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default register;
