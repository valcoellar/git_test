//code js

// *------------------- Functions ----------------------
function PowerOn() {
    // Clear display 
    const Display_Screen = document.querySelector(".N_Result");
    Display_Screen.textContent = "";
    // console.log("click it");
};

function All_Clear (){
    //Clear all variables and stand ready for next
};

function Clear_Display (){
    //Clear only the display
};

function Enter_Digits (){
    // Enter the digits in the display
Display_Screen.textContent = Display_Screen.textContent + "7";
    console.log(arguments[0]);
};


//----------------------Listeners ----------------------
const Display_Screen = document.querySelector(".N_Result");

const Power_Button = document.querySelector(".on_off");
Power_Button.addEventListener("click",PowerOn);

const N7 = document.querySelector(".N_7");
N7.addEventListener("click",Enter_Digits(7););




// to-do: add input functions 