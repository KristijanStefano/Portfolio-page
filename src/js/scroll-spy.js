export const spying = function () {
    let isManualScroll = false;
    const navLinks = document.querySelectorAll("nav li a");
    const sections = document.querySelectorAll("section");
  
    // Handle manual click on navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }
  
        setActiveLink(link);
        isManualScroll = true;
        setTimeout(() => (isManualScroll = false), 1000);
      });
    });
  
    // Set active link during scrolling
    window.addEventListener("scroll", () => {
      if (isManualScroll) return;
  
      const scrollDistance = window.scrollY;
  
      sections.forEach((section, index) => {
        if (section.offsetTop <= scrollDistance + 50) {
          setActiveLink(navLinks[index]);
        }
      });
    });
  
    function setActiveLink(activeLink) {
      navLinks.forEach((link) => link.classList.remove("active"));
      activeLink.classList.add("active");
    }
}