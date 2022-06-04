function toggle(el) {
    if (el.className === "filterImg") {
        el.className = "filterImgDis"
    } 
    else {
        el.className = "filterImg"
    }
}

function changeState(el){
    if (el.className === "disable") {
        let enabled = document.getElementsByClassName('filterImg')

        for (let i = 0; i < enabled.length; i++) {
            enabled[i].className = "filterImgDis"
            i--
        }
        el.className = "enable" 
    }

    else{
        let disable = document.getElementsByClassName('filterImgDis')

        for (let i = 0; i < disable.length; i++) {
            disable[i].className = "filterImg"
            i--
        }
        el.className = "disable" 
    }
} 