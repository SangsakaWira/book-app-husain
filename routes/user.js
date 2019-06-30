const express = require('express')
const bodyParser = require("body-parser")
const router = express.Router()

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})

let user = require("../models/user")

router.post('/register',urlencodedParser, (req,res) =>{
    user.create(req.body,(err,doc)=>{
        if(err){
            res.status(400).send({
                message:"Error occured!"
            })
        }else{
            res.status(200).send(doc)
        }
    })
})

router.get('/user', (req, res)=> {
    user.find({},(err,doc)=>{
        if (err) {
            res.status(400).send({
                message: "Error occured!"
            })
        } else {
            res.status(200).send(doc)
        }
    })
});

router.get('/user/:id', (req, res)=> {
    res.send("Hello, we are not ready yet")
});

module.exports = router;