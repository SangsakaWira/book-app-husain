const express = require("express")
require("./models/mongoose")

const app = express()

app.use(require("./routes/user"))

app.listen(3000,()=>{
    console.log("Server is running!")
})