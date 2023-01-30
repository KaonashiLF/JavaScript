
var v = 'This is a variable and can be changed.';
let l = "This is a variable but can't be redeclared.";
const ct = "This is a constant and can not be redeclared and reasigned." 


let button = document.getElementById("pressButton");


function studyIfElse(){

    for (const x of Array(4).keys()){
        choice = x
        if (choice == 0) {

            console.log('Hello world!');
    
        } else if (choice == 1) {
    
            console.log('Variable characteristics: ', v);
    
        } else if (choice == 2){
            
            console.log('"Let" characteristics: ', l)
    
        } else if (choice == 3) {
    
            console.log('"const" characteristics: ', ct)
    
        }
    }
    
};
function clearConsole(){
    console.clear()
}


//studyIfElse()