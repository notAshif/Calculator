let display = document.getElementById('result');

let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;



const UpdateNumber = () =>{
    display.innerHTML = displayValue;
}

function inputNumber(Num){
    if(displayValue === 0){
        displayValue = Num.toString();
    }
    else{
        displayValue += Num.toString();
    }

    UpdateNumber();
}

function clearDisplay() {
    display.innerHTML = '0';
    displayValue = 0;
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;

    UpdateNumber();
}

function inputOperation(operator){
    if(displayValue === '' && firstOperand === null) return;

    if(firstOperand === null){
        firstOperand = parseFloat(displayValue);
    } else if(currentOperator){
        secondOperand = parseFloat(displayValue);
        calculateResult();
        firstOperand = parseFloat(displayValue);
    }
    currentOperator = operator;
    displayValue = '';
    
}

function inputDot() {
    if(displayValue.indexOf('.') === -1) {
        displayValue += '.';
    } else{
        displayValue = displayValue.slice(0, -1);
    }

    UpdateNumber();
}

function calculateResult(){

    if(currentOperator && firstOperand !== null && displayValue){

        if(displayValue === currentOperator){
            displayValue = parseFloat(firstOperand).toString();
            UpdateNumber();
            return
        }
        secondOperand = parseFloat(displayValue);

        switch (currentOperator) {
        case "+":
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case "-":
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case "*":
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case "÷":
            displayValue = secondOperand !== 0 ?  (firstOperand / secondOperand).toString() : 'error';
            break;
    
        case "%":
            displayValue = parseFloat((firstOperand / 100) * secondOperand).toString() ;
            break;

          default:
            displayValue = 'error';
            break;
        }
        firstOperand = parseFloat(displayValue);
        currentOperator = null;
    }
    UpdateNumber()
}