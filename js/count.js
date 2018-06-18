/*****************
  count.js
  Ryosuke Takata
******************/

// get and set value
function setCount() {
  var s = document.form_strcount.f_text.value;
  
  document.form_strcount.f_str.value = countStr(s);
  document.form_strcount.f_spa.value = countSpa(s);
  document.form_strcount.f_ret.value = countRet(s);
  document.form_strcount.f_par.value = countPar(s);
}

// count
function countStr(s) {
  return s.replace(/\n/g, "").length;
}

function countSpa(s) {
  return s.replace(/\s|　/g, "").length;
}

function countRet(s) {
  var r = s.match(/\n/g);
  return r && r.length + 1 || "1";
}

function countPar(s) {
  var p = s.match(/\n(?:　|\s+|「|『|＜|《|〈|≪|（|“|‘|\(|\"|\')./g);
  return p && p.length + 1 || "1";
}