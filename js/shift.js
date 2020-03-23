function shift(oldIdx, nuxtIdx) {
  const old = document.getElementById(oldIdx);
  const nuxt = document.getElementById(nuxtIdx);

  if (old.style.display == "none") {
    // nuxt -> old
    location.replace(location.href);
    old.style.display = "block";
    nuxt.style.display = "none";
  } else {
    // old -> nuxt
    old.style.display = "none";
    nuxt.style.display = "block";
  }
}
