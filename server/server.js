const express = require('express');
const mongoose = require('mongoose');
const MONGODB_USER = require('./.env');
const MONGODB_PASS= require('./.env');

const app = express();
const PORT = 3000;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@ecommerceproducts.mnos8la.mongodb.net/`

// Connect to the database.
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("client"));

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`)
});