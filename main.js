const feature = document.getElementById("features");
const featureDropDown = document.querySelector(".features-dropdown");
const loginAndRegister = document.querySelector(".login-in-and-register");

/* ARROW FOR FEATURES */
const arrowUp = document.querySelector(".Arrow-up");
const arrowDown = document.querySelector(".Arrow-down");

/* ARROW FOR COMPANY */
const arrowUpCom = document.querySelector(".Arrow-up-com");
const arrowDownCom = document.querySelector(".Arrow-down-com");

const company = document.getElementById("company");
const companyDropDown = document.querySelector(".company-dropdown")

function closeAll(){
    // close feature
    featureDropDown.classList.remove("show");
    arrowDown.classList.remove("show");
    arrowUp.classList.remove("live");

    //close company 
    companyDropDown.classList.remove("show");
    arrowDownCom.classList.remove("show");
    arrowUpCom.classList.remove("live");

}


feature.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = featureDropDown.classList.contains("show");

    closeAll();
  
    if (!isOpen) {
        // open feature
        featureDropDown.classList.toggle("show");
        arrowDown.classList.toggle("show");
        arrowUp.classList.toggle("live");
    }


    updateSpacing();
});

company.addEventListener("click", (e) => {
    e.stopPropagation();
   
    
    const isOpen = companyDropDown.classList.contains("show");

    closeAll();

    if (!isOpen) {
        // open company
        companyDropDown.classList.toggle("show");
        arrowDownCom.classList.toggle("show");
        arrowUpCom.classList.toggle("live");
    }

    updateSpacing();
  

});

//function to move the element down

function updateSpacing() {
    if(featureDropDown.classList.contains("show") || companyDropDown.classList.contains("show")) {
        loginAndRegister.classList.add("lost");
    } else {
        loginAndRegister.classList.remove("lost");
    }
}

const sideBar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const overlay  = document.getElementById("overlay");

toggleBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    sideBar.classList.remove("open");
    toggleBtn.classList.remove("active");
    overlay.classList.remove("active");
});


