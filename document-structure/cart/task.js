// про видимость корзины

let isThereSomthingInCart = function() {
    if (localStorage['cart']){
        document.querySelector(`.cart`).innerHTML = localStorage['cart'];
    }
    let cart = document.querySelector(`.cart`);
    if (cart.querySelector(`.cart__product`)){
        cart.hidden = false;
    } else {
        cart.hidden = true;
    }
}

isThereSomthingInCart();

//  про добавление в корзину

const addButtons = document.querySelectorAll(`.product__add`);
let addButtonsArray = Array.from(addButtons);

let addToCart = function() {
    let cart = document.querySelector(`.cart`);
    cart.hidden = false;
    let cartProducts = cart.querySelectorAll(`.cart__product`);
    let cartProductsArray = Array.from(cartProducts);
    let product = this.closest(`div.product`);
    let productImage = product.querySelector(`.product__image`).getAttribute(`src`);
    let productQuantity = product.querySelector(`div.product__quantity-value`);
    let productId = product.getAttribute(`data-id`);
    let cartProductId = cartProductsArray.findIndex((index) => index.getAttribute(`data-id`) == productId)
    if (cartProductId == -1) {
        let cartChanges = `<div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${productQuantity.innerText}</div>
            <div>
            <a href="#" class="product__remove">&times;</a>
          </div>
        </div>`
        cart.querySelector(`.cart__products`).insertAdjacentHTML(`beforeEnd`, cartChanges);
        localStorage.setItem(`cart`, cart.innerHTML);
    } else {
        let productY = product.querySelector(`img`).getBoundingClientRect().top;
        let productX = product.querySelector(`img`).getBoundingClientRect().left;
        let cartProductY = cartProducts[cartProductId].querySelector(`img`).getBoundingClientRect().top;
        let cartProductX = cartProducts[cartProductId].querySelector(`img`).getBoundingClientRect().left;
        let diffY = productY - cartProductY;
        let diffX = cartProductX - productX;
        let stepY = diffY/20;
        let stepX = diffX/20;
        let cloneImage = `<img src="${productImage}" alt="" style="top:${productY - stepY}px; left:${productX + stepX}px" class="product__image clone">`;
        product.querySelector(`img`).insertAdjacentHTML(`afterEnd`, cloneImage);
        cloneImage = product.querySelector(`.clone`);
        let cartProductQuantity = cartProducts[cartProductId].querySelector(`.cart__product-count`);
        let cartChanges = `<div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${+productQuantity.innerText + +cartProductQuantity.innerText}</div>
            <div>
            <a href="#" class="product__remove">&times;</a>
          </div>
        </div>`
        let intervalId = setInterval(()=> {
            let cloneImageY = cloneImage.getBoundingClientRect().top;
            let cloneImageX = cloneImage.getBoundingClientRect().left;
            if (cloneImageY > cartProductY) {
                cloneImage.style.top = `${cloneImageY - stepY}px`;
                cloneImage.style.left = `${cloneImageX + stepX}px`;
            } else {
                cloneImage.remove();
                cartProducts[cartProductId].remove();
                cart.querySelector(`.cart__products`).insertAdjacentHTML(`beforeEnd`, cartChanges);
                localStorage.setItem(`cart`, cart.innerHTML);
                clearInterval(intervalId);
            }
        }, 25);
        
    }
}




for (let i = 0; i < addButtonsArray.length; i++) {
    addButtons[i].addEventListener(`click`, addToCart);
}

// про изменение количества 

const increaseButtons = document.querySelectorAll(`.product__quantity-control_inc`);
let increaseButtonsArray = Array.from(increaseButtons);

let increaseQuantity = function() {
    let product = this.closest(`div.product`);
    let productQuantity = product.querySelector(`div.product__quantity-value`);
    productQuantity.innerText = `${+productQuantity.innerText + 1}`;
}

for (let k = 0; k < increaseButtonsArray.length; k++) {
    increaseButtons[k].addEventListener(`click`, increaseQuantity);
}



const decreaseButtons = document.querySelectorAll(`.product__quantity-control_dec`);
let decreaseButtonsArray = Array.from(decreaseButtons);

let decreaseQuantity = function() {
    let product = this.closest(`div.product`);
    let productQuantity = product.querySelector(`div.product__quantity-value`);
    if (productQuantity.innerText > 1) {
    productQuantity.innerText = `${+productQuantity.innerText - 1}`;
    }
}

for (let j = 0; j < decreaseButtonsArray.length; j++) {
    decreaseButtons[j].addEventListener(`click`, decreaseQuantity);
}

// про удаление из корзины 

const cart = document.querySelector(`.cart`);

let removeProductFromCart = function(evt) {
    if (evt.target.classList.contains(`product__remove`)) {
        let toRemove = evt.target.closest(`.cart__product`);
        toRemove.remove();
        localStorage.setItem(`cart`, cart.innerHTML);
        isThereSomthingInCart();
    }
}

cart.addEventListener(`click`, removeProductFromCart);
document.addEventListener(`DOMContentLoaded`, function()  {
    if (localStorage['cart']){
        document.querySelector(`.cart`).innerHTML = localStorage['cart'];
    }
});

 
    
    

