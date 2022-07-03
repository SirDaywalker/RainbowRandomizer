//-------------------------------------F-e-t-c-h---------------------------------------//
let operators;
let a;

document.addEventListener("load", fetchOps(a));

function fetchOps(a) {
    if (operators !== undefined) return;

    if (a !== undefined) {
        operators = JSON.parse(a);
        return;
    }

    fetch('https://api.github.com/repos/SirDaywalker/RainbowRandomizer/contents/js/operators.json',
        {mode: 'cors'}).then(resp => resp.json()).then(json => fetchOps(atob(json["content"])));
}
//-----------------------------------e-n-d---o-f--F-e-t-c-h------------------------------//

function shuffle() {
    if (getValue() != null) {operators = readoutFilter(operators[getValue()]);}
    else {operators = readoutFilter(operators);}

    let rolledOp = randomizeLoadout(operators[0]);

    //images
    document.getElementById("opPic").src="./images/Ops/" + rolledOp.name.toLowerCase() + ".png";
    document.getElementById("icon").src="./images/icons/" + rolledOp.name.toLowerCase() + ".png";

    //text
    writeById("opName", rolledOp.name);
    writeById("primary", rolledOp.primary);
    writeById("secondary", rolledOp.secondary);
    writeById("gadget", rolledOp.gadget);
}


//-------------------------------------F-i-l-t-e-r---------------------------------------//
function readoutFilter(operators) {
    let ops = document.getElementsByClassName('filterImgDis');

    for (let i = 0; i < ops.length; i++) {
        for (let j = 0; j < operators.length; j++) {
            if (ops[i].id === operators[j]){
                let x = j;
                if(j === 0) {x = 1;}
                operators.splice(j, x);
                break;
            }
        }
    }
    return operators;
}
//-------------------------------------e-n-d---o-f---F-i-l-t-e-r-------------------------//


//-------------------------------------w-r-i-t-e--b-y--I-d------------------------------------------//
function writeById(id, message) {return document.getElementById(id).innerHTML = message;}
//-------------------------------------e-n-d---o-f---w-r-i-t-e--b-y--I-d----------------------------//


//-------------------------------------G-e-t-e-r-------------------------------------------//
function getValue(){
    if (document.getElementById('atk').checked) return 0;
    else if (document.getElementById('def').checked) return 1;
}
//-------------------------------------e-n-d---o-f---G-e-t-e-r-----------------------------//


//------------------------------------r-a-n-d-o-m-i-z-e---L-o-a-d-o-u-t-------------------//
function randomizeLoadout(...args){
    return () => args[Math.floor(Math.random() * args.length)];
}
//-------------------------------------e-n-d---o-f---L-o-a-d-o-u-t-----------------------//
