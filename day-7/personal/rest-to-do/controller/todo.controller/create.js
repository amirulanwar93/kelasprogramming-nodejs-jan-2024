import { pool } from "../../database/connection.js";

const createTodo = async (req, res) => {
  try {
    const query = `
    INSERT INTO to_dos (text, user_id)
    VALUES ($1, $2)
    `;

    const text = req.body.text;
    const userId = req.body.userId;

    if (!text || !userId) {
      return res.status(400).json({
        message: "Invalid request",
      });
    }

    await pool.query(query, [text, userId]);

    res.status(201).json({
      message: "Todo created successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default createTodo;
