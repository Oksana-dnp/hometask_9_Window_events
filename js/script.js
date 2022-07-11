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
  let blockLeft =document.querySelector('.scroll-block__item-decor');
  let blockRight = document.querySelector('.scroll-block__img');
  move(blockLeft, "left");
  move(blockRight, "right");
}


let stepDirection ;


function move(elem,  direction) {
  let newPos = window.scrollY;
  let step;
  let size;
  if(window.scrollY > 500 && window.scrollY < 1000){
    if( (prevPos - newPos) < 0) stepDirection = 5;
    else if((prevPos- newPos) > 0 ) stepDirection = -5;
    direction == "left" ?  (step = parseInt(elem.style.width) + stepDirection) : (step = parseInt(elem.style.right) + stepDirection );
    direction == "left" ? (elem.style.width = step + "px") : (elem.style.right = step + "px");
    if( direction == "left") {
    size = parseInt(document.querySelector('.scroll-block__content').style.left);
    console.log('size', size);
    document.querySelector('.scroll-block__content').style.left = size + stepDirection + "px"
  } 
  prevPos = window.scrollY;
}
}

document.querySelector('.scroll-up').onclick = function(e){
  window.scrollTo(0,0);
}
document.querySelector('.scroll-up').onclick = e =>{
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
}
document.querySelector('.scroll-down').onclick = e =>{
  window.scroll({
    top: 700,
    behavior: "smooth",
  })
}
window.onscroll = ()=>{
  console.log(window.scrollY)
  let size;
  if(window.scrollY > 990) {

    if(document.querySelector('.scroll-up').style.fontSize){
      console.log(document.querySelector('.scroll-up').style.fontSize);
      size = parseInt(document.querySelector('.scroll-up').style.fontSize);
    } else {
      size = parseInt(getComputedStyle(document.querySelector('.scroll-up')).fontSize);
    }
     if(size > 12) document.querySelector('.scroll-up').style.fontSize =`${size - 1}px`;
  }
  }
