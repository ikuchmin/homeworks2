let features = [{
    title: 'Branding',
    icon: `<svg class="features__i" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 487.38 487.38" xml:space="preserve" width="512px" height="512px"><path d="M293.859,13.178c-11.516,13.291-23.54,31.847-31.738,57.099c0,0-8.41-24.196,6.923-48.126  c-14.426,13.041-32.762,35.133-43.972,69.655c0,0-10.311-29.876,13.064-56.075c-0.445,0.227-0.891,0.446-1.33,0.673  c-38.895,19.823-64.116,59.298-65.697,102.918c0,0.031,0,0.07,0,0.102c0,0-17.891-25.495-3.222-56.787  c-0.008,0.008-0.016,0.016-0.024,0.023c-16.585,14.371-28.069,33.482-33.044,54.854c-2.269,9.762-3.834,20.63-4.263,32.646  c0,0-11.202-16.045-8.583-38.263c-0.014,0.016-0.03,0.031-0.038,0.047c-8.434,11.445-15.677,22.765-21.818,33.874  c-9.755,17.639-9.818,39.153-0.125,56.832l0,0c0,0-9.693-4.443-18.455-14.895c-17.422,52.601-9.457,96.301,12.525,118.284  c2.15,2.15,4.614,4.201,7.267,6.147c-16.35,51.382-21.451,100.228-6.103,155.192c18.328-91.506,23.899-167.09,133.514-323.024  c-31.003,55.942-60.455,119.886-79.724,183.744c40.696,1.878,93.124-20.778,137.003-98.358  c50.693-89.627,30.838-189.893,129.313-244.974C384.01-3.665,340.038-0.942,293.859,13.178z" fill="#0eb493"/></g></svg>`,
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
}, {
    title: 'Development',
    icon: '<svg class="features__i" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 78 78" xml:space="preserve" width="512px" height="512px"><g><path d="M71.807,6.191c-7.215-7.216-12.629-6.133-12.629-6.133l-25.26,25.259L5.049,54.185L0,78    l23.812-5.051L52.681,44.08l25.26-25.257C77.941,18.824,79.025,13.409,71.807,6.191z M22.395,70.086l-8.117,1.748    c-0.785-1.467-1.727-2.932-3.455-4.659c-1.727-1.727-3.193-2.669-4.658-3.456l1.75-8.116l2.346-2.348c0,0,4.418,0.088,9.404,5.078    c4.988,4.987,5.078,9.407,5.078,9.407L22.395,70.086z" fill="#0eb493"/></g></svg>',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
}, {
    title: 'Consulting',
    icon: '<svg class="features__i" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 90 90" xml:space="preserve" width="512px" height="512px"><g><path d="M81.114,30.146C73.196,11.725,60.456-2.306,54.009,0.316C43.062,4.765,60.53,26.133,6.774,47.984   c-4.643,1.887-5.82,9.441-3.877,13.957c1.939,4.515,8.291,9.01,12.936,7.123c0.803-0.326,3.754-1.275,3.754-1.275   c3.316,4.45,6.787,1.811,8.018,4.639c1.479,3.398,4.697,10.785,5.789,13.298c1.096,2.511,3.576,4.837,5.377,4.153   c1.795-0.684,7.91-3.011,10.25-3.901c2.338-0.89,2.896-2.974,2.182-4.619c-0.771-1.772-3.932-2.292-4.832-4.36   c-0.902-2.068-3.848-8.696-4.695-10.785c-1.152-2.841,1.295-5.152,4.85-5.522c24.467-2.55,29.041,12.561,37.371,9.173   C90.343,67.243,89.03,48.568,81.114,30.146z M78.358,60.03c-1.432,0.582-11.061-7.013-17.215-21.334   c-6.152-14.318-5.379-27.408-3.949-27.989c1.43-0.582,10.822,8.58,16.975,22.898C80.321,47.923,79.79,59.448,78.358,60.03z" fill="#0eb493"/></g></svg>',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
}]
var elFeatures = document.querySelector('#features');
elFeatures.innerHTML = 
    `<style>${stFeatures}</style>
     <h1 class="section__title">Features</h1>
     <hr class="section__delimiter section__delimiter--bg-grey" />
     <div class="features__container">` + 
    features.map( ({title, icon, text}) => `
        <div class="features__item">
            <div class="features__icon">
                ${icon}
            </div>
            <div class="features__descr">
                <h2 class="features__title">${title}</h2>
                <p class="features__text">${text}</p>
            </div>
        </div>
    `).reduce((res, curr) => res = res + curr, ``) + `</div></div>`

elFeatures.style.opacity = 1