const UserController = require("../controllers/user.controllers");
const MovieController = require("../controllers/movie.controllers");
const contactController = require('../controllers/contact.controller');

module.exports = app => {
    app.get("/movies", MovieController.getMovies);
    app.post("/new/movie", MovieController.createNewMovies);
    app.get("/users", UserController.getUsers);
    app.post("/register", UserController.createNewUser);
    app.post("/login",UserController.login)
    app.delete("/users/delete/:user_id", UserController.deleteAnExistingUser);
     app.post("/api/contacts", contactController.createContact)
    app.get('/api/contacts',contactController.getAllContacts);
    app.get('/api/contact/:id', contactController.getOneContact);
    app.get("/movie/:movie_id",MovieController.findOneMovie)
        app.get("/movies/:movie_id",MovieController.findOneMovie)

    app.put("/update/:movie_id", MovieController.updateExistingMovies);
        app.delete("/movies/delete/:movie_id", MovieController.deleteAnExistingMovie);
};