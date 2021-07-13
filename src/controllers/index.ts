import { Request, Response } from "express";

export const fetchData = async (_: Request, res: Response): Promise<void> => {
  const data = { msg: "hello!" };
  console.log(data);
  res.json(data);
};
