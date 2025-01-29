import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import img8 from "../img/8.png"
import img9 from "../img/9.png"

const mockData = [
    {
        title: 'Transformational Soul Healing Therapy',
        lang: 'UX/UI, HTML, CSS, SCSS, JavaScript',
        img: img1,
        url: 'https://nikola-billy-oschenigen.netlify.app'  
    },
    {
        title: 'Paro',
        lang: 'HTML, CSS, SCSS, Bootstrap',
        img: img2,
        url: 'https://app.netlify.com/sites/topsa/overview' 
    },
    {
        title: 'My Flat',
        lang: 'HTML, CSS, SCSS, Bootstrap',
        img: img3,
        url: 'https://my-flat.netlify.app'
    },
    {
        title: 'Nexter',
        lang: 'HTML, CSS, SCSS (Grid System)',
        img: img4,
        url: 'https://nexter-ks.netlify.app' 
    },
    {
        title: 'Trillo',
        lang: 'HTML, CSS, SCSS (Flexbox System)',
        img: img5,
        url: 'https://trillo-ks.netlify.app'
    },
    {
        title: 'Omnifood',
        lang: 'HTML, CSS, JavaScript',
        img: img6,
        url: 'https://omni-ks.netlify.app/'
    },
    {
        title: 'Mizuxe',
        lang: 'HTML, SCSS, Bootstrap, JQuery',
        img: img7,
        url: 'https://mizuxe-ks.netlify.app/'
    },
    {
        title: 'Glozzom',
        lang: 'HTML, SCSS, Bootstrap, JQuery, JavaScript',
        img: img8,
        url: 'https://glozzom-ks.netlify.app'
    },
    {
        title: 'LoopLAB',
        lang: 'HTML, CSS, Bootstrap, JQuery',
        img: img9,
        url: 'https://looplab-ks.netlify.app'
    },
]

export const projectsData = function () {
    const headerEl = document.querySelector(".portfolio__box");
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    if (!headerEl.classList.contains('dropdown-show') && !mediaQuery.matches) return mockData.slice(0, 6);
    if (!headerEl.classList.contains('dropdown-show') && mediaQuery.matches) return mockData.slice(0, 3);
    return mockData
}


