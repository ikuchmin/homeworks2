//var lock = false;

class BlockingQueue {
    constructor(listener=function(){}) {
        this.listener = listener;
        this.elements = [];
        this.lock = false;
    }

    offer(element) {
        this.elements.push(element);

        if (!this.lock && this.listener != undefined) {
            this.lock = true;   
            this.listener(this.elements.shift());
        }
    }
    poll() {
        return this.elements.shift();
    }
}

var seqLoad = function({url, responseType, callback}) {
    let conn = new XMLHttpRequest();
    conn.open("GET", url, true);
    conn.responseType = responseType;

    conn.onload = (e) => {
        let next = this.poll();
        if (next == undefined) {
            this.lock = false;
        } else {
            this.listener(next);
        }
        callback(e);
    }
    conn.send();
}

var loadQueue = new BlockingQueue(seqLoad);
loadQueue.load = function(url, responseType="blob", callback=function(){}) {
    this.offer({url: url, responseType: responseType, callback: callback});
}

var sequenceLoad = function(url, responseType="blob", callback=function(){}) {
    loadQueue.load(url, responseType, callback);
}

class SlidingQueue extends BlockingQueue {
    constructor(listener) {
        super(listener);
        this.elements.push = function(element) {
            this[0] = element; // Ignore contract which return length array or position, but it is js
        }
    }
}

var urlCreator = window.URL || window.webkitURL;

var buildImageQueue = function(fnElement) {
    var imgQueue = new SlidingQueue();
    var listenerAction = function() {
        setTimeout(() => {
            let next = this.poll();
            console.log(next);
            if (next == undefined) {
                this.lock = false;
            } else {
                this.listener(next);
            }
        }, 100)
    };
    let closureElementListener = function() {
        let element;
        return function(url) {
            if (element === undefined) {
                element = fnElement();
                element.addEventListener('transitionend', listenerAction.bind(imgQueue), true);
                console.log(element);
            };
            element.style.backgroundImage = `url(${url})`;
        }
    }
    imgQueue.listener = closureElementListener();
    return imgQueue;
}

var seqLoadImage = function(urls, element) {
    let imgQueue = buildImageQueue(() => element);
    urls.forEach((url) => loadQueue.load(url, "blob", (e) => imgQueue.offer(urlCreator.createObjectURL(e.target.response))));
}

var updateMainCSS = function(txt) {
    let bodyElement = document.querySelector('#body');
    let style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(txt));
    bodyElement.appendChild(style);
}

loadQueue.load("./css/main.css", "text", (e) => updateMainCSS(e.target.response));

var stFeatures = "";
loadQueue.load("./css/features.css", "text", (e) => stFeatures = e.target.response);
loadQueue.load("./js/features_block.js", "text", (e) => eval(e.target.response));

var fontPacificoURL = "";
var updatePacificoCSS = function(fontPacificoURL) {
    var templatePacifico = `
        @font-face {
          font-family: 'Pacifico';
          font-style: normal;
          font-weight: 400;
          src: local('Pacifico Regular'), local('Pacifico-Regular'), url(${fontPacificoURL}) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
        }`;
    updateMainCSS(templatePacifico);
};

loadQueue.load("./fonts/Pacifico.woff2", "blob", (e) => updatePacificoCSS(urlCreator.createObjectURL(e.target.response)));

var stWorks = "";
loadQueue.load("./css/works.css", "text", (e) => stWorks = e.target.response);

var portfolio = [
    ["./images/portfolio/f1_1.webp", "./images/portfolio/f1_2.webp"],
    ["./images/portfolio/f2_1.webp", "./images/portfolio/f2_2.webp"],
    ["./images/portfolio/f3_1.webp", "./images/portfolio/f3_2.webp"],
    ["./images/portfolio/f4_1.webp", "./images/portfolio/f4_2.webp"],
    ["./images/portfolio/f5_1.webp", "./images/portfolio/f5_2.webp"],
    ["./images/portfolio/f6_1.webp", "./images/portfolio/f6_2.webp"],
    ["./images/portfolio/f7_1.webp", "./images/portfolio/f7_2.webp"],
    ["./images/portfolio/f8_1.webp", "./images/portfolio/f8_2.webp"],
]
loadQueue.load("./js/works_block.js", "text", (e) => eval(e.target.response));

var seqPortfolio = {};
var count = 0;
portfolio.forEach((el, index) => {
    var imgQueue = buildImageQueue(() => document.querySelector(`.portfolio__item--${index}`));
    el.forEach((url, inIndex) => {
        seqPortfolio[index + inIndex * 8] = () => loadQueue.load(url, "blob", (e) => imgQueue.offer(urlCreator.createObjectURL(e.target.response)));
        count++;
    });
});
seqPortfolio.length = count;
seqPortfolio.forEach = Array.prototype.forEach;
seqPortfolio.forEach((el) => el());

var titleUrls = ["./images/home/slide1_step_0.webp", 
                 "./images/home/slide1_step_1.webp",
                 "./images/home/slide1_step_2.webp",
                 "./images/home/slide1_step_3.webp",
                 "./images/home/slide1_step_4.webp"]


seqLoadImage(titleUrls, document.querySelector('.home__swiper-slide-bg'))
