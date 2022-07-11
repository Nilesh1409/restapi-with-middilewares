const express = require("express");
const {booksMiddilewear,getAllBooks,booksNameMiddilewear,booksName} = require("./reqFun")

const app = express();


app.get("/books",booksMiddilewear, getAllBooks)
app.get("/book/:name",booksNameMiddilewear,booksName)




app.listen(3000)