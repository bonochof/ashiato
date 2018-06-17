/*****************
  repeat.js
  Ryosuke Takata
******************/

// get value
function setRepeat() {
  var s = document.form_repeat.f_text.value;
  var num = document.form_repeat.f_number.value;
  document.getElementById("output").innerHTML = repeatText(s, num);
}

// repeat
function repeatText(s, num) {
  var t, n;
  t = "";

  for (n = 0; n < num; n++) {
    t += s;
  }

  return t;
}
