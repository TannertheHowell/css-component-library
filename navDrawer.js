let navOpen = false;

document.getElementById("drawer");

document.getElementById("nav-menu-button").addEventListener("click", () => {
    navOpen = !navOpen;
    drawer.dataset.open = `${navOpen}`;
});