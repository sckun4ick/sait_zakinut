
let catalog = document.getElementById('katalogoff');
let catalog_butt = document.getElementById('catalog');
let catalog_stat = false;

//Knopochki
let butt_down = document.getElementById('down_butt')
let butt_up = document.getElementById('up_butt')

let rounds = document.querySelectorAll('.rounds')

let mal = [
    {mal_active : "",
    title: "Малина свежемороженая",
    text: 'Малина – очень вкусная и ароматная ягода. Она обладает жаропонижающим и противовоспалительным эффектом, богата железом, медью и витаминами А, Е, РР, В2. На производстве используется технология шоковой заморозки, что позволяет сохранить вкус, аромат и пользу свежих ягод. В свежем виде эта ягода – настоящее лакомство. Кроме того с ней можно готовить различные десерты и пироги.',
    price_now: "250 ₽/кг",
    price_old: "350 ₽/кг",
    img_src: "resource/malinka (2).png"
    },

    {mal_active : " hidden",
    title: "Малина голубая",
    text: 'Голубая малина — это не просто ягода, а настоящее экзотическое лакомство с незабываемым ароматом и фантастическим вкусом. Она сочетает в себе природную пользу и уникальный вид: ягода богата железом, медью, а также витаминами А, Е, РР и В2. Благодаря этому она обладает мощным противовоспалительным и жаропонижающим эффектом.Чтобы сохранить её редкий вкус, сочность и всю палитру полезных свойств, мы используем технологию мгновенной шоковой заморозки.В свежем виде эта неоново-яркая ягода станет главным украшением стола. Кроме того, она идеально подходит для создания эффектных десертов, пирогов, авторских коктейлей и смузи, которые точно удивят ваших гостей.',
    price_now: "790 ₽/кг",
    price_old: "1490 ₽/кг",
    img_src: "resource/malinka (1).png"
    }   
]

let artForSlider = [
    {
        img_slider: "1",
        title:"Молочная продукция"
    },

    {
        img_slider: "2",
        title:"Мясная продукция"
    },

    {
        img_slider: "3",
        title:"Овощи"
    },

    {
        img_slider: "4",
        title:"Ягоды"
    },

    {
        img_slider: "1",
        title:"Молочная продукция"
    },

    {
        img_slider: "2",
        title:"Мясная продукция"
    },

    {
        img_slider: "3",
        title:"Овощи"
    },

    {
        img_slider: "4",
        title:"Ягоды"
    },
]

let aricle_firstSlider = [
    {
        img_num:'1',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'2',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'3',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'4',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'5',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'6',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'7',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'8',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },
]

const arti_napol = [
    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '“TDA” установила новый мировой рекорд Гиннесса'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '“TDA” установила новый мировой рекорд Гиннесса'
    },

    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '“TDA” установила новый мировой рекорд Гиннесса'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '“TDA” установила новый мировой рекорд Гиннесса'
    }
]

const sliderNews = document.getElementById('track')

sliderNews.innerHTML = arti_napol.map(
    item => `<article onclick="window.location.href='../text/index.html'">
                    <img src="resource/Новая папка/news_posts (${item.img}).png" alt="">
                    <div class="center_2">
                        <div>
                            <p>${item.date}</p>
                            <h2>${item.title}</h2>
                        </div>
                    </div>
                </article>
               
            </div>`,
).join('');

const carousel = document.getElementById('carousel_track')

carousel.innerHTML = aricle_firstSlider.map(
    item => `<article>
                        <img src="resource/products/(${item.img_num}).png" alt="">
                        <div class="item_info">
                            <p>${item.item_name}</p>
                            <div class="down_section_cart">
                                <div>
                                    <h2>${item.old_price}</h2>
                                    <span>${item.new_price}</span>
                                </div>
                                <button>
                                    <img src="resource/icons/cart.svg" alt="">
                                </button>
                            </div>
                            
                        </div>
                    </article>`,
).join('');

const leftButton = document.querySelector('.arrow.left')
const rightButton = document.querySelector('.arrow.right')

let currentItemIndex = 0 

