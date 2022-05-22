const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  
    username: {
      type: String,
      unique: true,
      required: true,

    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    favorites: [{ type: Schema.Types.ObjectId, ref: 'Favorites' }],

    tickets: [{ type: Schema.Types.ObjectId, ref: 'Tickets' }],

    shoopinghistory: [{type: Schema.Types.ObjectId, ref: 'Tickets'}],

    img: {
      type: String,
    },

    rol: {
    type: String,
    enum: ["ADMIN", "USER"], default: "USER",
  }
},{timestamps: true}
    
  
);

const User = model("User", userSchema);

module.exports = User;
