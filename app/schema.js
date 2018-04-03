const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  user_id: { type: Number, required: true, unique: true },  
  email: { type: String, required: true, unique: false },
  password: { type: String, required: true, unique: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;





















// author = {
// 	"_id": int,
// 	"first_name": string,
// 	"last_name": string
// }

// user = {
// 	"_id": int,
// 	"username": string,
// 	"password": string
// }

// book = {
// 	"_id": int,
// 	"title": string,
// 	"author": int,
// 	"isbn": string,
// 	"slug": string,
// 	"publisher": {
// 		"name": string,
// 		"date": timestamp,
// 		"city": string
// 	},
// 	"available": boolean,
// 	"pages": int,
// 	"summary": string,
// 	"subjects": [string, string],
// 	"notes": [{
// 		"user": int,
// 		"note": string
// 	}],
// 	"language": string
// }

// // embedded documents:
// book.publisher:
// {
// 	publisher_name: "Everyman's Library",
// 	date: ISODate("1991-09-19T00:00:00z"),
// 	city: "London"
// }

// // embedded arrays:
// book.subjects: ["Love stories", "1920s", "Jazz Age"],

// // embedded arrays of documents
// book.notes: [
// 	{ user: 1, note: "One of the best..."},
// 	{ user: 2, note: "It's hard to..."}
// ],

// // all books for a specific author
// author = db.authors.findOne({first_name: "F. Scott", last_name: "Fitzgerald"});
// db.books.find({author: author._id})

// // query for books by title:
// db.books.find({title: "The Great Gatsby"})

// // query for books that specific user has made notes in
// db.books.find({notes.user: 1})

// // add notes to a book
// note = { user: 1, note: "I did NOT like this book." }
// db.books.update({ _id: 1}, { $push: { notes: note }})

// // atomic operations
// $set  // set a value
// $unset // unset a value
// $inc // increment an integer
// $push // append a value to an array
// $pushAll // append several values to an array
// $pull // remove a value from an array
// $pullAll // remove several values from an array
// $bit // bitwise operation
// $addToSet // adds a value to a set if it doesn't already exist
// $rename // renames a field