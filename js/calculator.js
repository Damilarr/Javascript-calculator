'use strict'
let opera =""
let hOneValue;
let finalAns;
let firstValue ='';
let secondValue = '';
function display(value){ 
    // if (finalAns){
    //     hOneValue = ''
    //      console.log('noooooooooo');
    // }
    if (h1.innerHTML == 0){
        document.getElementById('h1').innerHTML= '';
    }
    if (document.getElementById('h1').innerHTML == finalAns){
        document.getElementById('h1').innerHTML= " "
        document.getElementById('h6').innerHTML = " "
    }
   
    document.getElementById('h1').innerHTML += value;
}
function clearScreen(type){
    if (type == 'C'){
    document.getElementById('h1').innerHTML= '';
    document.getElementById('h6').innerHTML= "";
    } else if (type == 'CE') {
        if (h1.innerHTML == finalAns){
            document.getElementById('h1').innerHTML= 0;
            document.getElementById('h6').innerHTML= "";
        } else {
            document.getElementById('h1').innerHTML= 0;
        }  
    }
}
function deleteLast(){
    let val = document.getElementById('h1').innerHTML;
        val.toString;
        document.getElementById('h1').innerHTML = val.slice(0,-1);
    if (h1.innerHTML == ''){
        h1.innerHTML = 0
    }
}
function square(){
    let val = document.getElementById('h1').innerHTML
    finalAns = Number(val)**2;
   document.getElementById('h6').innerHTML = `sqr(${val})`;
    document.getElementById('h1').innerHTML = finalAns;
}
function inverse(){
    let val = document.getElementById('h1').innerHTML
    let finalAns = 1/Number(val);
   document.getElementById('h6').innerHTML = `1/(${val})`;
    document.getElementById('h1').innerHTML = finalAns;
}
function root(){
    let val = document.getElementById('h1').innerHTML
    finalAns = Number(val)**0.5;
   document.getElementById('h6').innerHTML = `root(${val})`;
    document.getElementById('h1').innerHTML = finalAns;
}
function percentage(){
    if (h1.innerHTML == finalAns){
        let val = document.getElementById('h1').innerHTML
        finalAns = Number(val)/100;
        document.getElementById('h6').innerHTML = finalAns;
        document.getElementById('h1').innerHTML = finalAns;
    } else {
        h1.innerHTML = 0
        h6.innerHTML = 0
    }
}
function plusOrMinus(){
    let val = document.getElementById('h1').innerHTML
    let finalAns = Number(-val);
   document.getElementById('h6').innerHTML = `negate(${val})`;
    document.getElementById('h1').innerHTML = finalAns;
}
function operator(op){
    if (opera) {
        equal()
    }
    opera=op
    hOneValue = document.getElementById('h1').innerHTML;
    document.getElementById('h6').innerHTML = `${hOneValue} ${opera}`;
    document.getElementById('h1').innerHTML = " ";
}
function equal(){
    firstValue = hOneValue
    secondValue = document.getElementById('h1').innerHTML
    if (opera == "+"){     
       finalAns = Number(firstValue) + Number(secondValue);
     
    } else if (opera == "-") {
        finalAns = Number(firstValue) - Number(secondValue);
      
    } else if (opera == "/") {
        finalAns = Number(firstValue) / Number(secondValue);
      
    } else if (opera == "*") {
        finalAns = Number(firstValue) * Number(secondValue);
      
    }

    h6.innerHTML =`${firstValue} ${opera} ${secondValue} =`
    h1.innerHTML = finalAns;
    if (finalAns){
        opera ="";
        // hOneValue += 0;
        // firstValue += 0;
        // secondValue += 0;
    }
}
