import * as db from "./db/database.js";
import express from "express";
import BodyParser from "body-parser";
import * as Exception from "./middleware/exception/exception-handler.js";
import mainRoute from "./routes/index.js";

db.connect();
const app = express();

app.use(express.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.all("/api/*", mainRoute);

app.use(Exception.defaultExceptionHandler);
export default app;
