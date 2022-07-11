


function booksMiddilewear(req, res, next) {
    console.log("Fetching all books");
    next()
}

let books = [
    {
        name: " Anna Karenina",
        content: "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endu..."
    },
    {
        name : " Anna Karenina",
        content : "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endu..."
    },
    {
        name : " Anna Karenina",
        content : "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endu..."
    },
]
function getAllBooks(req, res) {
       res.send(books);
}
function booksNameMiddilewear(req,res,next){
    req.name = req.params.name;
    next()
}
function booksName(req,res){
    res.send({
        booksName : req.name,
    })
}

module.exports = {
    booksMiddilewear,
    getAllBooks,
    booksNameMiddilewear,
    booksName,
}