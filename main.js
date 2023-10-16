const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
/* const mainContainer = document.querySelector('.main-container'); */

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoMenu);
productDetailCloseIcon.addEventListener('click', closedProductDetailAside);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closedProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    /* const isDesktopMenu = desktopMenu.classList.contains('inactive'); */

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    /* }  else if(!isDesktopMenu) {
        desktopMenu.classList.add('inactive');*/
    } 
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
   
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closedProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 250,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pantalla',
    price: 300,
    img: 'https://images.pexels.com/photos/7546602/pexels-photo-7546602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: 630,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function addProduct(arr) {
    for (product of arr) {

        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        const figure = document.createElement('figure');
        figure.append(figureImg);

        const parrafoName = document.createElement('p');
        parrafoName.innerText = product.name;

        const parrafoPrice = document.createElement('p');
        parrafoPrice.innerText = '$' + product.price;

        const divInfo = document.createElement('div');
        divInfo.append(parrafoPrice, parrafoName);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productInfo.append(divInfo, figure);

        const Productimg = document.createElement('img');
        Productimg.setAttribute('src', product.img);
        Productimg.addEventListener('click', openProductDetailAside);

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.append(Productimg, productInfo);

       /*  const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('.cards-container'); */
        cardsContainer.append(productCard);

    }
}

addProduct(productList);