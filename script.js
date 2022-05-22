
/// Get Elements 
    const calculation = document.querySelector('.calculation');
    const result = document.querySelector('.result');
    let c = 0;
    let d = 0;

// Basic Math 
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

/// clear 

function clears (){ 
    calculation.textContent='';
    console.log('heyy');
}

const operate = (a,b,operator) =>{
    switch(operator){
        case '+': result.textContent=add(a,b);
        case '-': result.textContent=subtract(a,b);
        case '*': result.textContent=multiply(a,b);
        case '/': result.textContent=divide(a,b);
    }
};



function append(input){

            switch(input) 
            {
                case '1': 
                calculation.textContent += '1';
                break;

                case '2': 
                calculation.textContent += '2';
                break;

                case '3': 
                calculation.textContent += '3';
                break;

                case '4': 
                calculation.textContent += '4';
                break;

                case '5': 
                calculation.textContent += '5';
                break;

                case '6': 
                calculation.textContent += '6';
                break;

                case '7': 
                calculation.textContent += '7';
                break;

                case '8': 
                calculation.textContent += '8';
                break;

                case '9': 
                calculation.textContent += '9';
                break;

                case '0': 
                calculation.textContent += '0';
                break;
    
                case '+': 
                if(calculation.textContent.charAt(calculation.textContent.length-1)==='+') break;
                calculation.textContent += '+';
                break;

                case '-': 
                if(calculation.textContent.charAt(calculation.textContent.length-1)==='-') break;
                calculation.textContent += '-';
                break;

                case 'x': 
                if(calculation.textContent.charAt(calculation.textContent.length-1)==='x') break;
                calculation.textContent += 'x';
                break;

                case '/': 
                if(calculation.textContent.charAt(calculation.textContent.length-1)==='/') break;
                calculation.textContent += '/';
                break;

                case '.':
                if(calculation.textContent.charAt(calculation.textContent.length-1)==='.') break;
                calculation.textContent += '.';
                break;
    
                case '=':
                const array = calculation.textContent.split('+');
                if(calculation.textContent.includes('+')) operate(c,d,add);
                else if(calculation.textContent.includes('-')) operate(c,d,subtract);
                else if(calculation.textContent.includes('*')) operate(c,d,multiply);
                else if(calculation.textContent.includes('/')) operate(c,d,divide);
                break;

            }
    }




