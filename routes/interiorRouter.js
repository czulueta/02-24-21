const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

//get all interior prices for the job
interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, interiorPrices) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(interiorPrices)
    })
})
// post interior prices customer wants
interiorRouter.post("/", (req, res, next) => {
    const newSelection = new Interior(req.body)
    newSelection.save((err, savedSelections) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedSelections)
    })
})
module.exports = interiorRouter