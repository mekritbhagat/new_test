import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

// const categorySchema = new Schema({
//     category: {
//         type: String,
//         default: 'Latest',
//         required: true
//     },
//     keywords: {
//       type: Array,
//       default: 'b'
//     }
// });


const regionSchema = new Schema({
  state: {
    type: [String], index: true, required: true
  },
  locale: {
    type: Array,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});


const adminSchema = new mongoose.Schema(
  {
  // _id: mongoose.Schema.Types.ObjectId,
//   address: [regionSchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  news: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
  createdBy: {
    type: Date,
    default: Date.now,
  },
}
);

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;