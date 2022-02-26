// code js


function Clear_New () {
let	NGrid = prompt("How Many --Max64--");
	if (NGrid > 64 ) {NGrid = 64}
	console.log(NGrid * NGrid);

//create dvis in # NGrid <div>

//--------------------------------
const container = document.querySelector(".grid-container");
  	container.setAttribute('style','grid-template-columns: repeat(' +NGrid+',1fr);grid-template-rows: repeat(' +NGrid+', 1fr))');

// add using DocumentFragment----
var frag = document.createDocumentFragment();

for(var x = 0; x < (NGrid * NGrid); x++) {
	var GI = document.createElement("div");
	GI.classList.add("grid-item");
	// GI.innerHTML = NGrid;
	frag.appendChild(GI);
}
container.appendChild(frag);
// ------------------------------		

}

