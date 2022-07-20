import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import paletasRoutes from "./routes/paletas.routes.js";

const app = express();

app.use(cors());
app.use(morgan());

app.use(express.json());

app.use(indexRoutes);
app.use(paletasRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
