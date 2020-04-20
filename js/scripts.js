"use strict";

// ------------------ Responsive Nav Bar -------------------------
const navbarLinks = document.querySelector(".navbar .navbar-links");
const toggleButton = document.querySelector(".fas.fa-bars");
const navBarContainer = document.querySelector(".navbar");
// Open and closes menu nav
const menu = () => {
  navbarLinks.classList.toggle("active");
};

// listens fot clicks on the hamburguer menu and calls the menu function
toggleButton.addEventListener("click", menu);

// Closes menu if the menu or navlinks are clicked
navBarContainer.addEventListener("click", (event) => {
  //   console.log(event.target);
  if (event.target !== navbarLinks && event.target !== toggleButton) {
    menu();
  }
});
// -----------------------------------------------------------

// ------------------LIGHTBOX ---------------------------------
const lightBoxContainer = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-img");
const galleryPics = document.querySelectorAll(".img-container");
const counter = document.querySelector(".lightbox-counter");
const forward = document.querySelector(".next");
const backwards = document.querySelector(".prev");
let index;
let imgSrc;

/* for loop iterates over img containers and retieves the icon from each
  and listens for a click and returns the index number
  */
for (let i = 0; i < galleryPics.length; i++) {
  galleryPics[i]
    .querySelector(".fas.fa-search-plus")
    .addEventListener("click", () => {
      index = i;
      changeImage();
      lightBox();
    });
}

// Function adds a classe called open to the lighbox container
const lightBox = () => {
  lightBoxContainer.classList.toggle("open");
};

// function uses the index to retrieve the img src attribute
const changeImage = () => {
  imgSrc = galleryPics[index].querySelector("img").getAttribute("src");
  lightboxImage.src = imgSrc;
  counter.innerHTML = `${index + 1} of ${galleryPics.length}`;
};

// Function listen for clicks on the next button and changes pictures depending on the index
forward.addEventListener("click", () => {
  if (index == galleryPics.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImage();
});

// Function listen for clicks on the prev button and changes pictures depending on the index
backwards.addEventListener("click", () => {
  if (index == 0) {
    index = galleryPics.length - 1;
  } else {
    index--;
  }
  changeImage();
});

lightBoxContainer.addEventListener("click", (event) => {
  // console.log(event.target);
  if (
    event.target !== lightboxImage &&
    event.target !== forward &&
    event.target !== backwards
  ) {
    // if you click anywhere other than the picture and control buttons
    lightBox();
  }
});

// ------------------GALLERY FILTER---------------------------------
const buttons = document.querySelector(".filter-btn").children;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    for (let n = 0; n < buttons.length; n++) {
      buttons[n].classList.remove("filter");
    }
    buttons[i].classList.add("filter");
    const target = buttons[i].getAttribute("data-target");

    for (let m = 0; m < galleryPics.length; m++) {
      galleryPics[m].style.display = "none";

      if (galleryPics[m].getAttribute("data-id") == target) {
        galleryPics[m].style.display = "block";
        galleryPics[m].style.transform = "scale(0.8)";
      }
      if (target == "all") {
        galleryPics[m].style.display = "block";
        galleryPics[m].style.transform = "scale(1)";
      }
    }
  });
}

// --------------- CONTACT FORM  -------------------------------

// Validation
const htmlAlert = document.querySelector(".html-alert");
const contactForm = document.querySelector(".contact-form");
const contactButton = document.getElementById("#contact-button");
let personName = document.querySelector("#name");
let personMsg = document.querySelector("#msg");
let personEmail = document.querySelector("#email");

const onSubmit = (event) => {
  event.preventDefault();
  if (
    personName.value === "" ||
    personMsg.value === "" ||
    personEmail.value === ""
  ) {
    htmlAlert.classList.add("error");
    htmlAlert.innerHTML = "Please enter all fields!";
    setTimeout(() => htmlAlert.remove(), 5000);
  } else {
    // Add the person's name to the localStorage and displays it on the message
    localStorage.setItem(personName.id, personName.value);
    const nameValue = localStorage.getItem(personName.id);
    htmlAlert.classList.add("success");
    htmlAlert.innerHTML = `Thank you ${nameValue}. We will get back to you as soon as possible!`;

    // Clear fields
    personName.value = "";
    personMsg.value = "";
    personEmail.value = "";
  }
};
contactForm.addEventListener("submit", onSubmit);
