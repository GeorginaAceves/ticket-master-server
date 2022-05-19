const { Schema, model } = require("mongoose");

const favoritesSchema = new Schema({
  
    title: {
      type: String,
      required: true,

    },
    description: {
      type: String,
      required: true,
    },

    tickets: { type: Schema.Types.ObjectId, ref: 'Tickets' }

},{timestamps: true}
    
  
);

const Favorites = model("Favorites", favoritesSchema);

module.exports = Favorites;