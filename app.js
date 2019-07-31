// Basic ES5 OOP : constructor and prototype method
//Book constructor: create book object

// Step1: Create constructor add snippet : book and UI method... on submit shows message
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor: set of prototype method: add book to the list etc
function UI() {}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    console.log('test'); // test1

    e.preventDefault();
});

// Step2: on submit shows the entered data from input field 
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor: set of prototype method: add book to the list etc
function UI() {}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
function(e){
    //Get form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    console.log(title,author,isbn); // test2

    e.preventDefault();
});

// Step3: Once submit, Instantiate the book constructor/ book object, and Instantiate UI: Final code
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor: set of prototype method: add book to the list etc
function UI() {
    // create prototype

    // Add Book to List
    UI.prototype.addBookToList = function(book){
        // console.log(book);
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // console.log(row); // shows row
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
function(e){
    //Get form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate book
    const book = new Book(title,author,isbn);
    console.log(book); // test3

    // Instantiate UI
    const ui = new UI();

    // console.log(ui); // Part of the UI object prototype. method is in prototype

    // o/p
    // UI {}
    // __proto__:
    // addBookToList: ƒ (book)
    // constructor: ƒ UI()
    // __proto__: Object

    // Add book to the list
    ui.addBookToList(book);

    // clear fields
    ui.clearFields();

    e.preventDefault();
});