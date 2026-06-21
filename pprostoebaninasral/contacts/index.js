let catalog = document.getElementById('katalogoff');
let catalog_butt = document.getElementById('catalog');
let catalog_stat = false;

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

let cartochki = [
    {
        title: 'Адрес:',
        text: '390039, г. Владивосток, ул. Бирюзова, д.3'
    },

    {
        title: 'Телефон:',
        text: '+7 (123) 456-78-90'
    },

    {
        title: 'E-mail:',
        text: 'info@mail.ru'
    },

    {
        title: 'Время работы:',
        text: 'Пн-Вс: 9:00 - 20:00'
    },
]

let requist = [
    {
        title: 'ОГРН:',
        text: '320508100021972'
    },

    {
        title: 'ИНН:',
        text: '682902209604'
    },

    {
        title: 'Р/СЧ. №:',
        text: '4080 2810 9028 1000 3122'
    },

    {
        title: 'Корр. Счёт:',
        text: '3010 1810 2000 0000 0593'
    },

    {
        title: 'БИК:',
        text: '044525593'
    },

    {
        title: 'Банк:',
        text: 'АО «АЛЬФА-Банк»'
    },
]

const carts = document.getElementById('cartochki')
let req = document.getElementById('req')

carts.innerHTML = cartochki.map(
    item => `<article>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </article>`,
).join('');

req.innerHTML = requist.map(
    item => `<article>
                    <p>${item.title}</p>
                    <p>${item.text}</p>
                </article>`,
).join('');

const newElement = document.createElement('h2');
newElement.textContent = 'Реквизиты';

document.getElementById('req').prepend(newElement);