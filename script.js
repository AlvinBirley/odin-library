//array of all the books in my library
const myLibrary = []

//selecting the moadl 
const modal = document.querySelector(".modal")

//selecting the add book button to open the modal 
const modalBtn = document.querySelector(".btn")

//select the backdrop div
const backdrop = document.querySelector(".backdrop");


const addBtn = document.getElementById(".add")

modalBtn.addEventListener('click', () => {
    modal.style.display = "flex";
    backdrop.style.display = "block"; // Show the backdrop
    setTimeout(() => {
        modal.classList.add('show'); 
    }, 10);

   
    document.body.classList.add('modal-open');
})

//book conscructor
function Book(title, author, pages, read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;

  this.toString = function() {
    return `Title:${this.title}<br>
     Author:${this.author}<br>
     Page count:${this.pages}<br>
     Read yet?:${this.read}`
  }
}
//fucntion to create new book object and push it the myLibrary array 
function addBookToLibrary() {
    const titleValue = document.getElementById("title").value;
    const authorValue = document.getElementById("author").value;
    const pagesValue = document.getElementById("pages").value;
    const readValue = document.getElementById("read").value;
  let bookOne = new Book(titleValue, authorValue, pagesValue, readValue)
  myLibrary.push(bookOne)
  upDateCell();
  modal.style.display = "none";
  backdrop.style.display = "none";
  document.body.classList.remove('modal-open');
}

//function that loops over myLibrary and updates cells with book info 
function upDateCell() {
    // Clear all table cells first to reset
    const allCells = document.querySelectorAll('td');
    allCells.forEach(cell => {
        cell.innerHTML = ''; // Clear cell content
    });

    // Now, loop over the myLibrary array to populate the table with books
    for (let i = 0; i < myLibrary.length; i++) {
        const addToLib = document.querySelector(`td[data-value="${i+1}"]`);
        if (addToLib) {
            // Update cell with book info
            addToLib.innerHTML = myLibrary[i].toString();

            
            // Create and append "remove book" button
            const remove = document.createElement('button');
            remove.textContent = "Remove book";
            remove.classList.add("remove");
            addToLib.appendChild(remove);

            // Add event listener for the remove button
            remove.addEventListener('click', function(event) {
                const parentTd = event.target.closest('td');
                const dataValue = parentTd.getAttribute('data-value');

                // Remove the book from myLibrary
                myLibrary.splice(i, 1); // Use splice to properly remove the book

                // Re-render the table
                upDateCell();
            });
        } else {
            console.log("This cell doesn't exist.");
        }
    }
}

//event listener on modal button to grab field values
document.getElementById("add-info").addEventListener("click", addBookToLibrary);
