import * as db from "./db/database.js";
import express from "express";
import BodyParser from "body-parser";
import * as Exception from "./middleware/exception/exception-handler.js";
import mainRoute from "./routes/index.js";
import cors from "cors";

db.connect();
const app = express();

app.use(cors());
app.use(express.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.use((req, res, next) => {
  if (req.url !== '/api/welcome') {
    console.log("Request Type:", req.method);
    console.log("Route: ", req.url);
  }
  next();
});

app.use("/api", mainRoute);

app.use(Exception.defaultExceptionHandler);
export default app;
