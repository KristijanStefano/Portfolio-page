export const dropdown = function () {
  const headerEl = document.querySelector(".portfolio__box");  
  const btnDropEl = document.querySelector(".btn-toggle");
      
  headerEl.classList.toggle("dropdown-show");
  btnDropEl.textContent = btnDropEl.textContent === 'Show Less' ? 'Show More' : 'Show Less';
}

export const callProjects = function (data) {
  const parent = document.querySelector('.portfolio__box');
  parent.innerHTML = ''

  const markup = data.map(data => `
    <div class="portfolio__item">
      <li class="portfolio__link">
        <img src="${data.img}" alt="${data.title}" class="portfolio__img" />
        <div class="portfolio__hover">
          <h4>${data.title}</h4>
          <p>${data.lang}</p>
          <p>
            <a href="${data.url}">Tap to see the project</a>
          </p>
        </div>
      </li>
    </div>
  `).join("");

  parent.insertAdjacentHTML('afterbegin', markup)
}