import { pool } from "../database/index.js";

async function listAllFiles(req, res) {
  try {
    const query = `SELECT * FROM files`;
    const dbRes = await pool.query(query);
    const data = dbRes.rows.map((file) => {
      return {
        ...file,
        path: `http://localhost:8585/${file.path.replace(/\\/g, "/")}`,
        // path: `http://localhost:8585/${file.path.replace("\\", "/")}`,
      };
    });

    res.status(200).json({
      message: `${data.length} files found`,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default listAllFiles;
