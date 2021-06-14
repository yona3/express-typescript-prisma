import { Router } from "express";
import { fetchData } from "../controllers";

export const indexRouter = Router();

indexRouter.get("/", fetchData);
