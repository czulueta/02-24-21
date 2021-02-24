const express = require("express")
const exteriorRouter = express.Router()
const Exterior = require("../models/exterior.js")

//get all prices for the exterior
exteriorRouter.get("/", (req, res, next) => {
    Exterior.find((err, exteriorPrices) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(exteriorPrices)
    })
})
//post all chosen prices 
exteriorRouter.post("/", (req, res, next) => {
    const chosenPrices = new Exterior(req.body)
    chosenPrices.save((err, savedPrices) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPrices)
    })
})
module.exports = exteriorRouter