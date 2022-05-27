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
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password: {
      type: String,
      required: true,
    },

    agree: {type: Boolean}, 

    remember: {type: Boolean},

    interest: {type: String},

    favorites: [{ type: Schema.Types.ObjectId, ref: 'Favorites' }],

    tickets: [{ type: Schema.Types.ObjectId, ref: 'Tickets' }],

    shoppinghistory: [{type: Schema.Types.ObjectId, ref: 'Tickets'}],

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
