/// Variables 
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let hold ='';



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
    // equalsButton.addEventListener('click', evaluate);
    // clearButton.addEventListener('click', clear);
    // delButton.addEventListener('click', deleteNumber);
    // dotButton.addEventListener('click', appendPoint);

/// Appending number to CurrentDisplay

    numberButtons.forEach( (num) => num.addEventListener('click', () => appendNumber(num.textContent)));
    function appendNumber(input){
        LastDisplay.textContent += input;
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
                LastDisplay.textContent += operator.textContent;
                firstOperand = hold;
                currentOperation = operator.textContent;
                hold='';
               
            }
            
           
    }));

//// Functions 
    function calculate(){
       secondOperand = hold;
       let result =operate(firstOperand,secondOperand,currentOperation);
       console.log(result);
       CurrentDisplay.textContent = `${result}`;
       hold='';
       firstOperand=result;
       LastDisplay.textContent=`${result}`;
    }
    



// Basic Math 
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

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
        if(b==='0') return null;
        else return divide(a,b);

        default:
        return null;
    }
};





