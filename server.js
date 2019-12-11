const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(expres.static('public'));
app.use(bodyParser.json());

app.listen(port, ()=> {
  console.log(`Listening on port ${port}...`);
})