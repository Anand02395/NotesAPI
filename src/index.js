const express= require("express");
const app = express()
const quotes = require("./quotes.json");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
const mongoose = require("mongoose")
app.use(express.json())
app.use(cors())

// app.use((req,res,next) => {
//     console.log("HTTP Method - " + req.method + " ,Url - "+req.url)
//     next()
// })

app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.get("/",(req,res)=> {
    res.status(200).send("Notes API Started");
})

const PORT = process.env.PORT || 5000
// mongoose.connect("mongodb+srv://admin:mongo2395@cluster0.pvnc8nr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect(process.env.MONGO_URL)
.then(()=> {

    app.listen(PORT, ()=> {
 
        console.log("server started on "+ PORT);
        });

}).catch((error)=> {

})






// app.get("/quote",(req,res)=> {
//     // res.send("Hello quote");
//       res.json(quotes)
// })
// app.get("/random",(req,res)=> {
//     // res.send("Hello quote");
//   let index = Math.floor(Math.random() * quotes.length)
//   let quote_random = quotes[index]
//       res.status(200).json(quote_random)
// })