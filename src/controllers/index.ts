import { Request, Response } from "express";

export const fetchData = (_: Request, res: Response) => {
  const data = { msg: "hello!" };
  console.log(data);
  return res.json(data);
};
