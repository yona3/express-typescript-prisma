import express from "express";
// import { PrismaClient } from "@prisma/client";
import { indexRouter } from "./routes";

// export const prisma = new PrismaClient();

export const app = express();

app.use("/", indexRouter);
