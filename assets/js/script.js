const menuLink = document.querySelector('.menu-link')
const hamburger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu__list')
const hamburgerClose = document.querySelector('.hamburgerClose')
const cart = document.querySelector('.cart')
const giohang = document.querySelector('.giohang')
const hamburgerCloseCart = document.querySelector('.giohang .hamburgerClose')

// bật menu khi reponsive
hamburger.addEventListener('click', function() {
    menuList.classList.add('is-active')
    hamburgerClose.classList.add('is-active')
})

// tắt menu khi reponsive
hamburgerClose.addEventListener('click', function() {
    menuList.classList.remove('is-active')
    hamburgerClose.classList.remove('is-active')
})

// khi bấm vào giỏ hàng
cart.addEventListener('click', function() {
    giohang.classList.add('is-active')
})

// đóng giỏ hàng 
hamburgerCloseCart.addEventListener('click', function() {
    giohang.classList.remove('is-active')
})

// xử lí sự kiện khi reponsive menu
const menuLinkAllTagA = document.querySelectorAll('.menu-link > a')
const menuLinkAll = document.querySelectorAll('.menu-link')

for (let i = 0; i < menuLinkAll.length; i++) {
    let con = menuLinkAll[i].querySelector('.dropdown')
    if (con !== null) {
        menuLinkAllTagA[i].addEventListener('click', function() {
            if (con.classList.contains('in')) {
                con.classList.remove('in')
            } else {
                con.classList.add('in')
            }
        })

        let dropdownLink_1 = menuLinkAll[i].querySelectorAll('.menu-link > .dropdown > ul > .dropdown-link > a')
        let dropLink = menuLinkAll[i].querySelectorAll('.menu-link > .dropdown > ul > .dropdown-link')

        for (let i = 0; i < dropdownLink_1.length; i++) {
            dropdownLink_1[i].addEventListener('click', function() {
                let con1 = dropLink[i].querySelector('.dropdown.second')
                con1.classList.toggle('in')
            })
            
        }
    }
}


