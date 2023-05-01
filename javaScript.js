const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
    // 1. Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(){
for(i=0;i<books.length;i++){
    console.log(books[i])
}

}
getAvailableBooks()
// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(author){
    books.author

}
console.log(getBooksByAuthor("J.D.Salinger"))

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(){
let bookTittle=books.push("kidaa")
console.log(bookTittle)
}
addNewBook()
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(bookTitle){
    for (i=0;i<bookTitle.length;i++){
        if(bookTitle[i] ==books.title){
            console.log("false");
        }
        else{
            console.log("book not available");
        }
    } 


}
checkoutBook("The Catcher in the Rye")

// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(bookTittle){
    for (i=0;i<bookTittle.length;i++){
        if(bookTittle[i] ===books.title){
            console.log("true");
        }
        else{
            console.log("book doesn't belong to the library");
        }
    } 


}
returnBook("The Catcher in the Rye")