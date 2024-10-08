const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Users = mongoose.model('Users', userSchema);

const bookSchema = new mongoose.Schema({
    name: String,
    available: Number,
    author: String,
    publicationYear: Number,
    img: {
        data: Buffer,
        contentType: String,
    }
});

const Book = mongoose.model('Book', bookSchema);

const borrowerSchema = new mongoose.Schema({
    book: String,
    name: String,
    phone: Number,
    borrowedDateTime: String,
});

const Borrower = mongoose.model('Borrower', borrowerSchema);

const returnerSchema = new mongoose.Schema({
    book: String,
    name: String,
    phone: Number,
    borrowedDateTime: String,
    returnedDateTime: String,
});

const Returner = mongoose.model('Returner', returnerSchema);

module.exports = {
    Book, Borrower, Users, Returner
};
