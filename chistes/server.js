require('./server/config/mongoose.config');
const express = require('express');
const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const jokesRoutes = require('./server/routes/jokes.routes')(app);
app.listen(port, () => console.log(`Listening port ${port}`));