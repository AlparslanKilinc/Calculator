/// Variables 
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let hold ='';
let result='';

/// Get Elements 
    const LastDisplay = document.getElementById('Last-Operation');
    const CurrentDisplay = document.getElementById('Current-Operation');
    const dotButton = document.getElementById('dot');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
    const numberButtons = document.querySelectorAll('[data-number]');
    const operatorButtons = document.querySelectorAll('[data-operation]');
    const signButton = document.querySelector('#sign');
 
    

/// Event Handling
     equalsButton.addEventListener('click', calculate);
     clearButton.addEventListener('click', clear);
     signButton.addEventListener('click',addSign);
     operatorButtons.forEach((btn)=> btn.classList.add('effect'));

/// Appending number to CurrentDisplay
    numberButtons.forEach( (num) => num.addEventListener('click', () => appendNumber(num.textContent)));

    function appendNumber(input){
      
        if(result!==''){
            if(CurrentDisplay.textContent+input===result+input || CurrentDisplay.textContent*-1+input===result*-1+input){
                clear();
            } 
        }
        
        if(CurrentDisplay.textContent.includes('.')&& input === '.')return;
        CurrentDisplay.textContent += input;
        hold += input;
          
    }
   ///// Operations 
    operatorButtons.forEach( (operator) => operator.addEventListener('click', () =>{
       
        
        if(LastDisplay.textContent.charAt(LastDisplay.length)===operator.textContent && operate.textContent==='-')return;
        if(LastDisplay.textContent.charAt(LastDisplay.textContent.length-1)==='-')return;
            if(currentOperation!==null){
            calculate();
            currentOperation=operator.textContent;
            LastDisplay.textContent += operator.textContent;
            }
            else 
            {
                LastDisplay.textContent=CurrentDisplay.textContent;
                LastDisplay.textContent += operator.textContent;
                firstOperand = hold;
                currentOperation = operator.textContent;
                hold='';
               
            }
            CurrentDisplay.textContent='';
           
    }));

//// Functions 
    function calculate(){
        if(LastDisplay.textContent==='') return;
       secondOperand = hold;
       if(secondOperand==='')return;
       if(firstOperand!=='' && secondOperand!=='')
       {
        result =operate(firstOperand,secondOperand,currentOperation);
       }
       CurrentDisplay.textContent = `${Number(result)}`;
       LastDisplay.textContent = `${Number(result)}`;
       hold='';
       firstOperand=result; 
       

    }

    function clear(){
       

        if(CurrentDisplay.textContent.length===0 || CurrentDisplay.textContent.slice(0,-1)===`${result}`.slice(0,-1)){
         CurrentDisplay.textContent = '';
         LastDisplay.textContent = '';
         hold='';
         firstOperand='';
        secondOperand='';
        currentOperation=null;
        
            }else{
            CurrentDisplay.textContent=CurrentDisplay.textContent.slice(0,-1);
            hold= hold.slice(0,-1);
         }
       
    }

    function addSign(){
        if(CurrentDisplay.textContent==='-')return;

        if(CurrentDisplay.textContent==='' && hold===''){
            CurrentDisplay.textContent='-';
            hold = '-';
        }
         else if(`${result}`===CurrentDisplay.textContent){
                CurrentDisplay.textContent=CurrentDisplay.textContent*'-1';
                LastDisplay.textContent=CurrentDisplay.textContent;
                firstOperand=CurrentDisplay.textContent;
            }else{
                CurrentDisplay.textContent=CurrentDisplay.textContent*'-1';
                hold=CurrentDisplay.textContent;
            }
           
           
        }
      
        
    

    
// Basic Math 
const add = (a,b) => parseFloat(a)+parseFloat(b);
const modulo = (a,b) => parseFloat(a)%parseFloat(b);
const subtract = (a,b) => parseFloat(a)-parseFloat(b);
const multiply = (a,b) => parseFloat(a)*parseFloat(b);
const divide = (a,b) => {
    if(b===0){
        return null;
        
    }else return (parseFloat(a)/parseFloat(b)).toFixed(2);
    
}
const operate = (a,b,operator) =>{
    a=Number(a);
    b=Number(b);
    switch(operator){

        case '+':
        return add(a,b);
       
        case '-': 
        return subtract(a,b);
       
        case 'x': 
        return multiply(a,b);
      
        case '/':
        return divide(a,b);

        case '%':
        return modulo(a,b);
    }
};





