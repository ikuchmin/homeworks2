let filterWorks = [{
    cl: 'filter__item--active active filter',
    df: 'all',
    desc: 'All'
}, {
    cl: 'filter',
    df: '.branding',
    desc: 'Branding'
}, {
    cl: 'filter',
    df: '.web',
    desc: 'Web'
}, {
    cl: 'filter',
    df: '.logodesign',
    desc: 'Logo Design'
}, {
    cl: 'filter',
    df: '.photography',
    desc: 'Photography'
}]

var elWorks = document.querySelector('#works');
elWorks.innerHTML = 
    `<style>${stWorks}</style>
     <h1 class="section__title">Works</h1>
     <hr class="section__delimiter section__delimiter--bg-white" />
     <p class="section__note">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
     <div class="works__container">
        <div class="filter">
            <ul class="filter__list">` +
                filterWorks.map(({cl, df, desc}) => `
                    <li class="filter__item ${cl}" data-filter="${df}">${desc}</li>
                `).reduce((res, curr) => res = res + curr, ``) + `
            </ul>				
        </div>
        <div id="portfolio" class="portfolio">` +
            portfolio.map((el, index) => `
                ${(index % 4 == 0) && '<div class="portfolio_row">' || ''}
                    <div class="portfolio__item portfolio__item--${index}"></div>
                ${(index % 4 == 3) && '</div>' || ''}
            `).reduce((res, curr) => res = res + curr, ``) + `
        </div>
    </div>`
    
elWorks.style.opacity = 1