let temp ="";
let opr = '';
let num = "";
let calc = "";
let result = 0;
let fResult;
let num1 = 0;
let num2 = 0;
let sqrTemp=0;

const updateNum = (num) =>{ 
    temp = temp + num;
    document.getElementById("display").textContent = temp;   
}

const setOpr = (opr) =>{
    num1 = parseFloat(temp);
    temp = "";
    document.getElementById("display").textContent = temp;

    if(opr == '+'){
        calc = "add";
    }
    else if(opr == '-'){
        calc = "minus";
    }
    else if(opr == '*'){
        calc = "mul";
    }
    else if(opr == '/'){
        calc = "divd";
    }
}

const calculate = () => {
    num2 = parseFloat(temp);
    document.getElementById("display").textContent = "";

    if(calc == "add"){
        result = num1 + num2;
        fResult = parseFloat(result.toFixed(2));
        document.getElementById("display").textContent = fResult;
    }
    else if(calc == "minus"){
        result = num1 - num2;
        fResult = parseFloat(result.toFixed(2));
        document.getElementById("display").textContent = fResult;
    }
    else if(calc == "mul"){
        result = num1 * num2;
        fResult = parseFloat(result.toFixed(2));
        document.getElementById("display").textContent = fResult;   
    }
    else if(calc == "divd"){
        result = num1 / num2;
        fResult = parseFloat(result.toFixed(2));
        document.getElementById("display").textContent = fResult;
    }
    
    temp = result;
}

const sqr = () => {
    document.getElementById("display").textContent = temp + "²"; 
    temp = temp * temp;
    document.getElementById("display").textContent = temp;
}

const clr = () => {
    temp = "";
    num1 = 0;
    num2 = 0;
    document.getElementById("display").textContent = temp; 
}

const del = () => {
    temp = temp.slice(0, -1);
    document.getElementById("display").textContent = temp; 
}
