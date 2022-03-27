// Global variable



// Page preloader

const loader = document.querySelector(".loader");
const pageContainer = document.querySelector(".page-container");
const loaderContainer = document.querySelector(".loader-container");

const init = () => {
  pageContainer.style.display = "none";
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.display = "none";
    loaderContainer.style.minHeight = "0vh";
    pageContainer.style.display = "block";
    setTimeout(() => {
      pageContainer.style.opacity = "1";
    }, 50);
  }, 4000);
}

init();

// Nav slide animation on mobile phones

const navSlide = () => {
  const burger = document.querySelector('#hamburger');
  const nav = document.querySelector('#navbar');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Toggle navbar

  burger.addEventListener('click', () => {
    burger.style.color = "black";
    nav.classList.toggle("nav-active");
  });
  navLinks.forEach((el) => {
    el.addEventListener("click", () => {
      nav.classList.remove("nav-active");
    });
  });
  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.getElementsByClassName.animation) {
      link.getElementsByClassName.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
      // console.log(index / 7);
    }
  });

}
navSlide();


// active link controller
const links = document.querySelectorAll(".links");

links.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".active-link").classList.remove("active-link");
    el.classList.toggle("active-link");
  });
});

document.querySelector(".active-link");
//  Onscroll animation

let section = document.querySelectorAll("section-");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");
    // console.log(id)

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active-link");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active-link");
      });
    }
  });
};

// Setting active 
const setActive = (id) => {
  const links = document.querySelectorAll(".active-link");

  links.forEach((link) => {
    link.classList.remove("active-link");
  });
  const active = document.getElementById(`nav-${id}`);
  active.classList.add("active-link");
};

function reveal() {

  let reveals = document.querySelectorAll(".reveal");
  let sections = document.querySelectorAll(".section");
  console.log(reveals)
  for (let i = 0; i <= reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    console.log(i)
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      setActive(sections[i].id);
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => {
  reveal();
});

// Header text animations script
const typed = new Typed(".auto-input", {
    strings: [
      "Define",
      "Design",
      "Develop",
      "and Deploy",
      "Define, Design, Develop and Deploy",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });

  // Pop up
  const closeButton = document.querySelectorAll('.close-btn');
  const freePlanButton = document.querySelector('.free');
  const standardPlanButton = document.querySelector('.standard');
  const premiumPlanButton = document.querySelector('.premium');
  const serviceCard = document.querySelectorAll('.card');
  const popupCard = document.querySelectorAll('.popup');
  const signIn = document.querySelector("#signin-btn");
  const getStartedBtn = document.querySelector('#getStarted-btn');
  const popup = document.querySelector('.popup');
  const blur = document.getElementById('blur');
  

  // Form popups
  // Signin
  signIn.addEventListener("click", () => {
    document.querySelector("#signin-popup").classList.add("active");
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const body = document.querySelector('.body');
    body.style.overflow = "hidden";
  });
  // Get started
  getStartedBtn.addEventListener("click", () => {
    document.querySelector("#get-started-popup").classList.add("active");
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const body = document.querySelector('.body');
    body.style.overflow = "hidden";
  });
  // Free plan popup
  freePlanButton.addEventListener("click", ()=> {
    document.querySelector("#freePlan-popup").classList.add("active");
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const body = document.querySelector('.body');
    body.style.overflow = "hidden";
  })
  // Standard plan popup
  standardPlanButton.addEventListener("click", ()=> {
    document.querySelector("#standardPlan-popup").classList.add("active");
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const body = document.querySelector('.body');
    body.style.overflow = "hidden";
  })
  // Premium plan pop up
  premiumPlanButton.addEventListener("click", ()=> {
    document.querySelector("#premiumPlan-popup").classList.add("active");
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const body = document.querySelector('.body');
    body.style.overflow = "hidden";
  })

  // Sevice cards
  Array.from(serviceCard).forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = el.id;
      clearPopups()
      activatePopup(id)
      // toggle(id)
      // document.querySelector(`#${id}-popup`).classList.add("active");
    });
  });

  const clearPopups =()=>{
    Array.from(popupCard).forEach(pop=>{
      pop.classList.remove("active");
      const body = document.querySelector('.body');
      body.style.overflow = "visible"
    })
  }

const activatePopup = (id)=>{
  const popup = document.getElementById(`${id}-popup`);
  const body = document.querySelector('.body');
  blur.classList.toggle('active');
  popup.classList.add("active");
  body.style.overflow = "hidden"
}
  // Closing pop up
  Array.from(closeButton).forEach(btn=>{
    btn.addEventListener("click", (e) => {
      // e.preventDefault();
      clearPopups();
      blur.classList.remove('active');
  
    })
  })
  // closeButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   popup.classList.remove('active');
  //   blur.classList.remove('active');

  // })
  

  const toggle = (id) => {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}

// Contact us
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw-4H9QV_1HxS8nApSjgWKJ_ntgH3o6wrisg1BCPvSTqBaNlMDqHZQOguGIg-vgtbMdxA/exec";

