const express = require("express");
const { signUp, signIn } = require("../controllers/userController");
const userRouter = express.Router();


// Route for handling POST request to "/signup"
 userRouter.post("/signup",signUp)

 userRouter.post("/signin",signIn)

 // Export the userRouter so that it can be used in other parts of your application
 module.exports = userRouter