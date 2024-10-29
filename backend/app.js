import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbconnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// CORS configuration
const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Apply the same CORS options for preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

// Connect to the database
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
