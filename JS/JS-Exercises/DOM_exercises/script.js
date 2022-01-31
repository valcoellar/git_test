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
	