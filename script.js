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
function upDateCell (){
for (let i=0; i<myLibrary.length; i++) {
    let addToLib= document.querySelector(`td[data-value="${i+1}"]`)
if(addToLib){
    addToLib.innerHTML=myLibrary[i]
}
else {
    console.log("This cell doesn't exist.")
}
//Create button to remove book from library
const remove = document.createElement('button');
//Make button say "remove book"
remove.textContent = "Remove book"
//Give class of "remove" to button 
remove.classList.add("remove")
//append remove book button to table cell
addToLib.appendChild(remove)


//select the remove button 
const getRemoveBtn = document.querySelectorAll('.remove');

//event listener to capture the data-value of the cell that holds the remove book button 
getRemoveBtn.forEach(button => {
    button.addEventListener('click', function(event) {
        //select cell of remove button
        const parentTd = event.target.closest('td');
        
        // Get the 'data-value' attribute from the parent <td>(cell)
        const dataValue = parentTd.getAttribute('data-value');
        
        // Log or use the data-value as needed
        console.log("The data-value of the parent <td> is:", dataValue);
    });
});

}
}

//event listener on modal button to grab field values
document.getElementById("add-info").addEventListener("click", addBookToLibrary);
