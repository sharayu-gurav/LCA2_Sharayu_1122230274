// Access elements using two traversal methods
const title = document.querySelector(".title"); // Traversal method 1
const logo = document.getElementsByTagName("img"); // Traversal method 2

// Navigate the DOM using a navigation property
console.log("The parent of title is:", title.parentElement);
     
      document.querySelector(".explore-btn").addEventListener("click", function () {
    const newNote = document.createElement("p");
    newNote.textContent = "Welcome to Antique Aangan!";
    newNote.classList.add("welcome-text");
    newNote.style.color = "beige";
    document.querySelector(".content").append(newNote);
});
  
   
