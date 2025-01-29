
export const mobileNavigation = function (e) {
    const bodyEl =  document.querySelector("body");
    const toggleNavButton = document.querySelector(".toggle__btn");

    const link = e.target.closest('.toggle-menu__item');
    const btn = e.target.closest('.toggle__btn');
    if (!link && !btn) return;

    if (link) {
    toggleNavButton.classList.toggle("toggle__checked")
    bodyEl.classList.toggle("oy-hidden");
    }

    if (btn) {
    bodyEl.classList.toggle("oy-hidden");
    toggleNavButton.classList.toggle("toggle__checked")
    }
    
}
