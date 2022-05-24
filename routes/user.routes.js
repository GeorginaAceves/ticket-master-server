const router = require("express").Router()
const mongoose = require("mongoose")
const User = require("../models/User.model")


router.get("/signup", (req, res) => {
  User.find()
  .then(users => {
    res.json(users)
  })
  .catch((err) => console.log(err))
})

// user registration 
router.post("/signup", (req, res)=>{
  const {username, email, password,} = req.body
  console.log(req.body)
  User.create({username, email, password,})
    .then(newUser => {
      res.status(201).json({
          msg: "New user created",
          newUser})
    })
    .catch((err) => console.log(err))
})

//byId
router.get('/users/:userId', (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: 'Specified userId is not valid' });
      return;
  }

  User.findById(userId)
  .populate("tickets", "_id title")
      .then(user => res.status(200).json(user))
      .catch(error => res.json(error));
});

// Edit user
router.put('/user/:userId', (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
  }

  Project.findByIdAndUpdate(userId, req.body, { new: true })
      .then((updatedUser) => res.json(updatedUser))
      .catch(error => res.json(error));
});

//Delete user
// router.delete('/users/:userId', (req, res, next) => {
//   const { userId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//       res.status(400).json({ message: 'Specified userID is not valid' });
//       return;
//   }

//   User.findByIdAndRemove(userId)
//       .then(() => res.json({ message: `Project with ${userId} is removed successfully.` }))
//       .catch(error => res.json(error));
// });

module.exports = router;