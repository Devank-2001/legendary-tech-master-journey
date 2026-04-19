import express from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/current-user", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "current user fatched",
    user: req.user,
  });
});

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
