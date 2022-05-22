const router = require('express').Router()
const Tickets = require("../models/Tickets.model")


router.get("/alltickets", (req, res) => {
    Tickets.find()
    .then (tickets => {
        res.json(tickets)
    })
    .catch(console.log)

})

//crear ticket
router.post("/newticket", (req, res) => {
    const {img, title, category, description, quantity, price_per_ticket, date, location  } = req.body
    console.log(req.body)
    Tickets.create({img, title, category, description, quantity, price_per_ticket, date, location})
    .then(newTicket => {
        res.status(201).json({
            msg: "New ticket created",
            newTicket})
      })
      .catch((err) => console.log(err))
})
module.exports = router