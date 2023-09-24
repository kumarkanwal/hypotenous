
// Store html elements 
let perpendicularInput = document.querySelector("#perpendicular");
let BaseInput = document.querySelector("#base");
let container = document.querySelector("#container");

// varibales 
let perpendicular;
let base;
let hypotenious;

// checking and solutions
let check1 ;
let check2 ;
let solution;

function valueChecking(){
    if((perpendicularInput.value.trim() != "") && (BaseInput.value.trim() != "")){

        // perpendicular value input 
        perpendicular = perpendicularInput.value;
        perpendicular = Number(perpendicular);
        check1 = Boolean(perpendicular);

        //  Base value input 
        base = BaseInput.value;
        base = Number(base);
        check2 = Boolean(base);

        // checking if both have Number 
        if(check1 && check2){
        solution = (Math.sqrt( Math.pow(perpendicular,2) + Math.pow(base,2) ));
        solution = solution.toFixed(2);
        container.innerHTML = solution;
        }else {
            container.innerHTML = "Invalid number";
        }
}
}

// perpendicular  and base function 
perpendicularInput.addEventListener("input",valueChecking);
BaseInput.addEventListener("input",valueChecking);
