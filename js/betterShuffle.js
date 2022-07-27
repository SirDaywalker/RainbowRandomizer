let operators;
fetchOps();
let history = [];

let defaultAttachments = {"Scope": ["no Scope", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C"],
                          "Grip": ["no Grip", "vertical Grip", "angled Grip"],
                          "Barrel": ["no Barrel", "Suppressor", "Muzzle Brake", "Compensator", "Flash Hider"],
                          "UnderBarrel": ["no Laser", "Laser"]
                        }

//-------------------------------------s-h-u-f-f-l-e---------------------------------------//
function shuffle() {
    // sets this variable equal to json obj
    let op = operators;

    // gets if it is atk or def or both
    getValue() == null ? (op = op[0].concat(op[1])) : (op = op[getValue()]);

    // reads out the filter and removes banned ops
    op = readoutFilter(op);

    // get a random op as json obj
    op = op[random(op.length)];

    // create a new Operator obj and sets its weapons random
    let operator = new Operator(op.name, op.primary[random(op.primary.length)], op.secondary[random(op.secondary.length)], op.gadget[random(op.gadget.length)] );
    
    // displays the weapons
    operator.setProps();

    // put it into the Historyqueue
    queueIt(operator);
}
//-------------------------------------e-n-d---o-f---s-h-u-f-f-l-e--------------------------------------//


//-------------------------------------F-e-t-c-h---------------------------------------//
async function fetchOps(a) {
    if (operators !== undefined) return;
    if (a !== undefined) {
        operators = JSON.parse(a);
        return;
    }

    await fetch('https://api.github.com/repos/SirDaywalker/RainbowRandomizer/contents/js/operators.json', { mode: 'cors' })
        .then(resp => resp.json())
        .then(json => fetchOps(decodeURIComponent(atob(json["content"]).split('').map(function(c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''))));
}
//-----------------------------------e-n-d---o-f--F-e-t-c-h------------------------------//


//-------------------------------------H-i-s-t-o-r-y---------------------------------------//
function queueIt(value){
    if(history.length < 5){
        history.push(value);
    }
    else{
        history.push(value);
        history.shift();
    }
    showHistory();
}
//-------------------------------------e-n-d---o-f---H-i-s-t-o-r-y-------------------------//


//------------------------------------S-h-o-w---H-i-s-t-o-r-y---------------------------------------//
function showHistory(){
    if (history.length === 1){
        let e = document.getElementById("historyDisabled");
        e.id = "history";
    }

    if (history.length <= 5){
        try {
            let e = document.getElementsByClassName("historyWrapDis");
            e[e.length - 1].className = "historyWrap"; 
        } 
        catch {}
    }
        
    for (let i = 1; i <= history.length; i++) {
        document.getElementById("historyImg" + i).src="./images/icons/" + history[i - 1].name.toLowerCase() + ".png";
        writeById("historyName" + i, history[i - 1].name);
        writeById("historyPrimaryName" + i, history[i - 1].primary);
        // writeById("historyPrimaryScope" + i, history[i - 1].primary);
        // writeById("historyPrimaryBarrel" + i, history[i - 1].primary);
        // writeById("historyPrimaryLaser" + i, history[i - 1].primary);
        // writeById("historyPrimaryGrip" + i, history[i - 1].primary);
        writeById("historySecondaryName" + i, history[i - 1].secondary);
        // writeById("historySecondaryScope" + i, history[i - 1].primary);
        // writeById("historySecondaryBarrel" + i, history[i - 1].primary);
        // writeById("historySecondaryLaser" + i, history[i - 1].primary);
        // writeById("historySecondaryGrip" + i, history[i - 1].primary);
        writeById("historyGadget" + i, history[i - 1].gadget);
    } 
}
//-------------------------------------e-n-d---o-f---S-h-o-w---H-i-s-t-o-r-y-------------------------//


//-------------------------------------F-i-l-t-e-r---------------------------------------//
function readoutFilter(opAry) {
    let ops = document.getElementsByClassName('filterImgDis');

    for (let i = 0; i < ops.length; i++) {
        for (let j = 0; j < opAry.length; j++) {
            if (ops[i].id === opAry[j].name){
                let x = j;
                if(j === 0) {x = 1;}
                opAry.splice(j, x);
                break;
            }
        }
    }
    return opAry;
}
//-------------------------------------e-n-d---o-f---F-i-l-t-e-r-------------------------//


//-------------------------------------G-e-t-e-r-------------------------------------------//
function getValue() {
    if (document.getElementById('atk').checked) return 0;
    else if (document.getElementById('def').checked) return 1;
}
//-------------------------------------e-n-d---o-f---G-e-t-e-r-----------------------------//


//-------------------------------------w-r-i-t-e--b-y--I-d------------------------------------------//
function writeById(id, message) { return document.getElementById(id).innerHTML = message; }
//-------------------------------------e-n-d---o-f---w-r-i-t-e--b-y--I-d----------------------------//


//------------------------------------r-a-n-d-o-m-i-z-e---L-o-a-d-o-u-t-------------------//
function random(max) { return Math.floor(Math.random() * max); }
//-------------------------------------e-n-d---o-f---L-o-a-d-o-u-t-----------------------//


//---------------------------------O-p-e-r-a-t-o-r--C-l-a-s-s-------------------//
class Operator{
    constructor(name, primary, secondary, gadget){
        this.name = name;
        this.primary = primary;
        this.secondary = secondary;
        this.gadget = gadget;
    }

    setProps(){
        document.getElementById("opPic").src="./images/Ops/" + this.name.toLowerCase() + ".png";
        document.getElementById("icon").src="./images/icons/" + this.name.toLowerCase() + ".png";

        writeById("opName", this.name);
        writeById("primary", this.primary);
        writeById("secondary", this.secondary);
        writeById("gadget", this.gadget);
    }
}
//--------------------------------O-p-e-r-a-t-o-r--C-l-a-s-s-------------------//


//---------------------------a-d-d--o-r--d-e-l-e-t-e-------------------//
function addOrDelete(defaultArr, jsonArr) {
    for (let i = 0; i < jsonArr.length; i++) {
        let jOut = 0;
        for (let j = 0; j < defaultArr.length; j++) {
            if (jsonArr[i] === defaultArr[j]) {
                let x = j;
                if (j === 0) {x = 1;}      
                defaultArr.splice(j, x);    
            }
            jOut = j;
        }
        defaultArr.push(jsonArr[i]);
        if (jsonArr[i] === defaultArr[jOut]) {
            jsonArr.splice[i, i];
        }
    }
    return defaultArr;    
}
//------------------------e-n-d---o-f---a-d-d--o-r--d-e-l-e-t-e-----------------------//
