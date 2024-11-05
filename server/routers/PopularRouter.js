import { Router } from "express";
import { auth } from "../helpers/auth.js";
import { getPopularContent } from "../controllers/PopularController.js";

const router = Router();

router.get("/", getPopularContent);

export default router;
