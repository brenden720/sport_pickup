const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  nickname: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  email: {
    type: String,
    require: true,
  },
  birthdate: {
    type: Date,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  isLoggedIn: {
    type: String,
    require: true,
    default: false,
  },
  location: {
    type: String,
    require: true,
  },
  profilePic: {
    type: String,
    default: '',
  },
  interests: {
    type: String,
    default: 'I like sports',
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  sports: {
    type: [String],
    default: ['Baseball'],
  },
  skillLevel: {
    type: String,
    default: 'Beginner',
  },
  activityLevel: {
    type: String,
    default: 'casual',
  },
});

UserSchema.pre('save', function (next) {
  this.nickname = this.get('username');
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;