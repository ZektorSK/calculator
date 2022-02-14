function addListeners(){
    document.addEventListener('keydown', function (event){
        switch(event.key){
            case '1':
                addCharacterToDisplay('1');
                break;
            case '2':
                addCharacterToDisplay('2');
                break;
            case '3':
                addCharacterToDisplay('3');
                break;
            case '4':
                addCharacterToDisplay('4');
                break;
            case '5':
                addCharacterToDisplay('5');
                break;
            case '6':
                addCharacterToDisplay('6');
                break;
            case '7':
                addCharacterToDisplay('7');
                break;
            case '8':
                addCharacterToDisplay('8');
                break;
            case '9':
                addCharacterToDisplay('9');
                break;
            case '0':
                addCharacterToDisplay('0');
                break;
            case '+':
                addCharacterToDisplay('+');
                break;
            case '-':
                addCharacterToDisplay('-');
                break;
            case '*':
                addCharacterToDisplay('×');
                break;
            case '/':
                addCharacterToDisplay('÷');
                break;
            case '=':
                addResultToDisplay();
                break;
        }

        //special case if Enter key is pressed
        if(event.keyCode == 13){
            addResultToDisplay();
        }
    });
}

function addCharacterToDisplay(content){
    let display_el = document.getElementById("calc-display-numeros");
    display_el.innerHTML += content;
}

function addResultToDisplay(){
    let display_el = document.getElementById("calc-display-result");
    let problem = document.getElementById("calc-display-numeros").innerHTML;
    
    display_el.innerHTML = "=";
    display_el.innerHTML += calculate(problem);
}

function calculate(content){

    if(content.includes("÷0")){
        return "ERROR!";
    }

    try{
        return eval(String(content.replace("×", "*").replace("÷", "/")));
    }catch(error){
        return "ERROR!";
    }
}

function removeCharacterFromDisplay(){
    let display_el = document.getElementById("calc-display-numeros");
    display_el.innerHTML = display_el.innerHTML.slice(0, -1);
}

function removeAll(){
    let display_el = document.getElementById("calc-display-numeros");
    let display_el_result = document.getElementById("calc-display-result");
    display_el.innerHTML = "";
    display_el_result.innerHTML = "";
}
