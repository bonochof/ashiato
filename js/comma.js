/*****************
  comma.js
  Ryosuke Takata
******************/

// get value
function number_format() {
  var str = document.form_comma.f_input.value;
  document.form_comma.f_output.value = getComma(str);
}

// set comma
function getComma(num) {
  num = new String(num).replace(/,/g, "");
  while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
  return num;
}
