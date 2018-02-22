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
  nextHex = '#'+nextHex.toUpperCase();
  

  root.style.setProperty('--box-color', nextHex);

  var c = nextHex.substring(1);      // strip #
  var rgb = parseInt(c, 16);   // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff;  // extract red
  var g = (rgb >>  8) & 0xff;  // extract green
  var b = (rgb >>  0) & 0xff;  // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  console.log(nextColor, nextHex, hexLength, luma);

  if (luma < 95) {
    // pick a different colour
    root.style.setProperty('--text-color', '#C0C0C0');
} else {
  root.style.setProperty('--text-color', '#282828');
}

  var hexText = document.querySelector('h2')
  hexText.innerHTML = nextHex;
}

setInterval(changeColor,1500);

