//code js

// *------------------- Functions ----------------------
function PowerOn() {
    // Clear display and puts 0
    const Display_Screen = document.querySelector(".N_Result");
    Display_Screen.textContent = "0";
    // console.log("click it");
};

function All_Clear (){
    //Clear all variables and stand ready for next
};

function Clear_Display (){
    //Clear only the display
};




//----------------------Listeners ----------------------

const Power_Button = document.querySelector(".on_off");
Power_Button.addEventListener("click",PowerOn);



// to-do: add input functions 