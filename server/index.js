const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require(`./controllers/controller.js`);
const cors = require('cors')
require('dotenv').config();
const baseURL = `/api`;
const morgan = require('morgan');

//Middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//Endpoints
app.get(`${baseURL}/autocomplete/`, ctrl.autocomplete)
app.get(`${baseURL}/autocomplete/:st`, ctrl.autocomplete)
app.get(`${baseURL}/movie/:id`, ctrl.getMovie)

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));