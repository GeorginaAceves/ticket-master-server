const { Schema, model } = require("mongoose");

const ticketsSchema = new Schema({
  
    img: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Boletos_SIT.png"
      },

    title: {
      type: String,
      required: true,
    },

    category: {
        type: String, enum: ["CINEMA", "THEATER", "CONCERT" ]
    },

    description: {
      type: String,
      required: true,
    },

    quantity: {
        type: Number,
        required: true,
        max: 10,
    },

    price_per_ticket: {
        type: Number,
        required: true,
        maxlength: 4,
    },

    date: {
       type: Date,
       required: true, 
    },
    location: {
      type: String,
      required: true, 
   },


},{timestamps: true}
    
  
);

const Tickets = model("Tickets", ticketsSchema);

module.exports = Tickets;