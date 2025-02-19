import { Request, Response } from "express";

export const getSearchSuggestions = (req: Request, res: Response) => {
    const query = req.query.query as string;
    console.log(`[server]: received request for GET /search/suggestions with query ${query}`)
    res.send(['test', 'tests', 'tested', 'testing']);
}