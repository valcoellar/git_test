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
    Display_Screen.textContent = "";
    M_Memory = 0;
    M_Memory2 = 0;
};

function Clear_Display (){
    //Clear only the display
    Display_Screen.textContent = "";
};

function Enter_Digits (param_1){
    // Enter the digits in the display
    M_Memory= Display_Screen.textContent; 

    //Enters only 10 digits
if (M_Memory.length != 10 ) {
   Display_Screen.textContent = Display_Screen.textContent + param_1;
}
};

// ------------- OPS --------------------
function Add () {
    console.log("add");
};

function subtract () {
    console.log("subtract");
};

function multiply () {
    console.log("multiply");
};

function divide () {
    console.log("divide");
};
// ------------- END OPS -----------------

function Read_OP (Param_1) {
console.log(Param_1);

};



function Operate () {
     Display_Screen.textContent = M_Memory2;


     //takes an operator and 2 numbers
     // and then calls one of the above 
     //functions on the numbers.

console.log("operate");
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

const Clear_All = document.querySelector(".Button_AC");
Clear_All.addEventListener("click",All_Clear);

const Clear_C = document.querySelector(".Button_C");
Clear_C.addEventListener(".Button_C",Clear_Display);


const BAdd = document.querySelector(".addition");
BAdd.addEventListener("click",Read_OP.bind(null ,"+"),false);

const BSubstract = document.querySelector(".substract");
BSubstract.addEventListener("click",Read_OP.bind(null, "-"),false);

const BMultiplication = document.querySelector(".multiplication");
BMultiplication.addEventListener("click",Read_OP.bind(null, "*"),false);

const BDivision = document.querySelector(".division");
BDivision.addEventListener("click",Read_OP.bind(null,"/"),false);


const BEqual = document.querySelector(".equal");
BEqual.addEventListener("click",Operate);

// to-do: make add 

