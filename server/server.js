const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const MONGODB_URI = process.env.MONGODB_URI || "";

env.config();

app.use(express.json());
app.use(require("./routes/api.js"))

// app.get('/', (req, res, next) => {
// 	res.status(200).json({
// 		message: "Hello from server"
// 	})
// });


// app.post('/products', (req, res, next) => {
// 	res.status(200).json({
// 		message: req.body
// 	})
// });

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})