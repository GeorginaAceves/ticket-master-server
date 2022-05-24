const router = require('express').Router()
const mongoose = require("mongoose")
const ShoppingHistory = require("../models/ShoppingHistory.model")


router.get("/allmypurchases", (req, res) => {
    ShoppingHistory.findById()
    .then (allHistory => {
        res.json(allHistory)
    })
    .catch((err) => console.log(err))
})


//delete ticket
router.delete("/allmypurchases", (req, res) => {
    ShoppingHistory.delete(req.body)
    .then(deleteMyPurchase => {
        res.status(201).json({
            msg: "Purchase deleted from shopping history",
            deleteMyPurchase})
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

    Post.findById(ticketId)
    .populate("ticketRef", "_id title")
    .populate("userRef", "_id username")
        .then(post => res.status(200).json(post))
        .catch(error => res.json(error));
});

module.exports = router