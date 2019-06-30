const express = require('express')
const bodyParser = require("body-parser")
const router = express.Router()

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})

let user = require("../models/transaksi")


module.exports = router;