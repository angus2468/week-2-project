const thumbnailContainer = document.getElementById("thumbnailContainer");
const backgroundImage = document.getElementById("backgroundImage");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const arrowKeys = document.getElementById("arrowKeys");
let currentImage = 0;

let images = [
  {
    src: "/assets/ForestOne2000w.png",
    alt: "An image of a forst with a lot of bluebells",
    srcset:
      "/assets/ForestOne2000w.png 2000w, /assets/ForestOne1000w.png 1000w, /assets/ForestOne800w.png 800w, /assets/ForestOne400w.png 400w",
  },
  {
    src: "/assets/ForestTwo2000w.png",
    alt: "An image of a forst",
    srcset:
      "/assets/ForestTwo2000w.png 2000w, /assets/ForestTwo2000w.png 1000w, /assets/ForestTwo800w.png 800w, /assets/ForestTwo400w.png 400w",
  },
  {
    src: "/assets/ForestThree2000w.png",
    alt: "An image of a stream going through a forest",
    srcset:
      "/assets/ForestThree2000w.png 2000w, /assets/ForestThree1000w.png 1000w, /assets/ForestThree800w.png 800w, /assets/ForestThree400w.png 400w",
  },
  {
    src: "/assets/ForestFour2000w.png",
    alt: "An image of a forst that goes to the waterline of a lake",
    srcset:
      "/assets/ForestFour2000w.png 2000w, /assets/ForestFour1000w.png 1000w, /assets/ForestFour800w.png 800w, /assets/ForestFour400w.png 400w",
  },
  {
    src: "/assets/ForestFive2000w.png",
    alt: "An image of rock in a forest in the fog",
    srcset:
      "/assets/ForestFive2000w.png 2000w, /assets/ForestFive1000w.png 1000w, /assets/ForestFive800w.png 800w, /assets/ForestFive400w.png 400w",
  },
];

function createThumbnail() {
  images.forEach(function (image, index) {
    let imageElement = document.createElement("img");
    imageElement.src = image.src;
    imageElement.scrset = image.scrset;
    imageElement.alt = image.alt;
    imageElement.addEventListener("click", function () {
      createBackgroundImage(image);
      currentImage = index;
    });
    imageElement.addEventListener("keypress", function (enter) {
      if (enter.key === "Enter") {
        createBackgroundImage(image);
        currentImage = index;
      }
    });
    imageElement.setAttribute("tabindex", "0");

    thumbnailContainer.appendChild(imageElement);
  });
}

createThumbnail();
createBackgroundImage(images[0]);

function createBackgroundImage(img) {
  backgroundImage.innerHTML = "";
  const backImage = document.createElement("img");
  backImage.src = img.src;
  backImage.srcset = img.srcset;
  backImage.alt = img.alt;
  backImage.classList.add("backgroundImage");
  backgroundImage.appendChild(backImage);
  // currentImage = images.findIndex(img.src);
}

leftButton.addEventListener("click", function () {
  currentImage -= 1;
  if (currentImage < 0) {
    currentImage = images.length - 1;
    createBackgroundImage(images[currentImage]);
  } else {
    createBackgroundImage(images[currentImage]);
  }
});
arrowKeys.addEventListener("keydown", function (leftArrow) {
  if (leftArrow.key == "ArrowLeft") {
    currentImage -= 1;
    if (currentImage < 0) {
      currentImage = images.length - 1;
      createBackgroundImage(images[currentImage]);
    } else {
      createBackgroundImage(images[currentImage]);
    }
  }
  if (leftArrow.key == "ArrowRight") {
    currentImage += 1;
    if (currentImage >= images.length) {
      currentImage = 0;
      createBackgroundImage(images[currentImage]);
    } else {
      createBackgroundImage(images[currentImage]);
    }
  }
});
rightButton.addEventListener("click", function () {
  currentImage += 1;
  if (currentImage >= images.length) {
    currentImage = 0;
    createBackgroundImage(images[currentImage]);
  } else {
    createBackgroundImage(images[currentImage]);
  }
});
