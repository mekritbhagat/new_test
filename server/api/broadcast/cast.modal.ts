import * as mongoose from 'mongoose';

const castSchema = new mongoose.Schema({
  media: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  // icons: {
  //   type: String,
  //   required: true
  // },
  // comments: [{ body: String, date: Date }],
  // createdAt: {
  //   type: Date,
  //   required: true
  // }
}
// {
//   timestamps: true
// }
);

const Broad = mongoose.model('Broad', castSchema);
export default Broad;