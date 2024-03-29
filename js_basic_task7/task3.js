const Library = {
    books: [],
    addBook : function(bookName,bookAuthor,bookYear,bookId){
        if(this.books.some(book => book.bookId === bookId)){
            console.log("Error , this ID already exist")
        }else{
        this.books.push({bookName,bookAuthor,bookYear,bookId})
    }},
    printBookInfo: function(bookId){
        console.log(`Book with id ${bookId}`)
        console.log(this.books.filter(book => book.bookId === bookId))
    },
    printAllBooks: function(){
        console.log(`All books:`)
        console.log(this.books)
    }
}
Library.addBook("Harry Potter","Zabyv",2010,1);
Library.addBook("Shota","Steaven King",1544,2);
Library.printBookInfo(2);
Library.printAllBooks();