function updateCarouselPosition() {
    const items = Array.from(carousel.children)
    if (items.length === 0) return
    const itemWidth = items[0].getBoundingClientRect().width
    const computedStyle = window.getComputedStyle(carousel)
    const gap = parseFloat(computedStyle.gap) || parseFloat(computedStyle.marginRight) || 0
    const visibleWidth = carousel.parentElement.getBoundingClientRect().width
    const itemsInWindow = Math.max(1, Math.floor(visibleWidth / (itemWidth + gap || 1)))
    const maxIndex = Math.max(0, items.length - itemsInWindow)
    currentItemIndex = Math.max(0, Math.min(currentItemIndex, maxIndex))

    const offsetPx = -currentItemIndex * (itemWidth + gap)
    carousel.style.transform = `translateX(${offsetPx}px)`

    leftButton.style.opacity = currentItemIndex === 0 ? '0.5' : '1'
    rightButton.style.opacity = currentItemIndex >= maxIndex ? '0.5' : '1'
    
    console.log(`Индекс: ${currentItemIndex}, Сдвиг: ${offsetPx}px, Видимо карточек: ${itemsInWindow}`)
}

leftButton.addEventListener('click', () => {
    if (currentItemIndex > 0) {
        currentItemIndex--
        updateCarouselPosition()
    }
})

rightButton.addEventListener('click', () => {
    const items = Array.from(carousel.children)
    const itemWidth = items[0]?.getBoundingClientRect().width || 0
    const computedStyle = window.getComputedStyle(carousel)
    const gap = parseFloat(computedStyle.gap) || parseFloat(computedStyle.marginRight) || 0
    const visibleWidth = carousel.parentElement.getBoundingClientRect().width
    const itemsInWindow = Math.max(1, Math.floor(visibleWidth / (itemWidth + gap || 1)))
    const maxIndex = Math.max(0, items.length - itemsInWindow)

    if (currentItemIndex < maxIndex) {
        currentItemIndex++
        updateCarouselPosition()
    }
})

window.addEventListener('resize', updateCarouselPosition)
document.addEventListener('DOMContentLoaded', updateCarouselPosition)
window.addEventListener('load', updateCarouselPosition)
updateCarouselPosition()

const miniItems = document.querySelectorAll('.mini_item');
const mainImg = document.querySelector('.iside_theme div img');
const btnLeft = document.getElementById('left_circle');
const btnRight = document.getElementById('right_circle');

let currentIndex = 0;
const totalItems = miniItems.length;

const imagesSrc = Array.from(miniItems).map(item => item.querySelector('img').src);


function updataPrikola() {
    mainImg.src = imagesSrc[currentIndex];
    
    miniItems.forEach(item => item.classList.remove('active'));
    miniItems[currentIndex].classList.add('active');
}

updataPrikola();

btnRight.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updataPrikola();
});

btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; 
    }
    updataPrikola();
});


let catalogImages = catalog_butt.querySelectorAll('img.list');
let sliderCarts = catalog_butt.querySelectorAll('articles');

catalog_butt.addEventListener('click', () => {
    
    catalog_stat = !catalog_stat;

    if (catalog_stat) {
        catalog.style.display = "flex";
    } else {
        catalog.style.display = "none";
    }

    catalogImages.forEach(img => {
        img.classList.toggle('active');
    });
});

const sliderCart = document.getElementById('articles')

sliderCart.innerHTML = artForSlider.map(
    item => `<article class="artMove" onclick="window.location.href='../vejetables/index.html';">
                <img src="resource/slider_popular/slider-img (${item.img_slider}).png" alt="">
                <div>
                    <h3>${item.title}</h3>
                </div>
            </article>`,
).join('');

const scrollBarr = document.querySelector('.scroll_barr')
const scrollTap = document.querySelector('.scroll_tap')

let articleMoves = document.querySelectorAll(".artMove")

let isDragging = false
let offsetX, offsetY

scrollTap.addEventListener('mousedown', (e) =>{
    isDragging = true;
    offsetX = e.clientX - scrollTap.getBoundingClientRect().left;
    document.body.style.userSelect = 'none'; 
})

