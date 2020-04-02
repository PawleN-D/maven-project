'use strict';
// -----------------------------Typewriter Heading Functionality -----------------------------


// --------------------------------------Cart Functionality -----------------------------
let carts = document.querySelectorAll('#add-cart');

function course(name, tag, period, price, inCart) {
    this.name = name;
    this.tag = tag;
    this.period = period;
    this.price = price;
    this.inCart = inCart;
}

let frontEnd = new course("Become a Front-End Developer","frontend-dev", "4 Week course - In classroom", 10000,  0);
let fullStack = new course("Become a Full Stack Developer","full-stack-dev", "12 week course - In classroom", 26000, 0);
let javaSpring = new course("Become a Java Spring Boot Developer","spring-boot-dev", "12 week course - In classroom ", 26000, 0);


let courses = [frontEnd, fullStack, javaSpring];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', ($event) => {
        $event.preventDefault();
        cartNumbers(courses[i]);
        totalCost(courses[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('#cart sup').textContent = productNumbers;
    }
}

function cartNumbers(course) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = Number(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cart sup').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cart sup').textContent = 1;
    }

    setItems(course);

}

function setItems(course) {
    let cartItems = localStorage.getItem('coursesInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[course.name] == undefined) {
            cartItems = {
                ...cartItems,
                [course.name]: course
            };
        }
        cartItems[course.name].inCart += 1;
    } else {
        course.inCart = 1;
        cartItems = {
            [course.name]: course
        };
    }
    localStorage.setItem('coursesInCart', JSON.stringify(cartItems));

}

function totalCost(course) {
    console.log('The product price is', course.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log('My cart cost is', cartCost);
    // console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + course.price);
    } else {
        localStorage.setItem('totalCost', course.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('coursesInCart');
    cartItems = JSON.parse(cartItems);
    let courseContainer = document.querySelector('.cart-display');
    if (cartItems && courseContainer) {
        courseContainer.innerHTML = '';
        Object.values(cartItems).map(course => {
            courseContainer.innerHTML += `
        <div class="row d-flex align-items-center border-bottom w-100">
            <div class="col-sm-4 text-left d-flex">
                <div class="course-thumb">
                    <ion-icon name="close-circle"></ion-icon>
                    <img class="img-responsive" src="./images/${course.tag}.png" class="img-thumbnail" width=70 height=100>
                </div>
                <div class="course-desc">
                    <p>${course.name}<br/>
                    ${course.period}</p>
                </div>
            </div>
            <div class="col-sm-3 text-left blue-link">
                R${course.price},00 Excl VAT
            </div>
            <div class="col-sm-2 text-left">
                <ion-icon name="caret-back-circle"></ion-icon>
                <span>${course.inCart}</span>
                <ion-icon name="caret-forward-circle"></ion-icon>
            </div>
            <div class="col-sm-3 text-left">
                R${course.inCart * course.price}, 00
            </div>
        </div>
    
            `;
        });

        
    }
}

displayCart();
onLoadCartNumbers();

