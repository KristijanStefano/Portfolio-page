const mockData = [
    {
        title: 'Transformational Soul Healing Therapy',
        lang: 'UX/UI, HTML, CSS, SCSS, JavaScript',
        img: '1',
        url: 'https://nikola-billy-oschenigen.netlify.app'  
    },
    {
        title: 'Paro',
        lang: 'HTML, CSS, SCSS, Bootstrap',
        img: '2',
        url: 'https://app.netlify.com/sites/topsa/overview' 
    },
    {
        title: 'My Flat',
        lang: 'HTML, CSS, SCSS, Bootstrap',
        img: '3',
        url: 'https://my-flat.netlify.app'
    },
    {
        title: 'Nexter',
        lang: 'HTML, CSS, SCSS (Grid System)',
        img: '4',
        url: 'https://nexter-ks.netlify.app' 
    },
    {
        title: 'Trillo',
        lang: 'HTML, CSS, SCSS (Flexbox System)',
        img: '5',
        url: 'https://trillo-ks.netlify.app'
    },
    {
        title: 'Omnifood',
        lang: 'HTML, CSS, JavaScript',
        img: '6',
        url: 'https://omni-ks.netlify.app/'
    },
    {
        title: 'Mizuxe',
        lang: 'HTML, SCSS, Bootstrap, JQuery',
        img: '7',
        url: 'https://mizuxe-ks.netlify.app/'
    },
    {
        title: 'Glozzom',
        lang: 'HTML, SCSS, Bootstrap, JQuery, JavaScript',
        img: '8',
        url: 'https://glozzom-ks.netlify.app'
    },
    {
        title: 'LoopLAB',
        lang: 'HTML, CSS, Bootstrap, JQuery',
        img: '9',
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


