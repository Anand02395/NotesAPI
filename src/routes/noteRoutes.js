const express = require("express");
const { getNotes, createNote, updateNote, deleteNote } = require("../controllers/noteController");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();


// Route for handling POST request to "/signup"
noteRouter.get("/",auth, getNotes)

 noteRouter.post("/",auth,createNote)

 noteRouter.put("/:id",auth,updateNote)

 noteRouter.delete("/:id",auth,deleteNote)

 // Export the noteRouter so that it can be used in other parts of your application
 module.exports = noteRouter