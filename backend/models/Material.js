// backend/models/Material.js
const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true,
    enum: ['kg', 'g', 'L', 'mL', 'pcs', 'bags', 'boxes']
  },
  category: {
    type: String,
    required: true,
    enum: ['coffee-making', 'packaging', 'fixed-cost', 'variable-cost']
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  expiryDate: {
    type: Date,
    required: false
  },
  supplier: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Material', materialSchema);
