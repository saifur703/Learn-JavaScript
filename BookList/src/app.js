// Store Classes
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const sbn = document.querySelector("#sbn");
const submitform = document.querySelector("#book-form");

// Book Class: Represent a bok
class Book{
    constructor(title, author, sbn){
        this.title = title;
        this.author = author;
        this.sbn = sbn;
    }
}

// UI handling
class UI{
    // Display books
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(book => {
            UI.addBookToList(book);
        });
    }

    // add book into list
    static addBookToList(book){
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sbn}</td>
            <td><a href="" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    // Clear input value
    static clearFields(title, author, sbn){
        document.querySelector("#title").value="";
        document.querySelector("#author").value="";
        document.querySelector("#sbn").value="";
    }

    // delete Book
    static deleteBook(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove();
        }
    }

    // show alert
    static showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        
        // vanish in 3 seconds
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }

}

// save books if refresh
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem("books") === null){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    };

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index)=>{
            if(book.isbn === isbn){
                books.splice(index, 1)
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
}

// Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks)

// Add a book
submitform.addEventListener("submit", (e)=>{
    e.preventDefault();

    

    if(title.value === "" || author.value === "" || sbn.value === ""){
        UI.showAlert("Please fill-up all the fields.", "danger");
    }else{
        const book = new Book(title.value, author.value, sbn.value);

        // add book to UI
        UI.addBookToList(book);

        // add book to store
        Store.addBook(book);

        // Show success message
        UI.showAlert("The Book is Added Successfully.", "success")

        // Clear Fields from input text
        UI.clearFields();
    }
})

// Remove a Book
document.querySelector("#book-list").addEventListener("click", (e)=>{
    
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show message
    UI.showAlert("The Book is Removed.", "success");

    e.preventDefault();
});