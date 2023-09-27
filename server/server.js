const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3002;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.wtaxbyl.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

env.config();

// mongodb connection
// mongodb+srv://breannaschmidt12:vTehdZWXbfN0WUHN@cluster0.wtaxbyl.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
).then( () => {console.log('Database is connected! :)')});

app.use(express.json());
// app.use(require("./routes/api.js"))

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