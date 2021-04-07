
import User from '../models/userModel.js';

export const getUser = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).jason('Error: ' + err));
}

export const addUser = async (req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    try {
      await newUser.save();
       res.status(201).json(newUser);
   } catch (error) {
       res.status(409).json({ message: error.message });
   }

  }