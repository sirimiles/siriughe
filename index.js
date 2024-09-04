// Mobile Menu Toggle
document.getElementById("mobile-menu").addEventListener("click", function () {
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("show");
  } else {
    mobileNav.classList.remove("show");
    mobileNav.classList.add("hidden");
  }
});
