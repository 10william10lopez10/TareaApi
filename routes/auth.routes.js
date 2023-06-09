const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middleware/validate-fields");
const { login } = require("../controllers/auth.controller");
const router = Router();

router.post(
  "/login",
  [
    check("email", "email is mandatory").isEmail(),
    check("password", "password is mandatory").not().isEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;