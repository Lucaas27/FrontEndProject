// ------------------ Responsive Nav Bar -------------------------
const navbarLinks = document.querySelector(".navbar .navbar-links");
const toggleButton = document.querySelector(".fas.fa-bars");
const navBarContainer = document.querySelector(".navbar");

// Open and closes menu nav
menu = () => {
  navbarLinks.classList.toggle("active");
};

// listens fot clicks on the hamburguer menu and calls the menu function
toggleButton.addEventListener("click", () => {
  menu();
});

// Closes menu if the menu or navlinks are clicled
navBarContainer.addEventListener("click", event => {
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
lightBox = () => {
  lightBoxContainer.classList.toggle("open");
};

// function uses the index to retrieve the img src attribute
changeImage = () => {
  imgSrc = galleryPics[index].querySelector("img").getAttribute("src");
  lightboxImage.src = imgSrc;
  counter.innerHTML = `${index + 1} of ${galleryPics.length}`;
};

// Function listen for clicks on the next button and changes pictures depending on the index
forward.addEventListener(
  "click",
  (next = () => {
    if (index == galleryPics.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeImage();
  })
);

// Function listen for clicks on the prev button and changes pictures depending on the index
backwards.addEventListener(
  "click",
  (prev = () => {
    if (index == 0) {
      index = galleryPics.length - 1;
    } else {
      index--;
    }
    changeImage();
  })
);

lightBoxContainer.addEventListener("click", event => {
  //   console.log(event.target);
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
const pics = document.querySelectorAll(".img-container");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    for (let n = 0; n < buttons.length; n++) {
      buttons[n].classList.remove("filter");
    }
    this.classList.add("filter");
    const target = this.getAttribute("data-target");

    for (let m = 0; m < pics.length; m++) {
      pics[m].style.display = "none";

      if (pics[m].getAttribute("data-id") == target) {
        pics[m].style.display = "block";
        pics[m].style.transform = "scale(0.8)";
      }
      if (target == "all") {
        pics[m].style.display = "block";
        pics[m].style.transform = "scale(1)";
      }
    }
  });
}
