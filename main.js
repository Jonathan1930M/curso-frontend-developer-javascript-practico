const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {
    const ismenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!ismenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const ismenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!ismenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}