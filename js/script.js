let elemScrollDown = document.querySelector(".scroll-block__item--down");
let elemScrollUp = document.querySelector(".scroll-block__item--up");

let prevScroll = window.screenY;
let prevPos = window.scrollY;
window.addEventListener("scroll", changeSize);
window.addEventListener("scroll", moveBlocks);


function changeSize(e) {
  let newScroll = window.scrollY;
  if(window.scrollY < 250){
    if (!elemScrollDown.style.fontSize) {
      let fontUp = `${parseInt(getComputedStyle(elemScrollDown).fontSize) + 3}px`;
      newScroll > prevScroll ? (elemScrollDown.style.fontSize = fontUp) : (elemScrollDown.style.fontSize = fontDown);
    } else {
      let fontUp = `${parseInt(elemScrollDown.style.fontSize) + 3}`;
      let fontDown = `${parseInt(elemScrollDown.style.fontSize) - 3}`;
      if (newScroll > prevScroll && newScroll !== prevScroll && fontUp < 250)
        elemScrollDown.style.fontSize = `${fontUp}px`;
      if (newScroll < prevScroll && newScroll !== prevScroll && fontDown > 12)
        elemScrollDown.style.fontSize = `${fontDown}px`;
    }
  }
  prevScroll = window.scrollY;
}


function moveBlocks(e){
 /*  let blockLeft = document.querySelector('.scroll-block__content'); */
 let blockLeft =document.querySelector('.scroll-block__item-decor');
  let blockRight = document.querySelector('.scroll-block__img');
  move(blockLeft, "left");
  move(blockRight, "right");
}


let stepDirection ;


function move(elem,  direction) {
  let newPos = window.scrollY;
  let step;

  if(window.scrollY > 250 && window.scrollY < 620){
    if( (prevPos - newPos) < 0) stepDirection = 5;
    else if((prevPos- newPos) > 0) stepDirection = -5;
    direction == "left" ?  (step = parseInt(elem.style.width) + stepDirection ) : (step = parseInt(elem.style.right) + stepDirection );
    direction == "left" ? (elem.style.width = step + "px") : (elem.style.right = step + "px");

  } 
  prevPos = window.scrollY;
}
