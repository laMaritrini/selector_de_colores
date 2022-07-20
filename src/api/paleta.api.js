import axios from "axios";

export const getPaletaRequest = async () =>
  await axios.get("http://localhost:4000/paletas");

export const createPaletaRequest = async (paleta) =>
  await axios.post("http://localhost:4000/paletas", paleta);

export const deletePaletaRequest = async (id) =>
  await axios.delete(`http://localhost:4000/paletas/${id}`);
