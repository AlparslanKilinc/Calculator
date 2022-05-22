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
    const delButton = document.getElementById('delete');
    const numberButtons = document.querySelectorAll('[data-number]');
    const operatorButtons = document.querySelectorAll('[data-operation]');
    

/// Event Handling
     equalsButton.addEventListener('click', calculate);
     clearButton.addEventListener('click', clear);
     delButton.addEventListener('click', deleteNumber);

/// Appending number to CurrentDisplay
    ///eat ass
    numberButtons.forEach( (num) => num.addEventListener('click', () => appendNumber(num.textContent)));

    function appendNumber(input){
        if(CurrentDisplay.textContent.includes('.')&& input === '.')return;
        CurrentDisplay.textContent += input;
        hold += input;
    }

    operatorButtons.forEach( (operator) => operator.addEventListener('click', () =>{
            if(currentOperation!==null ){
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
       secondOperand = hold;
       if(firstOperand!=='' && secondOperand!=='')
       {
        result =operate(firstOperand,secondOperand,currentOperation);
       }
       CurrentDisplay.textContent = `${result}`;
       LastDisplay.textContent = `${result}`;
       hold='';
       firstOperand=result; 
    }
    
    function deleteNumber(){
                CurrentDisplay.textContent = CurrentDisplay.textContent.slice(0,-1);
                hold = hold.slice(0,-1);
                // if(CurrentDisplay.textContent==='')clear();
    }

    function clear(){
        CurrentDisplay.textContent = '';
        LastDisplay.textContent = '';
        hold='';
        firstOperand='';
        secondOperand='';
        currentOperation=null;

    }

// Basic Math 
const add = (a,b) => parseFloat(a)+parseFloat(b);
const subtract = (a,b) => parseFloat(a)-parseFloat(b);
const multiply = (a,b) => parseFloat(a)*parseFloat(b);
const divide = (a,b) => {
    if(b===0) return null;
    return parseFloat(a)/parseFloat(b);
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
    }
};





