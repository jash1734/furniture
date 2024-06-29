const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: { 
    type:Object,
    require:true
  },
  category: { 
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  rent: { // Object to store rent details
    pricePerDay: {
      type: Number,
      required: true
    },
    pricePerWeek: {
      type: Number
    },
    pricePerMonth: {
      type: Number
    }
  },
  available: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);