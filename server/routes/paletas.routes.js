import { Router } from "express";
import {
  getPaletas,
  createPaletas,
  deletePaletas,
} from "../controllers/paletas.controllers.js";

const router = Router();

router.get("/paletas", getPaletas);

router.post("/paletas", createPaletas);

router.delete("/paletas/:id", deletePaletas);

export default router;
