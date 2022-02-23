// code js


function Clear_New () {
let	NGrid = prompt("How Many --Max64--");
console.log(NGrid);


//create dvis in # NGrid <div>

//--------------------------------
const container = document.querySelector(".grid-container");
	  container.setAttribute('style','grid-template-columns: repeat('+NGrid+',auto)');

// add using DocumentFragment----
var frag = document.createDocumentFragment();

for(var x = 0; x < NGrid; x++) {
	var GI = document.createElement("div");
	GI.classList.add("grid-item");
	GI.innerHTML = NGrid;
	frag.appendChild(GI);
}
container.appendChild(frag);
// ------------------------------		

}