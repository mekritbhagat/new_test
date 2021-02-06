import * as mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  stockMarket: String,
  currencyMarket: String,
  previous: {
      type: String,
      required: true
  },
  current: {
      type: String,
      required: true
  },
  status: {
      type: String,
      required: true
  },
  thumbs: { type: String, required: true },
  datedAt: {
      type: Date,
      default: Date.now,
  },
});

const Stock = mongoose.model('Stock', stockSchema);
export default Stock;
