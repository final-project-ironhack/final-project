/*jshint esversion:6*/
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: [String], required: false }],
  description: { type: String, required: true },
  image: { type: String, required: false },
  status: { type: Boolean, required: true },
  rating: [{ type: ObjectId, ref: 'RatingEvent' }],
  creator: { type: ObjectId, ref: 'User', required:false },
  participant: [{ type: ObjectId, ref: 'User' }],
  location: {type:Object, required: true}
});

module.exports = mongoose.model('Event', eventSchema);
