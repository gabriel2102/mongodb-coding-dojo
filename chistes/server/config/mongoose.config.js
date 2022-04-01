const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('Connected to database successfully'))
.catch((err)=>console.log('Not Connected by error: '+err));