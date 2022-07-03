document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    })
})


function disableFilterImage(el) {
    if (el.className === "filterImg") {el.className = "filterImgDis";}
    else {el.className = "filterImg";}
}

function disableAllFilterImages(el){
    if (el.className === "disable") {
        let enabled = document.getElementsByClassName('filterImg');

        for (let i = 0; i < enabled.length; i++) {
            enabled[i].className = "filterImgDis";
            i--;
        }
        el.className = "enable" ;
    }

    else{
        let disable = document.getElementsByClassName('filterImgDis')

        for (let i = 0; i < disable.length; i++) {
            disable[i].className = "filterImg";
            i--;
        }
        el.className = "disable";
    }
} 
