'use strict';
// --------------------------------------Cart Functionality -----------------------------
let carts = document.querySelectorAll('#add-cart');

//Course Constructor Function
function course(name, tag, period, price, inCart) {
    this.name = name;
    this.tag = tag;
    this.period = period;
    this.price = price;
    this.inCart = inCart;
}

// Course Objects
let frontEnd = new course("Become a Front-End Developer","frontend-dev", "4 Week course - In classroom", 10000,  0);
let fullStack = new course("Become a Full Stack Developer","full-stack-dev", "12 week course - In classroom", 26000, 0);
let javaSpring = new course("Become a Java Spring Boot Developer","spring-boot-dev", "12 week course - In classroom ", 26000, 0);

// Array of Courses
let courses = [fullStack, frontEnd, javaSpring];


//Looping through the NodeList 
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', (e) => {
        e.preventDefault();
        cartNumbers(courses[i]);
        totalCost(courses[i]);
    })
}

//Basket Number Load
function onLoadCartNumbers(){
    let courseNumbers = sessionStorage.getItem('cartNumbers');

    if (courseNumbers) {
        document.querySelector('#cart sup').textContent = courseNumbers;
    }
}
//Count of courses selected
function cartNumbers(course) {
    let courseNumbers = sessionStorage.getItem('cartNumbers');
    courseNumbers = Number(courseNumbers);

    if(courseNumbers){
        sessionStorage.setItem('cartNumbers', courseNumbers + 1);
        document.querySelector('#cart sup').textContent = courseNumbers + 1;
    } else {
        sessionStorage.setItem('cartNumbers', 1);
        document.querySelector('#cart sup').textContent = 1;
    }

    setItems(course);

}

//Setting the the course to item
function setItems(course) {
    let cartItems = sessionStorage.getItem('coursesInCart');
    console.log(cartItems);
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
    sessionStorage.setItem('coursesInCart', JSON.stringify(cartItems));

}

//Calculating the total amount
function totalCost(course) {
    console.log('The product price is', course.price);
    let cartCost = sessionStorage.getItem('totalCost');
    console.log('My cart cost is', cartCost);
    // console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        sessionStorage.setItem('totalCost', cartCost + course.price);
    } else {
        sessionStorage.setItem('totalCost', course.price);
    }
}

//Display CART function
function displayCart() {
    let cartItems = sessionStorage.getItem('coursesInCart');
    cartItems = JSON.parse(cartItems);
    let courseContainer = document.querySelector('.cart-display');
    let cartCost = sessionStorage.getItem('totalCost');
    let vatCost = cartCost * 0.15;
    let finalCost = Number(cartCost) + Number(vatCost);
    // conditions checked
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
            <div class="col-lg-8"></div>
            <div class="col-lg-4">
                <div class="title mb-4">
                    <h6 class="f-bold">Cart Totals</h6>
                </div>
                    <div class="row d-flex align-items-center border-bottom w-100">
                        <div class="col py-2 px-4">
                            <p>Subtotal</p>
                        </div>
                        <div class="col">
                            <p class="blue-link">R${cartCost},00</p>  
                        </div>
                    </div>
                    <div class="row d-flex align-items-center border-bottom w-100">
                        <div class="col py-2 px-4">
                            <p>VAT(15%)</p>
                        </div>
                        <div class="col">
                            <p class="blue-link">R${vatCost},00</p>  
                        </div>
                    </div>
                    <div class="row d-flex align-items-center border-bottom w-100">
                        <div class="col py-2 px-4">
                            <p>Total</p>
                        </div>
                        <div class="col">
                            <p class="blue-link">R${finalCost},00</p>  
                        </div>
                    </div>
            </div>

                
        </div>
            `;
        
    }
}

//Sidebar Hover Display
function displayCartHover() {
    let cartItems = sessionStorage.getItem('coursesInCart');
    cartItems = JSON.parse(cartItems);
    let courseContainer = document.querySelector('.cart-items');
    // let cartCost = sessionStorage.getItem('totalCost');
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

