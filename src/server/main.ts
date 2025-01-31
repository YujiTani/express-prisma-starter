import dotenv from "dotenv";
import express from "express";
import ViteExpress from "vite-express";

import { apiRouter } from "@/server/routes/index.ts";

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter);

// 404エラー
app.use((_req, res) => {
	return res.status(404).json({ message: "Invalid API route" });
});

ViteExpress.listen(app, Number(port), () => console.log(`Server is listening on port ${port}...`));