const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  const submitButton = document.querySelector(".submit");
  e.preventDefault();
  const now = new Date();
  let current = now.toISOString();
  current = current.split("").slice(0, 16).join("");
  let input = document.getElementById("date-time");
  input.setAttribute("value", current);
  submitButton.classList.add("button-loading");
  if (!validation()) {
    submitButton.classList.remove("button-loading");
    return false;
  }
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      submitButton.classList.remove("button-loading");
      success.style.display = "block";
      setTimeout(() => {
        success.style.display = "none";
      }, 3000);
      clearFields();
    })
    .catch((error) => console.error("Error!", error.message));
});

const validation = () => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#contact-email");
  const message = document.querySelector("#message");
  const failure = document.querySelector("#failure");
  console.log(failure);

  // Validating name
  if (name.value === "") {
    failure.style.display = "block";
    failure.innerHTML = `Name is required! <i class="fas fa-times-circle"></i>`;
    return false;
  }
  // Validating email
  if (!emailValidation(email.value, failure)) {
    return false;
  }
  // Validating message
  if (message.value === "") {
    failure.style.display = "block";
    failure.innerHTML = `Message is required! <i class="fas fa-times-circle"></i>`;
    return false;
  }

  failure.style.display = "none";
  failure.innerText = "";
  return true;
};

// Clear fields
const clearFields = () => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#contact-email");
  const message = document.querySelector("#message");

  name.value = "";
  email.value = "";
  message.value = "";
};

// Email validation
const emailValidation = (email, failure) => {
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  // Email validations
  if (regx.test(email)) {
    return true;
  } else if (email === "") {
    failure.style.display = "block";
    failure.innerHTML = `Email is required! <i class="fas fa-times-circle"></i>`;
    return false;
  } else {
    failure.style.display = "block";
    failure.innerHTML = `Invalid email ID! <i class="fas fa-times-circle"></i>`;
    return false;
  }
};

// Sign in form

const scriptURLTwo =
  "https://script.google.com/macros/s/AKfycbwzPw05pdAeVlBZak4r_Y_SPZ5v_OH2-lbcRGXbVCCx_mvAktHjiOwN8LJQC1Z4SIi9/exec";

const signInForm = document.getElementById("sign-in-form");

