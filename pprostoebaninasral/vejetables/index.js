
let catalog = document.getElementById('katalogoff');
let catalog_butt = document.getElementById('catalog');
let catalog_stat = false;


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

const novinkiTrack = document.getElementById('carousel_track')

novinkiTrack.innerHTML = aricle_firstSlider.map(
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
