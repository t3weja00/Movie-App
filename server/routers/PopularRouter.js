import { Router } from "express";
import { getPopularContent } from "../controllers/PopularController.js";

const router = Router();

router.get("/", getPopularContent);

export default router;
