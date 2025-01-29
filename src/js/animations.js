export const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-right, .swipe-left, .swipe-right, .swipe-left1, .swipe-right1");
export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if(!entry.target.classList.contains('about__bar-progress')) entry.target.classList.add("show");

      //ti go naogjat elementov so taa klasa 
      if(entry.target.classList.contains('about__progress')) {
        entry.target.addEventListener('transitionend', () => {
        entry.target.querySelectorAll('.about__bar-progress').forEach(el => el.classList.add('show'));
      });
    }
    }
  });
});


