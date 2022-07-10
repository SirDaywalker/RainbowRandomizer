let operators;
fetchOps();
let history = [];

//-------------------------------------s-h-u-f-f-l-e---------------------------------------//
function shuffle() {
    let op = operators;

    getValue() == null ? (op = op[0].concat(op[1])) : (op = op[getValue()]);

    op = readoutFilter(op);

    op = op[random(op.length)];

    //images
    document.getElementById("opPic").src="./images/Ops/" + op.name.toLowerCase() + ".png";
    document.getElementById("icon").src="./images/icons/" + op.name.toLowerCase() + ".png";

    //text
    writeById("opName", op.name);
    writeById("primary", op.primary[random(op.primary.length)]);
    writeById("secondary", op.secondary[random(op.secondary.length)]);
    writeById("gadget", op.gadget[random(op.gadget.length)]);

    queueIt(op, history);
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
function queueIt(value, queue){
    if(queue.length < 5){
        queue.push(value);
    }
    else{
        queue.push(value);
        queue.shift();
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
        catch (err) {}
    }
        
    for (let i = 1; i <= history.length; i++) {
        document.getElementById("historyImg" + i).src="./images/icons/" + history[i - 1].name.toLowerCase() + ".png";
        writeById("historyName" + i, history[i - 1].name);
        writeById("historyPrimaryName" + i, history[i - 1].primary[0]);
        // writeById("historyPrimaryScope" + i, history[i - 1].primary[0]);
        // writeById("historyPrimaryBarrel" + i, history[i - 1].primary[0]);
        // writeById("historyPrimaryLaser" + i, history[i - 1].primary[0]);
        // writeById("historyPrimaryGrip" + i, history[i - 1].primary[0]);
        writeById("historySecondaryName" + i, history[i - 1].secondary[0]);
        // writeById("historySecondaryScope" + i, history[i - 1].primary[0]);
        // writeById("historySecondaryBarrel" + i, history[i - 1].primary[0]);
        // writeById("historySecondaryLaser" + i, history[i - 1].primary[0]);
        // writeById("historySecondaryGrip" + i, history[i - 1].primary[0]);
        writeById("historyGadget" + i, history[i - 1].gadget[0]);
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
