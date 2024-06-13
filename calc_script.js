const display = document.getElementById("display");
const display2 = document.getElementById("display2");
const key = document.getElementById("keys");

function appendtodisplay(input){
display.value += input;
display2.value = ' = '+eval(display.value)+' ';
}
function clearTextArea(){
    display.value = "";
    display2.value = "";
}

function calculate(){
    let s = display.value; 
    if(s == '=')
        display.value = ' ';
    display.value= eval(s);
    display2.value = ' = '+eval(s)+' ';

}