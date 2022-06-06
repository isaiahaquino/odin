let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.printBook = function() {
    if (this.read == true) { 
        return `${this.title} by ${this.author}, ${this.pages} pages, read.`;
    } else { 
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for (let book of myLibrary) {
        console.log(book.printBook());
    }
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";
}

// const book1 = new Book("The Final Empire", "Brandon Sanderson", 541, true);
// const book2 = new Book("The Well of Ascension", "Brandon Sanderson", 590, true);
// const book3 = new Book("The Hero of Ages", "Frank Sanderson", 572, false);

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);

// displayBooks();

