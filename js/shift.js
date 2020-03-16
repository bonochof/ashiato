function shift() {
  const old = document.getElementById("__old");
  const nuxt = document.getElementById("__nuxt");

  if (old.style.display == "none") {
    old.style.display = "block";
    nuxt.style.display = "none";
  } else {
    old.style.display = "none";
    nuxt.style.display = "block";
  }
}
