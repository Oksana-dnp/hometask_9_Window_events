
let fontDown = document.querySelector('.scroll-down');
let scrollBtn = document.querySelectorAll('.scroll-block__item span');
console.log(scrollBtn)

window.addEventListener('scroll', changeSize);

for(let i=0; i< scrollBtn.length; i++){
  scrollBtn[i].addEventListener('mouseover', (e) =>{
   e.target.style.color = "red";
  })
  scrollBtn[i].addEventListener('mouseout', (e) =>{
    e.target.style.color = "#000";
   })
}
//let stepDirection;


function changeSize() {
  let stepSize;

  if (window.scrollY < 500) {
    stepSize = window.scrollY / 5 + 10;
    if(stepSize > 16)  document.querySelector(".scroll-down").style.fontSize = `${stepSize}px`;
   
  }
  if (window.scrollY > 500 && window.scrollY < 1000) {
    let blockLeft = document.querySelector(".scroll-block__item-decor");
    let blockRight = document.querySelector(".scroll-block__img");
    move(blockLeft, "left");
    move(blockRight, "right");
  }
  if (window.scrollY > 1000) {
    stepSize = 50 - Math.ceil(window.scrollY / 100) * 1.3;
    console.log("window.scrollY", Math.ceil(window.scrollY / 100));
    document.querySelector(".scroll-up").style.fontSize = `${stepSize}px`;
    console.log(window.scrollY);
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
//move block
function moveBlocks(e){
  let blockLeft =document.querySelector('.scroll-block__item-decor');
  let blockRight = document.querySelector('.scroll-block__img');
  move(blockLeft, "left");
  move(blockRight, "right");
}
function move(elem,  direction) {
  let newPos = window.scrollY/5;
  direction == "left"? elem.style.left = `${newPos}px` : elem.style.right = `${newPos}px`
  if(direction == "left") {
    document.querySelector('.scroll-block__item-decor').style.width= `${305+newPos}px`
  } 
}