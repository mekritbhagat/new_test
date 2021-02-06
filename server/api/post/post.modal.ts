import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category: {
        type: String,
        default: 'Latest',
        required: true
    },
    keywords: {
      type: Array,
      default: 'b'
    }
});


const regionSchema = new Schema({
  state: {
      type: String,
      required: true
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


const postSchema = new mongoose.Schema(
  {
  // _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    // unique: true,
  },
  image: {
    type: String
  },
  contents: {
    type: String,
    required: true,
  },
  cate: [categorySchema],
  address: [regionSchema],
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // cate: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
  // comments: [{ body: String, date: Date }],
  // meta: {
  //   votes: Number,
  //   share: Number,
  // },
  // createdBy: {
  //   type: Date,
  //   default: Date.now,
  // },
},
{
  timestamps: true,
}
);

const Posts = mongoose.model('Post', postSchema);
export default Posts;


// #!/usr/bin/env node
// 'use strict';

// const numberOfDocs = Number(process.argv[2]);
// const assert = require('assert');
// const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);
// const { Schema, connection} = mongoose;
// const GH = 'gh7058';
// const URI = `mongodb://localhost:27017/${GH}`;
// const OPTS = { family: 4, useNewUrlParser: true };

// const schema = new Schema({
//   name: String,
//   email: String,
//   phone: String
// }, { autoIndex: false });

// const index = { name: 'text', email: 'text', phone: 'text' };
// schema.index(index);

// const Test = mongoose.model('test', schema);

// const tests = [];
// for (let n = 0; n < numberOfDocs; n++) {
//   let suffix = (n % 2 === 0) ? '0':'1';
//   tests.push({
//     name: `test${n}`,
//     email: `${n}@xyz.com`,
//     phone: `123-456-789${suffix}`
//   });
// }

// async function run() {
//   // connect and reset db
//   await mongoose.connect(URI, OPTS);
//   await connection.dropDatabase();

//   // track time for fun
//   let start = Date.now();
//   let end;
//   let delta;
//   function updateTimes() {
//     end = Date.now();
//     delta = (end - start) / 1000;
//     start = Date.now();
//   }

//   // simulate existing collection
//   await Test.collection.insertMany(tests).then(updateTimes);
//   const count = await Test.countDocuments();
//   console.log(`created ${count} documents: ${delta}`);

//   // be sure that the index actually exists before querying against it.
//   await Test.createIndexes().then(updateTimes);
//   console.log(`created indexes: ${delta}`);

//   //find docs
//   const query = { $text: { $search: '7890' } };
//   const docs = await Test.find(query);

//   assert.strictEqual(docs.length, numberOfDocs/2);
//   console.log(`found ${docs.length} matching documents.`);
//   await connection.close();
// }

// run().catch(console.error);


// var animalSchema = new Schema({
//     name: String,
//     type: String,
//     tags: { type: [String], index: true } // field level
//   });

//   animalSchema.index({ name: 1, type: -1 }); // schema level