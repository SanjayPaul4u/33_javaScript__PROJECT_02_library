console.log("This is project 2 and we will be make One libary...");

// CONSTRUCTOR
function Book(givenName, givenAuthor, givenType) {
    this.name = givenName;
    this.author = givenAuthor;
    this.type = givenType;
}




// DISPLAY CONSTRUCTORS
function Display() {

}




//ADD METHOD TO DISPLAY PROTOTYPE
//implement the add function
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById("tableBody");
    let UiString = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>
    `;
    tableBody.innerHTML += UiString;
}

//
//implement the clear function
Display.prototype.clear = function () {
    let libraryFrom = document.getElementById("libaryFrom");
    libraryFrom.reset();
}


//implement the validate function
Display.prototype.validate = function (book) {
    if(book.name.length<2 ||book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

//implement the validate function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>messge:</strong> ${displayMessage}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
    
            `
        setTimeout(function() {
            message.innerHTML = '';
        }, 5000);
}





//ADD SUBMIT FORM LISTENER TO LIBARY FORM
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
    console.log(book);

    e.preventDefault();




    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "   Your book has been successfully added");
    }
    else {
        display.show("danger", "   Sorry, you cannot add this book.");

    }

}