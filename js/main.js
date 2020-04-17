'use strict';
// ----------------------------- Navbar Basket Functionality -----------------------------


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


let courses = [fullStack, frontEnd, javaSpring];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', ($event) => {
        $event.preventDefault();
        cartNumbers(courses[i]);
        totalCost(courses[i]);
    })
}

function onLoadCartNumbers(){
    let courseNumbers = localStorage.getItem('cartNumbers');

    if (courseNumbers) {
        document.querySelector('#cart sup').textContent = courseNumbers;
    }
}

function cartNumbers(course) {
    let courseNumbers = localStorage.getItem('cartNumbers');
    courseNumbers = Number(courseNumbers);

    if(courseNumbers){
        localStorage.setItem('cartNumbers', courseNumbers + 1);
        document.querySelector('#cart sup').textContent = courseNumbers + 1;
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
    let cartCost = localStorage.getItem('totalCost');
    if (cartItems && courseContainer) {
        courseContainer.innerHTML = '';
        Object.values(cartItems).map(course => {
            courseContainer.innerHTML += `
                <div class="row d-flex align-items-center border-bottom w-100">
                    <div class="col-sm-4 text-left d-flex">
                        <div class="row">
                            <div class="col-1 align-items-center pt-5">
                                <div class="pt-3 pb-0">
                                    <ion-icon name="close-circle-outline"></ion-icon>
                                </div>
                            </div>
                            <div class="col-4 mb-4 pt-3">
                                <div class="course-thumb">
                                    <img class="img-responsive" src="./images/${course.tag}.png">
                                </div>
                            </div>
                            <div class="col-7 p-4 align-items-center">
                                <div class="text-wrap pt-5">
                                    <p style="font-size: 13px;">${course.name}<br/>
                                        ${course.period}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 text-left blue-link">
                        R${course.price},00 Excl VAT
                    </div>
                    <div class="col-sm-2 text-left">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                        <span>${course.inCart}</span>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                    <div class="col-sm-3 text-left">
                        R${course.inCart * course.price}, 00
                    </div>
                </div>
            `;

        });
    
        courseContainer.innerHTML += `
        <div class="row w-100 p-3">
            <div class="col-lg-10"></div>
            <div class="col-lg-2">
                <div class="title mb-4">
                    <h6 class="f-bold">Cart Totals</h6>
                </div>
                    <div class="row d-flex align-items-center border-bottom w-100">
                        <div class="col py-2 px-4">
                            <p>Subtotal</p>
                        </div>
                        <div class="col">
                            <p class="blue-link">R${cartCost}</p>  
                        </div>
                    </div>
                    <div class="row d-flex align-items-center border-bottom w-100">
                        <div class="col py-2 px-4">
                            <p>VAT(15%</p>
                        </div>
                        <div class="col">
                            <p class="blue-link">R${cartCost * 0.15}, 00</p>  
                        </div>
                    </div>
                    <div class="row d-flex align-items-center border-bottom w-100">
                        <div class="col py-2 px-4">
                            <p>Total</p>
                        </div>
                        <div class="col">
                            <p class="blue-link">R${(cartCost + (cartCost * 0.15))}, 00</p>  
                        </div>
                    </div>
            </div>

                
        </div>
            `;
        
    }
}

function displayCartHover() {
    let cartItems = localStorage.getItem('coursesInCart');
    cartItems = JSON.parse(cartItems);
    let courseContainer = document.querySelector('.cart-items');
    // let cartCost = localStorage.getItem('totalCost');
    if (cartItems && courseContainer) {
        courseContainer.innerHTML = '';
        Object.values(cartItems).map(course => {
            courseContainer.innerHTML += `
            <div class="row">
            <div class="col-2 align-items-center pt-5">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="col-4 mb-4 pt-3">
                <div class="course-thumb">
                    <img class="img-responsive" src="./images/${course.tag}.png">
                </div>
            </div>
            <div class="col-6 p-2 align-items-center">
                <div class="text-wrap pt-5">
                    <p style="font-size: 13px;">${course.name}<br/>
                    ${course.period}<br/>
                    R${course.price},00</p>
                </div>
            </div>
        </div>   

            `;

        });
    
        
    }
};

displayCartHover();



displayCart();
onLoadCartNumbers();

