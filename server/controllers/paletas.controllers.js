import { response } from "express";
import { pool } from "../db.js";

export const getPaletas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM paletas");
    const carga = result.map(
      ({ id, nombre, color1, color2, color3, color4, color5 }) => ({
        id,
        nombre,
        paleta: [color1, color2, color3, color4, color5],
      })
    );
    res.json(carga);
  } catch (error) {
    console.log(error);
  }
};

export const createPaletas = async (req, res) => {
  const { nombre, paleta } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO paletas (nombre, color1, color2, color3, color4, color5) VALUES (?,?,?,?,?,?)",
      [nombre, ...paleta]
    );
    res.json({ id: result.insertId, nombre, paleta });
  } catch (error) {
    console.log(error);
  }
};

export const deletePaletas = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM paletas WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRow === 0)
      return res.status(404).json({ message: "No existe esa paleta" });
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
