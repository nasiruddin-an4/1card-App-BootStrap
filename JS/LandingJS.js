// Example: Close offcanvas when clicking a link
document.querySelectorAll(".offcanvas .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvasEl = document.querySelector("#offcanvasNavbar");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) offcanvas.hide();
  });
});
