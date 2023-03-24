let navOpen = false;

document.getElementById("drawer");

document.getElementById("nav-menu-button2").addEventListener("click", () => {
    navOpen = !navOpen;
    drawer.dataset.open = `${navOpen}`;
});