const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/vote', (req, res) => {
	if (req.body.vote) console.log('Key pressed'); 
	else console.log('Key not pressed');
  
  res.sendStatus(200);
})

app.listen(3000);