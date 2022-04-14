// code js

function Clear_Space () {
// ---- ToDo
// make the button clear actually clear´s the grid.
const element = document.getElementById("grid-item");
var elements = document.all('grid-item').length;


for (let i = 0; i < elements; i++) {
  element.remove();
  console.log(elements);
}








// ------------------------------

}

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
	GI.setAttribute("id","grid-item");
	GI.classList.add("grid-item");
	// GI.innerHTML = NGrid;

	// create change color hover effect
	for (var i = 0 ; i < NGrid; i++) {
		GI.addEventListener("mouseover", function(Hover_function){
        	Hover_function.target.style.backgroundColor = 'black';
    				});
									}
 	// ---------------------------------									
	frag.appendChild(GI);
}
container.appendChild(frag);
// ------------------------------		

}


