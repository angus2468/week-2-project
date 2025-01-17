const thumbnailContainer = document.getElementById("thumbnailContainer");
const backgroundImage = document.getElementById("backgroundImage");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
let currentImage = 0;

let images = [
  {
    src: "https://images.unsplash.com/photo-1521753643072-122f97ed86e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An image of a forst with a lot of bluebells",
  },
  {
    src: "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An image of a forst",
  },
  {
    src: "https://images.unsplash.com/photo-1523228046673-5dbc4d067caf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An image of a stream going through a forest",
  },
  {
    src: "https://images.unsplash.com/photo-1472017454701-20a80cfeaac5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An image of a forst that goes to the waterline of a lake",
  },
];

function createThumbnail() {
  images.forEach(function (image, index) {
    let imageElement = document.createElement("img");
    imageElement.src = image.src;
    // imageElement.scrset = image.scrset
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
  // backImage.srcset = img.srcset
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
leftButton.addEventListener("keypress", function (leftArrow) {
  if ((leftArrow.key = "keyleft")) {
    currentImage -= 1;
    if (currentImage < 0) {
      currentImage = images.length - 1;
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