signInForm.addEventListener("submit", (e) => { 
  const email = document.querySelector("#email-signin");
  const failure = document.querySelector("#error-signin-email");
  const success = document.querySelector("#success-signin-email");
  const subscribeBtn = document.querySelector(".subscribe-btn");
  e.preventDefault();
  const now = new Date();
  let current = now.toISOString();
  current = current.split("").slice(0, 16).join("");
  let input = document.getElementById("date-time-signin");
  input.setAttribute("value", current);
  subscribeBtn.classList.add("button-loading");
  if (!emailValidation(email.value, failure)) {
    subscribeBtn.classList.remove("button-loading");
    return false;
  }
  fetch(scriptURLTwo, { method: "POST", body: new FormData(signInForm) })
    .then((response) => {
      console.log("Success!", response);
      failure.style.display = "none";
      failure.innerText = "";
      success.style.display = "block";
      subscribeBtn.style.display = "none";
      subscribeBtn.classList.remove("button-loading");
      setTimeout(() => {
        clearPopups();
        blur.classList.remove('active');
        success.style.display = "none";
      }, 1000);
      setTimeout(() => {
        subscribeBtn.style.display = "block";
      }, 2000);
      clearFields();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Get started

const scriptURLSix =
  "https://script.google.com/macros/s/AKfycbxWA1Pa01FMAd9PQlYNB0QNr0dh4H-DdRVpZYVEGl6NEwsZCTopmjBGITGsuRrTN9IO6Q/exec";

const getStartedForm = document.getElementById("get-started-form");
getStartedForm.addEventListener("submit", (e) => {
  const email = document.querySelector("#email-get-started");
  const failure = document.querySelector("#error-get-started");
  const success = document.querySelector("#success-get-started");
  const subscribeBtn = document.querySelector(".subscribe-btn-get-started");
  e.preventDefault();
  const now = new Date();
  let current = now.toISOString();
  current = current.split("").slice(0, 16).join("");
  let input = document.getElementById("date-time-get-started");
  input.setAttribute("value", current);
  subscribeBtn.classList.add("button-loading");
  if (!emailValidation(email.value, failure)) {
    subscribeBtn.classList.remove("button-loading");
    return false;
  }
  fetch(scriptURLSix, { method: "POST", body: new FormData(getStartedForm) })
    .then((response) => {
      console.log("Success!", response);
      failure.style.display = "none";
      failure.innerText = "";
      success.style.display = "block";
      subscribeBtn.style.display = "none";
      subscribeBtn.classList.remove("button-loading");
      clearFields();
      setTimeout(() => {
        success.style.display = "none";
        clearPopups();
        blur.classList.remove('active');
      }, 1000);
      setTimeout(() => {
        subscribeBtn.style.display = "block";
      }, 2000);
    })
    .catch((error) => console.error("Error!", error.message));
    
});

// Free plan form
const scriptURLThree =
  "https://script.google.com/macros/s/AKfycbwmbYHk91eDK13ji7DginjkQTyE6QV_T0YnQUTynecobJ61LqPAKn0JWrYLfk6rwJL6ig/exec";

const freePlanForm = document.getElementById("start-popup-free");
console.log(freePlanForm)
freePlanForm.addEventListener("submit", (e) => {
  const email = document.querySelector("#free-email");
  const failure = document.querySelector("#error-free-plan");
  const success = document.querySelector("#success-free-plan");
  const subscribeBtn = document.querySelector(".subscribe-btn-free-plan");
  e.preventDefault();
  const now = new Date();
  let current = now.toISOString();
  current = current.split("").slice(0, 16).join("");
  let input = document.getElementById("date-time-free-plan");
  input.setAttribute("value", current);
  subscribeBtn.classList.add("button-loading");
  if (!emailValidation(email.value, failure)) {
    subscribeBtn.classList.remove("button-loading");
    return false;
  }
  fetch(scriptURLThree, { method: "POST", body: new FormData(freePlanForm) })
    .then((response) => {
      console.log("Success!", response);
      failure.style.display = "none";
      failure.innerText = "";
      success.style.display = "block";
      subscribeBtn.style.display = "none";
      subscribeBtn.classList.remove("button-loading");
      clearFields();
      setTimeout(() => {
        success.style.display = "none";
        clearPopups();
        blur.classList.remove('active');
      }, 1000);
      setTimeout(() => {
        subscribeBtn.style.display = "block";
      }, 2000);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Standard plan form

const scriptURLFour =
  "https://script.google.com/macros/s/AKfycbyT2arGbZFqoN8H10y55OIFVSLFCD0tjex1rJOuq8ceI2qy50ZNcJMHFC3g5Fr9Sd7k/exec";

const standardPlanForm = document.getElementById("standard-plan-form");
standardPlanForm.addEventListener("submit", (e) => {
  const email = document.querySelector("#standard-email");
  const failure = document.querySelector("#error-standard-plan");
  const success = document.querySelector("#success-standard-plan");
  const subscribeBtn = document.querySelector(".subscribe-btn-standard-plan");
  e.preventDefault();
  const now = new Date();
  let current = now.toISOString();
  current = current.split("").slice(0, 16).join("");
  let input = document.getElementById("date-time-standard-plan");
  input.setAttribute("value", current);
  subscribeBtn.classList.add("button-loading");
  if (!emailValidation(email.value, failure)) {
    subscribeBtn.classList.remove("button-loading");
    return false;
  }
  fetch(scriptURLFour, { method: "POST", body: new FormData(standardPlanForm) })
    .then((response) => {
      console.log("Success!", response);
      failure.style.display = "none";
      failure.innerText = "";
      success.style.display = "block";
      subscribeBtn.style.display = "none";
      subscribeBtn.classList.remove("button-loading");
      clearFields();
      setTimeout(() => {
        success.style.display = "none";
        clearPopups();
        blur.classList.remove('active');
      }, 1000);
      setTimeout(() => {
        subscribeBtn.style.display = "block";
      }, 2000);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Premium plan form

const scriptURLFive =
  "https://script.google.com/macros/s/AKfycbyLt-nTe_0p4EadmO0cCVXGP9byeJuN1sh4pWWgZX5UnTKXjx8nJIkEqLMldG8jKsYb/exec";

const premiumPlanForm = document.getElementById("premium-plan-form");
premiumPlanForm.addEventListener("submit", (e) => {
  const email = document.querySelector("#premium-email");
  const failure = document.querySelector("#error-premium-plan");
  const success = document.querySelector("#success-premium-plan");
  const subscribeBtn = document.querySelector(".subscribe-btn-premium-plan");
  e.preventDefault();
  const now = new Date();
  let current = now.toISOString();
  current = current.split("").slice(0, 16).join("");
  let input = document.getElementById("date-time-premium-plan");
  input.setAttribute("value", current);
  subscribeBtn.classList.add("button-loading");
  if (!emailValidation(email.value, failure)) {
    subscribeBtn.classList.remove("button-loading");
    return false;
  }
  fetch(scriptURLFive, { method: "POST", body: new FormData(premiumPlanForm) })
    .then((response) => {
      console.log("Success!", response);
      failure.style.display = "none";
      failure.innerText = "";
      success.style.display = "block";
      subscribeBtn.style.display = "none";
      subscribeBtn.classList.remove("button-loading");
      clearFields();
      setTimeout(() => {
        success.style.display = "none";
        clearPopups();
        blur.classList.remove('active');
      }, 1000);
      setTimeout(() => {
        subscribeBtn.style.display = "block";
      }, 2000);
    })
    .catch((error) => console.error("Error!", error.message));
});


