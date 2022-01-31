// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
		content.classList.add('content');
		content.textContent = 'This is the glorious text-content!';

	container.appendChild(content);

// -----------------------------------

// Add the following elements to the container using 
// ONLY javascript and the DOM methods shown above.
// a <p> with red text that says “Hey I’m red!”

	const content2 = document.createElement("p");
		// content2.classList.add("content2");    // add class 
			content2.textContent = "Hey I am red!";
			content2.style.color = "red"; 
	container.appendChild(content2);
	
// -----------------------------------
// an <h3> with blue text that says “I’m a blue h3!”	

	const content3 = document.createElement("h3");
			content3.textContent = "I am a blue h3!";
			content3.style.color = "blue";
	container.appendChild(content3);
	
// a <div> with a black border and pink background color with the 
// following elements inside of it:


// Hint for this one: after creating the <div> with createElement,
//append the <h1> and <p> to it before adding it to the container.	

const extracontent = document.createElement('div');
		extracontent.classList.add('extradiv');
		extracontent.style.backgroundColor = "pink";
	document.body.appendChild(extracontent);

// another <h1> that says “I’m in a div”
const container2 = document.querySelector('.extradiv');

	const content4 = document.createElement("h1");
		 content4.textContent = "I am in a div";
	
	container2.appendChild(content4);

// a <p> that says “ME TOO!”
