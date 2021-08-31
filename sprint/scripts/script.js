const body = document.querySelector('body');
const card = document.querySelectorAll('.card-icon');
card.forEach(item => {
    item.style.backgroundImage = `url(${item.dataset.bg})`
})

const wrapperBtn = document.querySelector('.wrapper-burger-btn');
const mobileNav = document.querySelector('.section-mobile-nav');
wrapperBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
    body.classList.toggle('hidden');
    itemMobileNav.forEach(item => item.classList.remove('active'))
})


let itemMobileNav = document.querySelectorAll('.item-mobile-nav');
itemMobileNav.forEach(menu => {
    if (menu.hasAttribute('data-submenu')) {
        menu.addEventListener('click', () => {
            itemMobileNav.forEach(elem => elem.classList.remove('active'))
            menu.classList.add('active')
        })
    }
})
