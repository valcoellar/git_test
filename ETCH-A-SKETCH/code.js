// code js


function Clear_New () {
let	NGrid = prompt("How Many --Max64--");
console.log(NGrid);


//create dvis in # NGrid <div>

//--------------------------------
const container = document.querySelector(".grid-container");

const content = document.createElement("div");
		content.classList.add("content");
		content.textContent = "Text";


		container.appendChild(content);

}