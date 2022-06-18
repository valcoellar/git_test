//code js


var M_Memory =0;
var M_Memory2=0;

// *------------------- Functions ----------------------
function PowerOn() {
    // Clear display 
    const Display_Screen = document.querySelector(".N_Result");
    Display_Screen.textContent = "";
    M_Memory2 = 0;
};

function All_Clear (){
    //Clear all variables and stand ready for next
};

function Clear_Display (){
    //Clear only the display
};

function Enter_Digits (param_1){
    // Enter the digits in the display
    M_Memory= Display_Screen.textContent;

    //Enters only 10 digits
if (M_Memory.length != 10 ) {
   
  //  Display_Screen.textContent = Display_Screen.textContent + param_1;
  Display_Screen.textContent = param_1;
}
};

function B_Add () {
    I_Mem = parseInt(Display_Screen.textContent);
    M_Memory2 = M_Memory2 + I_Mem;
    
 //--------------------------------------------------------
 
 
        
     
     console.log(M_Memory2);
     Display_Screen.textContent = M_Memory2.toString();
};

function R_Result () {
     Display_Screen.textContent = M_Memory2;

};



//----------------------Listeners ----------------------
const Display_Screen = document.querySelector(".N_Result");

const Power_Button = document.querySelector(".on_off");
Power_Button.addEventListener("click",PowerOn);

const N7 = document.querySelector(".N_7");
N7.addEventListener("click",Enter_Digits.bind(null, 7),false);

const N8 = document.querySelector(".N_8");
N8.addEventListener("click",Enter_Digits.bind(null, 8),false);

const N9 = document.querySelector(".N_9");
N9.addEventListener("click",Enter_Digits.bind(null, 9),false);

const N4 = document.querySelector(".N_4");
N4.addEventListener("click",Enter_Digits.bind(null, 4),false);

const N5 = document.querySelector(".N_5");
N5.addEventListener("click",Enter_Digits.bind(null, 5),false);

const N6 = document.querySelector(".N_6");
N6.addEventListener("click",Enter_Digits.bind(null, 6),false);

const N1 = document.querySelector(".N_1");
N1.addEventListener("click",Enter_Digits.bind(null, 1),false);

const N2 = document.querySelector(".N_2");
N2.addEventListener("click",Enter_Digits.bind(null, 2),false);

const N3 = document.querySelector(".N_3");
N3.addEventListener("click",Enter_Digits.bind(null, 3),false);

const N0 = document.querySelector(".N_0");
N0.addEventListener("click",Enter_Digits.bind(null, 0),false);

//------------------ operations -----------------------------

const BAdd = document.querySelector(".addition");
BAdd.addEventListener("click",B_Add);

const BEqual = document.querySelector(".equal");
BEqual.addEventListener("click",R_Result);

// to-do: make add 

