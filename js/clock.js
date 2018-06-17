/*****************
  clock.js
  Ryosuke Takata
******************/

timerID = setInterval('clock()', 500);

function clock() {
  document.getElementById("view_clock").innerHTML = getNow();
}

function getNow() {
  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth() + 1;
  var day = now.getDate();
  var you = now.getDay();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  // output
  var youbi = new Array("日", "月", "火", "水", "木", "金", "土");
  var s = year + "年" + mon + "月" + day + "日(" + youbi[you] + ") " + hour + "時" + min + "分" + sec + "秒"; 
  return s;
}
