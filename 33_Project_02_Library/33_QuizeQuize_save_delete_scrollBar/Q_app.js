/**Quick Quize📌📌📌
1> Save in localStorage🤩
2> Delete button🤩
3> Add scroll bar to view🥵😵🥴*/
class Book {
    constructor(givenName, givenAuthor, givenType) {
        this.name = givenName;
        this.author = givenAuthor;
        this.type = givenType;
    }
}
class Display {//📌📌📌


    add() {
        let tableBody = document.getElementById("tableBody");

        let saveBooks = localStorage.getItem("books");
        let myArr;
        if (saveBooks === null) {
            myArr = [];
        }
        else {
            myArr = JSON.parse(saveBooks);
        }

        let html = '';
        myArr.forEach(function (element, index) {
            html += `<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="button" id="${index}" onclick ="deleteBook(this.id)" class="btn btn-danger">Delete Book</button></td>
        </tr>`
        })

        if (myArr != 0) {
            tableBody.innerHTML = html;
        }
        else {
            tableBody.innerHTML = "add please";

        }


    }
    clear() {
        let libraryFrom = document.getElementById("libaryFrom");
        libraryFrom.reset();
    }



    validate(book) {
        if ((book.name.length < 2 || book.author.length) < 2) {
            return false;
        }
        else {
            return true;
        }
    }


    show(type, displayMessage) {
        let message = document.getElementById("message");
        let boldText;
        if (type == "success") {
            boldText = "Success";
        }
        else {
            boldText = "Error"
        }
        message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>${boldText}</strong> ${displayMessage}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
    
            `
        setTimeout(function () {
            message.innerHTML = '';
        }, 5000);
    }
}


//----------------------------------------------
let display = new Display();
display.add();
//----------------------------------------------





//ADD SUBMIT FORM LISTENER TO LIBARY FORM//📌📌📌
let libraryFrom = document.getElementById("libaryFrom");
libraryFrom.addEventListener("submit", libraryFromSubmit);


function libraryFromSubmit(e) {
    // console.log("You have submitted library form");
    let Name = document.getElementById("bookName").value;
    let Author = document.getElementById("author").value;
    let Type;
    // fiction, programming and cooking
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        Type = fiction.value;
    }
    else if (programming.checked) {
        Type = programming.value;
    }
    else if (cooking.checked) {
        Type = cooking.value;
    }

    let book = new Book(Name, Author, Type);
    // console.log(book);

    e.preventDefault();




    let display = new Display();
    if (display.validate(book)) {
        // display.add();
        display.clear();
        display.show("success", "   Your book has been successfully added");


    }
    else {
        display.show("danger", "   Sorry, you cannot add this book.");

    }

    //-------------------------------------------------------------------------------
    //SAVE BOOK OBJECT IN LOCAL STORAGE//📌📌📌
    //-------------------------------------------------------------------------------
    let saveBooks = localStorage.getItem("books");
    let myArr;
    if (saveBooks === null) {
        myArr = [];
    }
    else {
        myArr = JSON.parse(saveBooks);
    }


    if (display.validate(book)) {
        myArr.push(book);
    }
    // myArr.push(JSON.parse(book));
    // myArr.push(book);
    localStorage.setItem("books", JSON.stringify(myArr));

    console.log(myArr);
    //----------------------------------------------



        display.add();
}








//-----------------------------------------------------
//DELETE BOOK//📌📌📌
//-----------------------------------------------------

function deleteBook(index){
    // console.log("i am deleting", index);
    let saveBooks = localStorage.getItem("books");
    let myArr;
    if (saveBooks === null) {
        myArr = [];
    }
    else {
        myArr = JSON.parse(saveBooks);
    }
    myArr.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(myArr));
    // showDisplay();



    let display = new Display();
        display.add();
}
