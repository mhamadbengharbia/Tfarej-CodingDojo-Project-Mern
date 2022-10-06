const { ContactSchema } = require('../models/contact.model');


module.exports.createContact = (request, response) => {
    const { name, email, msg} = request.body;
    ContactSchema .create({
       name,
       email,
       msg
    })
        .then(contact => response.status(200).json(contact))
        .catch(err => response.status(400).json(err));
}



module.exports.getAllContacts = (request, response) => {
    ContactSchema .find()
        .then(contact => response.json(contact))
        .catch(err => response.status(400).json(err))
}



module.exports.getOneContact = (req, res) => {
	ContactSchema .findOne({ _id: req.params.id})
		.then(oneSingleContact => res.status(200).json(oneSingleContact))
		.catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};