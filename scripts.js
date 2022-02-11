function addCharacterToDisplay(content){
    let display_el = document.getElementById("calc-display-numeros");
    display_el.innerHTML += content;
}

function addResultToDisplay(){
    let display_el = document.getElementById("calc-display-result");
    let problem = document.getElementById("calc-display-numeros");
    display_el.innerHTML += '=';
    display_el.innerHTML += calculate(problem);
}

function calculate(content){
    
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
