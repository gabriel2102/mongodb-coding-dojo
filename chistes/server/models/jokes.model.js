const { Schema, model } = require('mongoose');

const JokeSchema = new Schema({
    setup: {
        type: String,
        required: [true, 'El campo setup es requerido'],
        minlength: [10, 'El campo setup debe contener mínimo 10 caracteres']
    },
    punchline: {
        type: String,
        required: [true, 'El campo punchline es requerido'],
        minlength: [3, 'El campo punchline debe contener mínimo 3 caracteres']
    }
});
const Joke = model('Joke', JokeSchema);

module.exports = Joke;