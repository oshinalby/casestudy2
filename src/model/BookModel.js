const mongoose = require('mongoose');
const url = "mongodb+srv://surya:BvxNhoInOoDO021k@cluster0.dsz7e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});


const Schema = mongoose.Schema;



const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;