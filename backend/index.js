import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import chatRoutes from "./src/routes/chat.route.js";

dotenv.config({
    path: ".env"
});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});