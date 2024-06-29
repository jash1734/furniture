const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description:String,
  image: Object,
  keyword: Object,
  rent:Object,
  rentprice:String,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);