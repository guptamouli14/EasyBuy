/* ================= IMAGE ARRAYS ================= */

const leftImages = [
  "images/left_collage/c1.webp",
  "images/left_collage/c2.jpg",
  "images/left_collage/c3.jpg",
  "images/left_collage/c4.avif",
  "images/left_collage/c5.jpg",
  "images/left_collage/c6.jpg",
  "images/left_collage/c7.jpg",
  "images/left_collage/c8.jpg"
];

const rightImages = [
  "images/right_collage/m1.jpg",
  "images/right_collage/m2.jpeg",
  "images/right_collage/m3.jpg",
  "images/right_collage/m4.jpg",
  "images/right_collage/m5.jpg",
  "images/right_collage/m8.jpg",
  "images/right_collage/m9.jpg",
  "images/right_collage/m8.avif"
];

/* ================= DOM ELEMENTS ================= */

const leftImgs = document.querySelectorAll(".collage.left img");
const rightImgs = document.querySelectorAll(".collage.right img");

const leftCollage = document.querySelector(".collage.left");
const rightCollage = document.querySelector(".collage.right");

/* ================= INDICES ================= */

let leftImageIndex = 0;
let leftSlotIndex = 0;

let rightImageIndex = 0;
let rightSlotIndex = 0;

let masterInterval;
let paused = false;

/* ================= MASTER TIMER ================= */

function startAnimation() {
  masterInterval = setInterval(() => {
    if (paused) return;

    /* LEFT: change ONE image */
    leftImgs[leftSlotIndex].src = leftImages[leftImageIndex];
    leftImageIndex = (leftImageIndex + 1) % leftImages.length;
    leftSlotIndex = (leftSlotIndex + 1) % leftImgs.length;

    /* RIGHT: change ONE image */
    rightImgs[rightSlotIndex].src = rightImages[rightImageIndex];
    rightImageIndex = (rightImageIndex + 1) % rightImages.length;
    rightSlotIndex = (rightSlotIndex + 1) % rightImgs.length;

  }, 3000);   // ⭐ EXACT 3 SECONDS
}

/* ================= HOVER PAUSE ================= */

[leftCollage, rightCollage].forEach(collage => {
  collage.addEventListener("mouseenter", () => {
    paused = true;
  });

  collage.addEventListener("mouseleave", () => {
    paused = false;
  });
});

startAnimation();



/* ================= BORDER COLOR ANIMATION ================= */

const borderColors = [
  "#ff8fa3",   // soft pink
  "#ffd6e0",   // baby blush
  "#cdb4db",   // lavender
  "#a2d2ff",   // baby blue
  "#bde0fe"    // pastel sky
];

const collageImages = document.querySelectorAll(".collage img");
let borderIndex = 0;

setInterval(() => {
  collageImages.forEach(img => {
    img.style.borderColor = borderColors[borderIndex];
  });

  borderIndex = (borderIndex + 1) % borderColors.length;
}, 5000);   // ⭐ every 5 seconds




/* ================= THEME TOGGLE ================= */

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
