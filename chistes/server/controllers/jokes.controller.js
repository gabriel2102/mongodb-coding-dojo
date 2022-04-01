const Joke = require('../models/jokes.model');

module.exports.getAllJokes = (req, res) =>{
    Joke.find()
    .then(result => res.json({result}))
    .catch(err => res.json({message: 'Error database', error: err}));
};
module.exports.getJokeById = (req, res) => {
    Joke.findById(req.params.id)
    .then(joke => res.json({joke}))
    .catch(err => res.status(500).json({err}));
};
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({newJoke}))
    .catch(err => res.status(500).json({err}));
};
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(result => res.json({result}))
    .catch(err => res.status(500).json({err}));
};
module.exports.deleteJokeById = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result}))
    .catch(err => res.status(500).json({err}));
};