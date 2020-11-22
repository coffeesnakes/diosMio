const mongoose = require('mongoose');

// mongoose.connect(INSERTLOCALHOSTSTORAGEHERE);

const db = mongoose.connection;

db.on('error', () => {
  console.error.bind(console, 'Couldnt Connect to DB');
});

db.on('open', () => {
  console.log('Connected to DB');
});

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
// });

// let Users = mongoose.model('Users', userSchema);

// module.exports = Users;