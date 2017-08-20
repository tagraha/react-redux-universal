const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var _statusModel = new Schema({
  id: { type: String, unique: true, required: true, dropDups: true },
  profileid: { type: String, unique: false, required: true }, // photo owner profile id
  title: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  statustext: { type: String, require: true, ref: 'Feed' },
  time: { type: String },
  unixTime: { type: String },
  stats: {
    like: { type: Number },
  },
});

module.exports = mongoose.model('status', _statusModel);
