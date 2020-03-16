document.getElementById("__old").style.display = "none";

function shift() {
    const nuxt = document.getElementById("__nuxt");
    const old = document.getElementById("__old");

    if (nuxt.style.display == "block") {
      nuxt.style.display = "none";
      old.style.display = "block"
    } else {
      nuxt.style.display = "block";
      old.style.display = "none";
    }
}