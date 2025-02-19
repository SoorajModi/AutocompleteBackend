import { Request, Response } from "express";

export const getHealth = (req: Request, res: Response) => {
    console.log("[server]: Received request GET /health");
    res.send("Hello world!");
    console.log("[server]: Successfully responded");
}
