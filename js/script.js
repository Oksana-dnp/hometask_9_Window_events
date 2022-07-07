let elemScrollDown = document.querySelector(".scroll-block__item--down");
let elemScrollUp = document.querySelector(".scroll-block__item--up");

let prevScroll = window.screenY;
window.addEventListener("scroll", changeSize);
window.addEventListener("scroll", moveBlocks);


function changeSize(e) {
  let newScroll = window.scrollY;
  if (!elemScrollDown.style.fontSize) {
    let fontUp = `${parseInt(getComputedStyle(elemScrollDown).fontSize) + 2}px`;
    newScroll > prevScroll ? (elemScrollDown.style.fontSize = fontUp) : (elemScrollDown.style.fontSize = fontDown);
  } else {
    let fontUp = `${parseInt(elemScrollDown.style.fontSize) + 2}`;
    let fontDown = `${parseInt(elemScrollDown.style.fontSize) - 2}`;
    if (newScroll > prevScroll && newScroll !== prevScroll && fontUp < 250)
      elemScrollDown.style.fontSize = `${fontUp}px`;
    if (newScroll < prevScroll && newScroll !== prevScroll && fontDown > 12)
      elemScrollDown.style.fontSize = `${fontDown}px`;
  }
  prevScroll = window.scrollY;
}

function moveBlocks(e){
  let blockLeft = document.querySelector('.scroll-block__content');
  let blockRight = document.querySelector('.scroll-block__img');
  move(blockLeft, "left");
  move(blockRight, "right");
}


function move(elem,  direction) {
  let step;
  direction == "left" ?  (step = parseInt(elem.style.left) + 2) : (step = parseInt(elem.style.right) + 2);
  if(window.scrollY > 300){
    direction == "left" ? (elem.style.left = step + "px") : (elem.style.right = step + "px")
  } 
}