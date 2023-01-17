const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-right, .swipe-left, .swipe-right, .swipe-left1, .swipe-right1");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // entry.target.classList.add("show");
      if(!entry.target.classList.contains('about__bar-progress')) {
        entry.target.classList.add("show");
      }
      //ti go naogjat elementov so taa klasa 
      if(entry.target.classList.contains('about__progress')) {
        entry.target.addEventListener('transitionend', () => {
        entry.target.querySelectorAll('.about__bar-progress').forEach(el => el.classList.add('show'));
      });
    }
      // setTimeout(() => {
      //   entry.target.classList.add("show");
      // }, 500);
    }
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});
hiddenElements.forEach((el) => observer.observe(el));
