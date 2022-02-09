const mongoose = require('mongoose');

const url = "mongodb+srv://surya:BvxNhoInOoDO021k@cluster0.dsz7e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;