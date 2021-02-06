import * as mongoose from 'mongoose';

const lekhSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  uploadImage: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lekh = mongoose.model('Lekh', lekhSchema);
export default Lekh;