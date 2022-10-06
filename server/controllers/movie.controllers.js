const Movies  = require("../models/Movies.model");

module.exports.createNewMovies = (req, res) => {
    Movies.create(req.body)
        .then(newlyCreatedMovies  => res.status(200).json({ NewMovies : newlyCreatedMovies  }))
        .catch(err => res.status(400).json(err));
};
 
module.exports.updateExistingMovies= (req, res) => {
  Movies.findOneAndUpdate({ _id: req.params.movie_id }, req.body, { new: true ,runValidators:true})
    .then(updatedMovies => res.json({ Movies: updatedMovies }))
    .catch(err => res.status(400).json({message:"Something went wrong",error:err}));
};
module.exports.getMovies = (req, res) => {
    Movies.find(req.body)
        .then(allMovies => res.json(allMovies))
        .catch(err => res.status(400).json({message:"Something went wrong",error:err}));
};

module.exports.findOneMovie = (req, res) => {
	Movies.findOne({ _id: req.params.movie_id})
		.then(oneMovie=> res.json(oneMovie))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
}; 



module.exports.deleteAnExistingMovie = (request, response) => {
    Movies.deleteOne({ _id: request.params.movie_id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => res.status(400).json({message:"Something went wrong",error:err}));
}

