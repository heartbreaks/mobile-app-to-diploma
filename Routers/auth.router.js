const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/Users");
const config = require("../config/default.json");
const router = Router();

// /register
router.post("/register", async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Неккоректные данные",
      });
    }

    const { login, password, name, role, position } = req.query;

    const candidate = await User.findOne({ where: { login: login } });

    if (candidate) {
      return res.status(400).json({ message: "Login is registered" });
    }

    const hashesPassword = await bcrypt.hash(password, 12);

    const user = new User({
      login,
      password: hashesPassword,
      name,
      role,
      position,
    });

    console.log(user.dataValues);

    await user.save();
    res.status(201).json({ message: "Register was succeshul" });
  } catch (err) {
    res.status(500).json({ message: "Вывалилась ошибка", err: err });
  }
});

router.post(
  "/auth",
  [
    check("login", "Enter correct login").isString(),
    check("password", "Password is'n short").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Неккоректные данные",
        });
      }
      const { login, password } = req.query;

      const user = await User.findOne({ where: { login: login } });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Wrong password" });
      }

      const token = jwt.sign(
        { userId: user.id, userRole: user.role },
        config.jwtSecret,
        {
          expiresIn: "1h",
        }
      );

      res.json({ token, userId: user.id, userRole: user.role });
    } catch (err) {
      res.status(500).json({ message: "Вывалилась ошибка", err: err });
      console.log(err);
    }
  }
);
module.exports = router;
