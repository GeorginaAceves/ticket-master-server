const { Schema, model } = require("mongoose");

const ticketsSchema = new Schema({
  
    img: {
        type: String,
      },

    title: {
      type: String,
      required: true,
    },

    category: {
        type: String, enum: ["CINEMA", "THEATER", "CONCERT", "TRANSPORT"]
    },

    description: {
      type: String,
      required: true,
    },

    quantity: {
        type: Number,
    },

    price_per_ticket: {
        type: Number,
    },

    date: {
       type: Date, 
    },


},{timestamps: true}
    
  
);

const Tickets = model("Tickets", ticketsSchema);

module.exports = Tickets;