
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3003;
const path = require('path');
const cors = require('cors');
const router = require('./routes.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
// app.use('/api', router);

app.listen(PORT, () => console.log(`Listening @ ${PORT}`));