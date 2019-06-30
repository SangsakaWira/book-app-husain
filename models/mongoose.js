const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/book-app", {
    useCreateIndex: true,
    useNewUrlParser: true
})