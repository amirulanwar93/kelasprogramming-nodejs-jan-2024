import { pool } from "../../database/connection.js";


const updateUserById = `UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4`;

async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //   check user id exists

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "username, email, and password are required",
      });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    await pool.query(updateUserById, [username, email, password, id]);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error();
    res.status(500).json({ message: "Internal server error" });
  }
}

export default updateUser;
