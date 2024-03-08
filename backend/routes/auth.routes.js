import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("signup route hit");
});
router.get("/login", (req, res) => {
  res.send("login route hit");
});
router.get("/logout", (req, res) => {
  res.send("logout route hit");
});

export default router;
