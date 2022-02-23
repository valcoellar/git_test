// code js


function Clear_New () {
let	NGrid = prompt("How Many --Max64--");
console.log(NGrid);


//create dvis in # NGrid <div>

//--------------------------------
const container = document.querySelector(".grid-container");

const content = document.createElement("div");
		content.classList.add("grid-item");
		content.textContent = NGrid;
		container.style.display = "grid";
		container.setAttribute('style','grid-template-columns: repeat(20,auto)');
		

// div.setAttribute('style', 'width:330px; float:left');
		//container.style("grid-template-columns", "repeat(20,auto)");


		


		container.appendChild(content);

}