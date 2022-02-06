
let MyButton = document.querySelector(".Boton1");
let MyText = document.querySelector("p");

MyButton.addEventListener("click", () => {
    MyButton.textContent = "Ouch";
    MyText.textContent = "Clicked";
});

MyButton.addEventListener("dblclick", () => {
    MyButton.textContent ="Hay";
    MyText.textContent = "Double CLick";
});


