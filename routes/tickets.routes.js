const router = require('express').Router()
const Tickets = require("../models/Tickets.model")
const User = require("../models/User.model")
const mongoose = require("mongoose")
const ShoppingHistory = require("../models/ShoppingHistory.model")


router.get("/alltickets", (req, res) => {
    Tickets.find()
    .then (tickets => {
        res.json(tickets)
    })
    .catch(console.log)

})

//add ticket
router.post("/newticket", (req, res) => {
    const {img, title, category, description, quantity, price_per_ticket, date, location, user_id  } = req.body
    console.log(req.body)
    Tickets.create({img, title, category, description, quantity, price_per_ticket, date, location})
    .then( newTicket => {
        return User.findByIdAndUpdate(user_id, { $push: { tickets: newTicket._id }})
    })
    .then(newTicket => {
        res.status(201).json({
            msg: "New ticket created",
            newTicket})
      })
      .catch((err) => console.log(err))
})


// byId
router.get('/tickets/:ticketId', (req, res, next) => {
    const { ticketId } = req.params;

    //valid
    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
        res.status(400).json({ message: 'This ticketId is not valid' });
        return;
    }

    Tickets.findById(ticketId)
    // .populate("ticketRef", "_id title")
    // .populate("userRef", "_id username")
        .then(tickets => res.status(200).json(tickets))
        .catch(error => res.json(error));
});

// edit Ticket
router.put('/tickets/:ticketId', (req, res, next) => {
    const { ticketId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
        res.status(400).json({ message: 'TicketId is not valid' });
        return;
    }

    Tickets.findByIdAndUpdate(ticketId, req.body, { new: true })
        .then((updatedTicket) => res.json(updatedTicket))
        .catch(error => res.json(error));
});

module.exports = router