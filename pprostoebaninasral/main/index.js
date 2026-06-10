let catalog = document.getElementById('katalogoff');
let catalog_butt = document.getElementById('catalog');
let catalog_stat = false;

let mal = [
    {mal_active : " active",
    title: "Малина свежемороженая",
    text: 'Малина – очень вкусная и ароматная ягода. Она обладает жаропонижающим и противовоспалительным эффектом, богата железом, медью и витаминами А, Е, РР, В2. На производстве используется технология шоковой заморозки, что позволяет сохранить вкус, аромат и пользу свежих ягод. В свежем виде эта ягода – настоящее лакомство. Кроме того с ней можно готовить различные десерты и пироги.',
    price_now: "250 ₽/кг",
    price_old: "350 ₽/кг",
    img_src: "resource/malinka (1).png"
    },

    {mal_active : "",
    title: "Малина голубая",
    text: 'Малина – очень вкусная и ароматная ягода. Она обладает жаропонижающим и противовоспалительным эффектом, богата железом, медью и витаминами А, Е, РР, В2. На производстве используется технология шоковой заморозки, что позволяет сохранить вкус, аромат и пользу свежих ягод. В свежем виде эта ягода – настоящее лакомство. Кроме того с ней можно готовить различные десерты и пироги.',
    price_now: "250 ₽/кг",
    price_old: "350 ₽/кг",
    img_src: "resource/malinka (2).png"
    }   
]

let catalogImages = catalog_butt.querySelectorAll('img.list');

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

