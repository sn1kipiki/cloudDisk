const express = require("express");
const config = require("config")
const mongoose = require("mongoose")
const authRouter = require("./routes/authroutes")
const fileRouter = require("./routes/fileroutes")

const app = express()
const PORT = config.get("serverPort")
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)

const start = async ()=>{
    try {
        await mongoose.connect(config.get("dburl"))

        app.listen(PORT, () =>{
            console.log(`server start on port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start()