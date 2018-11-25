import express from "express";
import path from "path";
import routeLogger from "morgan";
import bodyParser from "body-parser";
import routes from "./controllers/routes";
import cors from "cors";

import logger from "./logger";

const app = express();
app.disable("x-powered-by");

app.use(
  routeLogger("dev", {
    skip: () => app.get("env") === "test"
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors()); // use CORS

// Routes
app.use("/", routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.httpCode = "404";
  err.code = "404";
  next(err);
});

// Error handler
app.use((err, req, res) => {
  // eslint-disable-line no-unused-vars
  const { code, message } = err;
  res.status(err.httpCode || 500).json({ code, message });
});

export default app;