document.addEventListener('mousemove', (e) =>{
    if (!isDragging) return

    const barrRect = scrollBarr.getBoundingClientRect()
    
    let x = e.clientX - barrRect.left - offsetX

    const minX = 0;
    const maxX = scrollBarr.clientWidth - scrollTap.clientWidth

    x = Math.max(minX, Math.min(x, maxX))
    scrollTap.style.left = `${x}px`

    const progress = x / maxX   
    const maxScroll = sliderCart.scrollWidth - sliderCart.clientWidth
    
    sliderCart.scrollLeft = progress * maxScroll
})

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = ''
})

let main_them = document.getElementById('nacucanil')

main_them.innerHTML = mal.map(
    item => `<article class="article${item.mal_active}">
                    <div class="left">
                        <h2>${item.title}</h2>
                        <p>${item.text}</p>
                        <div class="mobile_prik">
                            <p>${item.text}</p>
                            <span>Читать далее</span>
                        </div>
                        <div class="pr">
                            <h3>${item.price_now}</h3>
                            <h4>${item.price_old}</h4>
                        </div>
                        <div class="butts">
                            <button class="purple">В корзину</button>
                            <button class="brod_purp">Подробнее</button>
                        </div>
                    </div>
                    <div class="right">
                        <img src="${item.img_src}" alt="" class="cheto">
                    </div>
                </article>`,
).join('');

let articles = document.querySelectorAll('.article')
let round = document.querySelectorAll('.rounds')

let numberRound = 0

function updateRound(){
    round.forEach((num, index) => {
        if (index === numberRound){
            num.classList.add('active')
        } else{
            num.classList.remove('active')
        }
    })
}

butt_down.addEventListener('click', () => {
    console.log('Кнопка вниз нажата')
    articles.forEach(art => {
        art.classList.toggle('hidden') 
        console.log('Переключил')
    })

    if (numberRound > 0) {
        numberRound--;
    } else {
        numberRound = round.length - 1; 
    }

    updateRound();
    console.log('Поменял кружочек')
})

butt_up.addEventListener('click', () => {
    console.log('Кнопка вверх нажата')
    articles.forEach(art => {
        art.classList.toggle('hidden')
        console.log('Переключил')
    })

    if (numberRound < round.length - 1) {
        numberRound++;
    } else {
        numberRound = 0; 
    }

    updateRound();
    console.log('Поменял кружочек')
})

const newsTrack = document.getElementById('track');
const newsLine = document.getElementById('line');
const newsPipka = document.querySelector('.greenPipka');

let isDraggingNews = false;
let startXNews, scrollLeftNews;

function updateNewsSlider() {
    if (!newsTrack || !newsLine || !newsPipka) return;
    
    const maxScroll = newsTrack.scrollWidth - newsTrack.clientWidth;
    const currentScroll = newsTrack.scrollLeft;
    
    let progress = 0;
    if (maxScroll > 0) {
        progress = currentScroll / maxScroll;
    }
    
    const maxPipkaPos = newsLine.clientWidth - newsPipka.clientWidth;
    newsPipka.style.left = `${progress * maxPipkaPos}px`;
}

window.addEventListener('load', updateNewsSlider);
window.addEventListener('resize', updateNewsSlider);

if (newsTrack) {
    newsTrack.addEventListener('scroll', updateNewsSlider);
}

if (newsPipka && newsLine) {
    newsPipka.addEventListener('mousedown', (e) => {
        isDraggingNews = true;
        startXNews = e.clientX - newsPipka.getBoundingClientRect().left;
        document.body.style.userSelect = 'none'; 
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDraggingNews) return;
        
        const lineRect = newsLine.getBoundingClientRect();
        let x = e.clientX - lineRect.left - startXNews;
        
        const minX = 0;
        const maxX = newsLine.clientWidth - newsPipka.clientWidth;
        x = Math.max(minX, Math.min(x, maxX));
        
        newsPipka.style.left = `${x}px`;
        
        const maxScroll = newsTrack.scrollWidth - newsTrack.clientWidth;
        const progress = x / (newsLine.clientWidth - newsPipka.clientWidth);
        newsTrack.scrollLeft = progress * maxScroll;
    });

    document.addEventListener('mouseup', () => {
        isDraggingNews = false;
        document.body.style.userSelect = '';
    });
}