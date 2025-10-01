import { pool } from "../config/database.js";

const getManga = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM manga ORDER BY title ASC');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(409).json({ message: error.message });

    };
};

export default { getManga };