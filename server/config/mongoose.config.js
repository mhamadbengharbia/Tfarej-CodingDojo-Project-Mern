const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/tfarejTN", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to the database ${mongoose.connection.name}`))
	.catch(err => console.log(`Something went wrong when connecting to the database with this ${err}`));