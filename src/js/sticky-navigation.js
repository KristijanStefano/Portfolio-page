const observerSetup = function (entries) {
    const ent = entries[0];
    const nav = document.querySelector(".nav");
  
    ent.isIntersecting 
    ? nav.classList.remove("sticky")
    : nav.classList.add("sticky");
}
  
export const obs = new IntersectionObserver(
observerSetup,
{
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-40px",
}
);
  
export const obsS = new IntersectionObserver(
observerSetup,
{
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-120px",
}
);