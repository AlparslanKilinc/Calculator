/// Variables 
    let firstOperand = '';
    let secondOperand = '';
    let currentOperation = null;
    let hold ='';
    let result='';

/// Get Elements 
    const LastDisplay = document.getElementById('Last-Operation');
    const CurrentDisplay = document.getElementById('Current-Operation');
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
     window.addEventListener('keydown', handleKeyboardInput);
     numberButtons.forEach( (num) => num.addEventListener('click', () => appendNumber(num.textContent)));
     operatorButtons.forEach( (operator) => operator.addEventListener('click',()=> appendOperator(operator.textContent)));
    

//// Functions 
    function appendNumber(input){
        if(CurrentDisplay.textContent)
        if(CurrentDisplay.textContent==='0'){
            clear();
            result='';
        
        }
        if(result!=='' ){
            if(CurrentDisplay.textContent+input===result+input || CurrentDisplay.textContent*-1+input===result*-1+input){
                clear();
            } 
        }
        if(CurrentDisplay.textContent.includes('.')&& input === '.')return;
        CurrentDisplay.textContent += input;
        hold += input;
    }

    function appendOperator(operator){
        if(operator==="*") operator = 'x';
        if(CurrentDisplay.textContent==='0'){
            clear();
            result='';
            return;
        }
        if(LastDisplay.textContent+CurrentDisplay.textContent===LastDisplay.textContent)return;
            if(currentOperation!==null){
            calculate();
            currentOperation=operator;
            LastDisplay.textContent += operator;
            }
            else 
            {
                LastDisplay.textContent=CurrentDisplay.textContent;
                LastDisplay.textContent += operator;
                firstOperand = hold;
                currentOperation = operator;
                hold='';
            }
            CurrentDisplay.textContent='';
    }

    function calculate(){
      if(LastDisplay.textContent===''&& LastDisplay.textContent!=='0') return;
       secondOperand = hold;
       if(secondOperand==='')return;
       if(firstOperand!=='' && secondOperand!=='')
       {
        result =operate(firstOperand,secondOperand,currentOperation);
       }
       
       CurrentDisplay.textContent = `${result}`;
       LastDisplay.textContent = `${result}`;
       hold='';
       firstOperand=result; 
    }

    function clear(){
        if(CurrentDisplay.textContent.length===0 || CurrentDisplay.textContent.slice(0,-1)===`${result}`.slice(0,-1) ){
         CurrentDisplay.textContent = '';
         LastDisplay.textContent = '';
         hold='';
         firstOperand='';
         secondOperand='';
         currentOperation=null;
         result='';
            }else{
            CurrentDisplay.textContent=CurrentDisplay.textContent.slice(0,-1);
            hold= hold.slice(0,-1);
         }
    }

    function addSign(){
        if(CurrentDisplay.textContent==='-'){
            CurrentDisplay.textContent='';
            return;
        }
        if(CurrentDisplay.textContent==='' && hold===''){
            CurrentDisplay.textContent='-';
            hold = '-';
        }
         else if(`${result}`===CurrentDisplay.textContent){
                CurrentDisplay.textContent=CurrentDisplay.textContent*'-1';
                LastDisplay.textContent=CurrentDisplay.textContent;
                firstOperand=CurrentDisplay.textContent;
                result=CurrentDisplay.textContent;
                
            }else{
                CurrentDisplay.textContent=CurrentDisplay.textContent*'-1';
                hold=CurrentDisplay.textContent;
            }
        }

       

    function handleKeyboardInput(e){
            if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
            if (e.key === '.') appendNumber(e.key);
            if (e.key === '=' || e.key === 'Enter') equalsButton.click();
            if (e.key === 'Backspace') clear();
            if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') appendOperator(e.key);
        }
       
// Basic Math 
    const add = (a,b) => parseFloat(a)+parseFloat(b);
    const modulo = (a,b) => a%b;
    const subtract = (a,b) => parseFloat(a)-parseFloat(b);
    const multiply = (a,b) => parseFloat(a)*parseFloat(b);
    const divide = (a,b) => {
        if(b==='0'){
            return;
        }else return (parseFloat(a)/parseFloat(b));
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