// code js


function Clear_New () {
let	NGrid = prompt("How Many --Max64--");
console.log(NGrid);


//create dvis in # NGrid <div>

//--------------------------------
const container = document.querySelector(".grid-container");
		container.setAttribute('style','grid-template-columns: repeat(20,auto)');


const content = document.createElement("div");
	//	content.classList.add("grid-item");
	//	content.textContent = NGrid;
	//	container.appendChild(content);
		

// add using DocumentFragment----
var frag = document.createDocumentFragment();

for(var x = 0; x < 10; x++) {
	var GI = document.createElement("div");
	GI.classList.add("grid-item");
	GI.innerHTML = NGrid;
	frag.appendChild(GI);
}
container.appendChild(frag);
// ------------------------------		

}