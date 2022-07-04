let elemScrollDown = document.querySelector(".scroll-block__item--down");
let elemScrollUp = document.querySelector(".scroll-block__item--up");

//let currentScrollY = window.screenY;
let prevScroll = window.screenY;
window.addEventListener("scroll", changeSize);
console.log(elemScrollDown);
/* function changeSize() {
  console.log('hi')
  if (elemScrollDown.scrollY > currentScrollY) {
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
 */

function changeSize(e) {
  let newScroll = window.scrollY;
  if (!elemScrollDown.style.fontSize) {
    let fontUp = `${parseInt(getComputedStyle(elemScrollDown).fontSize) + 4}px`;
    newScroll > prevScroll ? (elemScrollDown.style.fontSize = fontUp) : (elemScrollDown.style.fontSize = fontDown);
  } else {
    let fontUp = `${parseInt(elemScrollDown.style.fontSize) + 4}`;
    let fontDown = `${parseInt(elemScrollDown.style.fontSize) - 4}`;
    if (newScroll > prevScroll && newScroll !== prevScroll && fontUp < 250)
      elemScrollDown.style.fontSize = `${fontUp}px`;
    if (newScroll < prevScroll && newScroll !== prevScroll && fontDown > 12)
      elemScrollDown.style.fontSize = `${fontDown}px`;
  }
  prevScroll = window.scrollY;
}
