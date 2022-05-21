

// Basic Math 
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = (a,b,operator) =>{
    switch(operator){
        case '+': add(a,b);
        case '-': subtract(a,b);
        case '*': multiply(a,b);
        case '/': divide(a,b);
    }
};
