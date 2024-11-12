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
function Book(title, author, pages) {
  this.title=title;
  this.author=author;
  this.pages=pages;

  this.toString = function() {
    return `Title:${this.title}<br>
     Author:${this.author}<br>
     Page count:${this.pages}`
  }
}

// Add toggleRead method to the Book prototype
Book.prototype.toggleRead = function() {
    // Toggle the read status between 'Yes' and 'No'
    this.read = (this.read === 'Yes') ? 'No' : 'Yes';
  };
  
  // Function to create new book object and push it to the myLibrary array
  function addBookToLibrary() {
    const titleValue = document.getElementById("title").value;
    const authorValue = document.getElementById("author").value;
    const pagesValue = document.getElementById("pages").value;
    
    let bookOne = new Book(titleValue, authorValue, pagesValue);
    myLibrary.push(bookOne);
    upDateCell();
    modal.style.display = "none";
    backdrop.style.display = "none";
    document.body.classList.remove('modal-open');
  }
  
  // Function to update the table cells with book information
function upDateCell() {
    // Clear all table cells first to reset
    const allCells = document.querySelectorAll('td');
    allCells.forEach(cell => {
      cell.innerHTML = ''; // Clear cell content
    });

    // Loop over the myLibrary array to populate the table with books
    for (let i = 0; i < myLibrary.length; i++) {
      const addToLib = document.querySelector(`td[data-value="${i+1}"]`);
      if (addToLib) {
        // Create a wrapper div to hold the book info and the buttons
        const cellWrapper = document.createElement('div');
        cellWrapper.classList.add('cell-wrapper');

        // Update cell with book info
        const bookInfo = document.createElement('div');
        bookInfo.innerHTML = myLibrary[i].toString();
        cellWrapper.appendChild(bookInfo);

        // Create toggle button to change read status
        const toggle = document.createElement('button');
        toggle.textContent = myLibrary[i].read === 'Yes' ? 'Read' : 'Not Read';
        toggle.classList.add('toggle-read');
        cellWrapper.appendChild(toggle);

        // Add event listener to the toggle button to change the read status
        toggle.addEventListener('click', function(event) {
          // Toggle the read status of the book
          myLibrary[i].toggleRead();

          // Update the button text to reflect the new read status
          toggle.textContent = myLibrary[i].read === 'Yes' ? 'Read' : 'Not Read';
        });

        // Create and append "remove book" button
        const remove = document.createElement('button');
        remove.textContent = "Remove book";
        remove.classList.add("remove");
        cellWrapper.appendChild(remove);

        // Add event listener for the remove button
        remove.addEventListener('click', function(event) {
          const parentTd = event.target.closest('td');
          const dataValue = parentTd.getAttribute('data-value');

          // Remove the book from myLibrary
          myLibrary.splice(i, 1); // Use splice to properly remove the book

          // Re-render the table
          upDateCell();
        });

        // Append the wrapper to the table cell
        addToLib.appendChild(cellWrapper);
      }
    }
}
  
  // Event listener on modal button to grab field values
  document.getElementById("add-info").addEventListener("click", addBookToLibrary);
