const { Schema, model } = require("mongoose");

const shoppinghistorySchema = new Schema({
  
    title: {
      type: String,
      required: true,

    },

    description: {
      type: String,
      required: true,
    },

},{timestamps: true}
    
  
);

const ShoppingHistory = model("ShoppingHistory", shoppinghistorySchema);

module.exports = ShoppingHistory;