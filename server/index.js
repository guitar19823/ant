require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.use('/api/clothes', require('./routes/clothes'));
app.use('/api/shoes', require('./routes/shoes'));
app.use('/api/food', require('./routes/food'));
app.use('/api/conserve', require('./routes/conserve'));

app.use('/', (req, res) => {
  res.sendFile('/index.html');
});

async function start() {
  try {
    // await require('./utils/database').sync({force: true}); // Parameter {force: true} overwrite tables
    // require('./utils/_fillInTables');

    await app.listen(PORT);

    console.log(`Server is running on ${HOST}:${PORT}`);
  } catch (e) {
    console.log(e);
  }
}

start();