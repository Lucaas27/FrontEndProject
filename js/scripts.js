// Responsive Nav Bar
const toggleButton = document.getElementById("toggle-button");
const navbarLinks = document.querySelector("nav ul.navbar-links");

// listens fot clicks on the hamburguer menu and adds a class called active to it
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// ------------------Lightbox---------------//
const lightBoxContainer = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-img");
const galleryPics = document.querySelectorAll(".img-container");
const counter = document.querySelector(".lightbox-counter");
const forward = document.querySelector(".next");
const backwards = document.querySelector(".prev");
let index;
let imgSrc;

/* function iterates over img containers and retieves the icon from each
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
  lightBoxContainer.classList.add("open");
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
    if (index == galleryPics.length) {
      index = 0;
    } else {
      index++;
    }
    changeImage();
  })
);

// Function listen for clicks on the next button and changes pictures depending on the index
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
// -----------------------------------------------------------//
