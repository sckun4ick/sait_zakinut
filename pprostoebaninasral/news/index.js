let catalog = document.getElementById('katalogoff');
let catalog_butt = document.getElementById('catalog');
let catalog_stat = false;

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

const articles_suda = document.getElementById('artby')

articles_suda.innerHTML = arti_napol.map(
    item => `<article>
                    <img src="resource/Новая папка/news_posts (${item.img}).png" alt="">
                    <div class="chimin">
                        <div class="center_2">
                            <p>${item.date}</p>
                            <h2>${item.title}</h2>
                        </div>
                    </div>
                </article>`,
).join('');