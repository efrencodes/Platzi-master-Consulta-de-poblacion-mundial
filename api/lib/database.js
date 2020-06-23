<<<<<<< HEAD
const mongoose = require('mongoose');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})
  .then(() => console.log('Database is Connected'))
  .catch(err => console.log(err));
=======
const mongoose = require('mongoose');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }
  )
  .then(() => console.log('Database is Connected'))
  .catch((err) => console.log(err));
>>>>>>> cb24098a8f4f586519f364807f7d4e923f56f39f
