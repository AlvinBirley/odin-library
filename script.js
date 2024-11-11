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
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
  }
}
//fucntion to create new book object and push it the myLibrary array 
function addBookToLibrary() {
  let bookOne = new Book("LOTR", "Tolkien", 543, "have not read")
  myLibrary.push(bookOne)
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
}
}

addBookToLibrary();
console.log(myLibrary)
upDateCell();

//function to capture field values of modal
function getModalInfo () {
const titleValue = document.getElementById("title").value;
    console.log(titleValue)
    const authorValue = document.getElementById("author").value;
    console.log(authorValue)
    const pagesValue = document.getElementById("pages").value;
    console.log(pagesValue)
    const readValue = document.getElementById("read").value;
    console.log(readValue)
}

//event listener on modal button to grab field values
document.getElementById("add-info").addEventListener("click", getModalInfo);
