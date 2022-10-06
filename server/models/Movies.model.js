const mongoose = require("mongoose");
 
const MovieSchema = new mongoose.Schema(
	{
	title: {
		type:String,
		required: [true,"title is required. "],
		},
	link: {
		type:String,
		required: [true,"link is required. "],
    },
	year: {
		type:Number,
		required: [true,"year is required. "],
		},
	imdb: {
        type:Number,
     },
    genre: {
		type:String,
		required: [true,"genre is required. "],
		},
	country: {
		type:String,
		required: [true,"country is required. "],
		},
	duration: {
		type:Number,
		required: [true,"duration is required. "],
		},
	quality: {
		type:String,
		required: [true,"quality is required. "],
		},
	picture: {
		type:String,
		required: [true,"picture is required. "],
		},
	description: {
		type:String,
		required: [true,"description is required. "],
		},
	},{timestamps:true}
		);

 




const Movies = mongoose.model("Movies", MovieSchema);

module.exports = Movies; 