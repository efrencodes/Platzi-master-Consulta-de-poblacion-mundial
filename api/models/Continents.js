<<<<<<< HEAD
const { Schema, model } = require('mongoose');

const continentsSchema = new Schema({
  continent: {
    type: String,
    required: true
  },
  countries: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('continents', continentsSchema);
=======
const { Schema, model } = require('mongoose');

const continentsSchema = new Schema(
  {
    continent: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    continentInfo: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('continents', continentsSchema);
>>>>>>> cb24098a8f4f586519f364807f7d4e923f56f39f
