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


// function displayCart() {
//     let cartItems = localStorage.getItem('coursesInCart');
//     cartItems = JSON.parse(cartItems);
//     let courseContainer = document.querySelector('.cart-items');
//     // let cartCost = localStorage.getItem('totalCost');
//     if (cartItems && courseContainer) {
//         courseContainer.innerHTML = '';
//         Object.values(cartItems).map(course => {
//             courseContainer.innerHTML += `
//             <div class="row">
//             <div class="col-2 align-items-center pt-5">
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//             <div class="col-4 mb-4 pt-3">
//                 <div class="course-thumb">
//                     <img class="img-responsive" src="./images/${course.name}.png">
//                 </div>
//             </div>
//             <div class="col-6 p-2 align-items-center">
//                 <div class="text-wrap pt-5">
//                     <p style="font-size: 13px;">${course.name}<br/>
//                         ${course.period}</p>
//                 </div>
//             </div>
//         </div>   

//             `;

//         });
    
        
//     }
// }
