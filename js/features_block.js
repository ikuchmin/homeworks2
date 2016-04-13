let features = [{
    title: 'Branding',
    icon: 'icon-feather',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
}, {
    title: 'Development',
    icon: 'icon-pencil',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
}, {
    title: 'Consulting',
    icon: 'icon-megaphone',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
}]

document.querySelector('.features__swiper-wrapper').innerHTML = `<div class="swiper-slide">\n` + 
    features.map( ({title, icon, text}) => `
        <div class="col-md-4">
            <div class="features__item">
                <div class="features__icon">
                    <i class="features__i ${icon}"></i>
                </div>
                <div class="features__descr">
                    <h2 class="features__title">${title}</h2>
                    <p class="features__text">${text}</p>
                </div>
            </div>
        </div>
    `).reduce((res, curr) => res = res + curr, ``) + `</div>`