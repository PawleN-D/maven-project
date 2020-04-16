'use strict';

// Cart Hover Functionality

let cartDisplay = document.getElementById('cart');

cartDisplay.addEventListener('mouseover', (e) => {
    e.preventDefault();
    let cartHover = document.getElementById('cart-hover');
    if (cartHover.style.display === 'none') {
        cartHover.style.display = 'block';
    } else {
        cartHover.style.display = 'none';
    }
})

