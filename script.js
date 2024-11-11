//array of all the books in my library
const myLibrary = ["LOTR", "Bible", "The Illiad", ["book1", "book2", "book3"]];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
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

upDateCell();