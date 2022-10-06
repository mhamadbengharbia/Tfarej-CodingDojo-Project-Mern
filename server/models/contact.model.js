const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
    name: {    type: String,
                required: [true, "You must type the name"],
                minLength: [3, "Name must be at least 3 characters long"]
                },
    email: {
        type: String,
        required: [true, "You must insert the email"],
        validate: {
			validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
			message: "Please enter a valid email"
			}
    },
    msg: {
        type: String,
        required: [true, "You must write the message"],
        minLength: [3, "Message must be at least 10 characters long"]
    }

}, 
{ timestamps: true });
module.exports.ContactSchema = mongoose.model('ContactSchema', ContactSchema);