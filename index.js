const book = {
    Title: "JavaScript: The Definitive Guide"
    ,author: "David Flanagan"
    ,publishedYear: 2020
    ,Genre: "Programming"
};

console.log('${book.title} - ${book["publishedyear"]}');

book.pageCount = 1096;
// console.log(book);

book.ISBN = "978-14919520023"
// console.log(book);

book.author = ["David Flangan", " Another Author"];
// console.log(book);

book.publishedYear = 2021;
console.log(book);