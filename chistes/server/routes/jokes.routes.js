const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes/', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getJokeById);
    app.post('/api/jokes/create', JokesController.createJoke);
    app.put('/api/jokes/update/:id', JokesController.updateJoke);
    app.delete('/api/jokes/delete/:id', JokesController.deleteJokeById);
}