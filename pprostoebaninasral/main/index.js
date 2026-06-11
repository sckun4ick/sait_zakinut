let catalog = document.getElementById('katalogoff');
let catalog_butt = document.getElementById('catalog');
let catalog_stat = false;

let main_them = document.getElementById('nacucanil')

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
    }
]

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

sliderCarts.innerHTML = artForSlider.map(
    item => `<article>
                <img src="resource/slider_popular/slider-img (${item.img_slider}).png" alt="">
                <div>
                    <h3>${item.title}</h3>
                </div>
            </article>`,
).join('');

main_them.innerHTML = mal.map(
    item => `<article class="article${item.mal_active}">
                    <div class="left">
                        <h2>${item.title}</h2>
                        <p>${item.text}</p>
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