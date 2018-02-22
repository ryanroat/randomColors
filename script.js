var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var boxColor = rootStyles.getPropertyValue('--box-color');
var nextColor, nextHex, hexLength;

// console.log(boxColor);

function rando(max) {
  return (Math.floor(Math.random() * Math.floor(max))+1);   // returns a 'random' number btwn 1 and max inclusive
}

function changeColor(){
  nextColor = rando(16777216);
  nextHex = nextColor.toString(16);
  hexLength = nextHex.length;
  for (var i=0; i < (6-hexLength); i++) {
    nextHex = '0'+nextHex;
  }

  console.log(nextColor, nextHex, hexLength);

  root.style.setProperty('--box-color', '#'+nextHex);
}

setInterval(changeColor,2500);

