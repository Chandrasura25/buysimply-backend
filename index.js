const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const Routes = require('./routes/route');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/", Routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})