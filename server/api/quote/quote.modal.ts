import * as mongoose from 'mongoose';
// import { Quote } from './quote.interface';

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Quote = mongoose.model('Qoute', quoteSchema);
export default Quote;
