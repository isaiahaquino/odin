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

    const container = document.getElementById('bookContainer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    myLibrary.forEach(function (book, i) {
        if(book == undefined) { return; }
        const newBook = document.createElement('div');
        newBook.className = "book";
        const info = document.createElement('h1');
        info.innerHTML = `${book.title}<br />${book.author}<br />${book.pages} pages`;
        
        const readBtn = document.createElement('button');
        readBtn.textContent = "Read";
        readBtn.setAttribute("type", "button");
        readBtn.setAttribute("onclick", `toggleRead(this)`);
        if (book.read) {
            readBtn.classList.add("btn", "readToggle", "yesRead");
        } else {
            readBtn.classList.add("btn", "readToggle", "notRead");
        }
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("data-index-num", `${i}`);
        removeBtn.setAttribute("onclick", `removeBook(this)`);
        removeBtn.classList.add("btn", "remove");
        
        newBook.appendChild(info);
        newBook.appendChild(readBtn);
        newBook.appendChild(removeBtn);

        const lib = document.getElementById('bookContainer');
        lib.appendChild(newBook);
    });
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";
}

function toggleRead(btn) {

    if (btn.classList.contains('notRead')) {
        btn.classList.remove('notRead');
        btn.classList.add('yesRead');
    } else {
        btn.classList.remove('yesRead');
        btn.classList.add('notRead');
    }
}

function removeBook(book) {
    const books = document.getElementsByClassName('book');
    Array.prototype.forEach.call(books, function (current, i) {
        if (book.dataset.indexNum == i) {
            book.remove();
            myLibrary.splice(i, 1);
        }
        displayBooks();
    });
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function submitClick(event) {
    event.preventDefault();

    const title = document.querySelector('#inputTitle');
    const author = document.querySelector('#inputAuthor');
    const pages = document.querySelector('#inputPages');
    const read = document.querySelector('#inputRead');

    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook);

    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    closeForm();
    displayBooks();
});

const book1 = new Book("The Final Empire", "Brandon Sanderson", 541, true);
const book2 = new Book("The Well of Ascension", "Brandon Sanderson", 590, true);
const book3 = new Book("The Hero of Ages", "Frank Sanderson", 572, false);
const book4 = new Book("The Hero of Ages", "Frank Sanderson", 572, false);
const book5 = new Book("The Final Empire", "Brandon Sanderson", 541, true);
const book6 = new Book("The Well of Ascension", "Brandon Sanderson", 590, true);
const book7 = new Book("The Hero of Ages", "Frank Sanderson", 572, false);
const book8 = new Book("The Hero of Ages", "Frank Sanderson", 572, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);

displayBooks();

