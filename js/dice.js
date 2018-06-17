/*****************
  dice.js
  Ryosuke Takata
******************/

function altRan2() {
  // get rand value
  var r = Math.floor(Math.random() * 6) + 1;

  // output
  document.getElemenetById("sai").innerHTML = r;
}
