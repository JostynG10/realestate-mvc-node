/* ==================== INDEX FILE ==================== */

/* ========== Importing models ========== */
import express from "express";
import dotenv from "dotenv";
import routes from "@routes";

/* ========== Server configuration ========== */
dotenv.config();
const app = express();
// Enables views with Pug
app.set("view engine", "pug");
app.set("views", "./src/views");
// Load the routes
app.use("/", routes);
// Start the server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started at port: ${process.env.SERVER_PORT}`);
});

/* ========== Exporting models ========== */
export { app };
