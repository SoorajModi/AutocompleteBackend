import { Router } from "express";
import { getSearchSuggestions } from "../controllers/search";

const router = Router();

router.get("/suggestions", getSearchSuggestions);

export default router;
