/*****************
  tabspace.js
  Ryosuke Takata
******************/

// get value
function tabToSpace() {
  var tabText = document.form_tabspace.f_tab.value;

  document.form_tabspace.f_space.value = tabText.replace(/\t/g, "  ");
}
