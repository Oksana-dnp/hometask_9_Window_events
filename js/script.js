let elemScrollDown = document.querySelector(".scroll-block__item--down");
let elemScrollUp = document.querySelector(".scroll-block__item--up");

let currentScrollY = window.screenY;
window.addEventListener("scroll", changeSize);

function changeSize() {
    
  if (window.scrollY > currentScrollY) {
    currentScrollY = window.scrollY;
    if (!elemScrollDown.style.fontSize) {
      elemScrollDown.style.fontSize = `${
        parseInt(getComputedStyle(elemScrollDown).fontSize) + 2
      }px`;
      console.log(elemScrollDown.style.fontSize);
    } else
      elemScrollDown.style.fontSize = `${
        parseInt(elemScrollDown.style.fontSize) + 2
      }px`;
  } 
}
