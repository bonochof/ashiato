/*****************
  convert.js
  Ryosuke Takata
******************/

// get value
function numberConvert() {
  var n1 = document.form_conv.f_n1.value;
  var n2 = document.form_conv.f_n2.value;
  var val = document.form_conv.f_val.value;

  document.form_conv.f_output.value = getValue(toDec(val, n1), n2);
}

// convert to decimal
function toDec(val, n) {
  return parseInt(val, n);
}

// convert to n-digits
function getValue(dec, n) {
  return dec.toString(n);
}
