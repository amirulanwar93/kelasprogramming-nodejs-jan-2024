import { pool } from "../../database/connection.js";

const listAllTodos = async (req, res) => {
  try {
    const query = `
    SELECT * FROM to_dos
    WHERE user_id = $1
    `;

    const resDb = await pool.query(query, [userId]);
    // console.log(resDb);
    const data = resDb.rows;
    res.status(200).json({
      message: `${data.length} todos found`,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default listAllTodos;
