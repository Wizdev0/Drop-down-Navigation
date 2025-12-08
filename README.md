
# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
*

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page
- See the switch of the "hambuger" to "x" in the menu button of the mobile screen size
- The Overlay on the page when the side bar opens

### Screenshot

![](./Assets/Nav%20ss.png)


### Links

- Live Site URL: [Dropdown-Navigation.com](https://drop-down-navigation.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript




### What I learned

- I learnt a lot.....
- I learnt how to make a side bar with a drop down inside, I learnt how to make an overlay when the side bar opens
- I learnt how to do more responsive designs 
- I learnt how to effectively use functions and event listeners
- I learnt a lot, If I want to list them, It wount be possible.....

```html

       <!-- TOOGLE BUTTON -->
            <button id="toggleBtn" class="menu-btn">
            <span></span>
            <span></span>
            <span></span>
         </button>


      <nav class="sidebar" id="sidebar">


        <div class="link-and-login">

      

          <div class="link">
            <ul class="dropdown">
              <li id="features" class="features">Features<img src="Assets/icon-arrow-down.svg" alt="Arrow Down" width="8px" height="8px" class="Arrow-down"> <img src="Assets/icon-arrow-up.svg" alt="Arrow Up" class="Arrow-up" width="8px" height="8px">
                
                <ul class="features-dropdown">
                  <li><img src="Assets/icon-todo.svg" alt="Todo icon">Todo List</li>
                  <li><img src="Assets/icon-calendar.svg" alt="Calendar">Calendar</li>
                  <li><img src="Assets/icon-reminders.svg" alt="Reminders Icon">Reminders</li>
                  <li><img src="Assets/icon-planning.svg" alt="Planning icon">Planning</li>
                </ul>
              </li>

              <li id="company" class="company">Company<img src="Assets/icon-arrow-down.svg" alt="Arrow Down" width="8px" height="8px" class="Arrow-down-com"> <img src="Assets/icon-arrow-up.svg" alt="Arrow Up" class="Arrow-up-com" width="8px" height="8px">
                
                <ul class="company-dropdown">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>

              </li>
              <div class="useless">
                <li>Careers</li>
                <li>About</li>
              </div>
            </ul>
          </div>



          <div class="login-in-and-register">
            <div class="log-in">
              <p class="log-in-p">Login</p>
            </div>

            <div class="register">
              <p class="register-p">Register</p>
            </div>
          </div>

          
        </div>

        
      </nav>  
    </div>  
```
```css

   /*  SIDEBAR */
 #sidebar{
    position: fixed;
    right: -350px;
    top: 0;
    width: 260px;
    height: 100vh;
    background: white;
    color: black;
    transition: 0.3s ease;
    padding: 20px;
    z-index: 1000;
    box-shadow: 0px 6px 8px rgba(0,0,0, 0.1);

}

#sidebar.active{
    right: 0;
}

.menu-btn{
    display: block;
    
}

.menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translateY(13px);
}

.menu-btn.active span:nth-child(2){
    opacity: 0;
}

.menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translateY(-13px);
}
```
```js
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



```

### Continued development

Still got a lot to lean.......
I hope to learn more and become a better dev.

### Useful resources

## Author
- Frontend Mentor - [@Wizdev0](https://www.frontendmentor.io/profile/Wizdev0)
- Twitter - [@otutech](https://www.twitter.com/otutech)

