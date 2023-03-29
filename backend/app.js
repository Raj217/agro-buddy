import * as db from "./db/database.js";
import express from "express";

db.connect();
const app = express();

app.use(express.json());

export default app;
