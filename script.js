var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var boxColor = rootStyles.getPropertyValue('--box-color');
var nextColor, nextHex;

// console.log(boxColor);

function rando(max) {
  return (Math.floor(Math.random() * Math.floor(max))+1);   // returns a 'random' number btwn 1 and max inclusive
}

function changeColor(){
  nextColor = rando(16777216);
  nextHex = nextColor.toString(16);

  // console.log(nextColor, nextHex);

  root.style.setProperty('--box-color', '#'+nextHex);
}

setInterval(changeColor,1000);

