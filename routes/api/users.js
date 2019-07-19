const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route GET api/users
// @desc Get all users
// @access Public
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({
      sports: req.query.sport,
      activityLevel: req.query.activityLevel,
      skillLevel: req.query.skillLevel,
      gender: req.query.gender
    }); //add .sort(sort by distance)
    if (!allUsers.length) {
      return res.status(200).send([]);
    }
    res.status(200).send(allUsers);
  } catch (e) {
    res.status(500).send({error: 'could not get data'})
  }
});

// @route GET api/users/:params
// @desc Get all users
// @access Public
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({}); //add .sort(sort by distance)
    if (!allUsers.length) {
      return res.status(404).send();
    }
    res.status(200).send(allUsers);
  } catch (e) {
    res.status(500).send({ error: 'could not get data' })
  }
});

// @route GET api/users/:id
// @desc Get one user
// @access Public
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send({ error: 'Could not get data' });
  }
});

// @route POST api/users/:id
// @desc POST one user
// @access Public
router.post('/', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send({ error: 'Error creating user' })
  }
});

module.exports = router;