const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var _userSchema = new Schema({
  id: { type: String, unique: true, required: true, dropDups: true, ref: 'Person' },
  email: { type: String }, // optional
  fullName: { type: String, required: true },
  avatar: { type: String, required: true },
  interest: [
    {
      text: { type: String },
    },
  ],
  gender: { type: String },
});

module.exports = mongoose.model('User', _userSchema);
