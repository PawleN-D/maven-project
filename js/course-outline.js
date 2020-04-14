// function getCssClasses(obj) {
// 	return obj.className.split(" ");
// }

// function arrayContains(arr, elem) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] == elem) { 
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function show(evt) {
// 	document.getElementById("hidden").style.display = "block";
// }

// function hide(evt) {
// 	document.getElementById("hidden").style.display = "none";
// }

// var allAnchors = document.getElementsByTagName("A");
// for (var i = 0; i < allAnchors.length; i++) {
//   var a = allAnchors[i]; 
//   if (arrayContains(getCssClasses(a), "show")) {
//   	a.onmouseover = show;
//   	a.onmouseout = hide
//   }
// }

let viewCourse = document.querySelectorAll("#view-course");

for (let i = 0; i < viewCourse.length; i++){
    viewCourse[i].addEventListener('click', ($event) => {
        $event.preventDefault();
        // cartNumbers(courses[i]);
        // totalCost(courses[i]);
    })
}

function course(name, tag, period, price, prework, mod1, mod2, mod3, mod4, mce) {
    this.name = name;
    this.tag = tag;
    this.period = period;
    this.price = price;
    this.prework = prework;
    this.mod1 = mod1;
    this.mod2 = mod2;
    this.mod3 = mod3;
    this.mod4 = mod4;
    this.mce = mce;
}

let frontEnd = new course("Become a Front-End Developer","frontend-dev", "4 Week course - In classroom", 10000, "All you need to have done beforehand, is create a few accounts with websites like Github, Gmail, CodePen and LinkedIn so that you can hit the ground running on Day 1.", "Welcome to The Maven Academy. This is the beginning of your journey to becoming a world-class developer. This course will take you through the information as though you're starting a new job as a frontend web developer. Learn 'on the job' and up-skill in both the core aspects of HTML, CSS & Javascript, as well as being a useful team member at your first job.", "We need intro In this module, you'll learn about the fundamentals of every web page: HTML & CSS. Using these 2 technologies, you'll see how to create beautiful components and layouts to create your very own site. You'll also learn how to keep a log of every change to your files, through Git, and how to safely store your code on Github. here…", "In this module, you'll discover the power of your first programming language — Javascript. You'll learn core concepts and techniques to make your website more dynamic and interactive.", "By phase 3, you will be familiar with Javascript in the front-end. So now it's time to see how Javascript can also be a powerful back-end. Using Node.js, we'll explore how Javascript can power a server, and how you can easily add functionality to your system with the Node Package Manager.", "We take you the extra mile in our standard curriculum, but for those that want to go even further beyond that—check out our Master Class Electives.");
let fullStack = new course("Become a Full Stack Developer","full-stack-dev", "12 week course - In classroom", 26000, 0);
let javaSpring = new course("Become a Java Spring Boot Developer","spring-boot-dev", "12 week course - In classroom ", 26000, 0);


let courses = [fullStack, frontEnd, javaSpring];


function displayCart() {
    // let cartItems = localStorage.getItem('coursesInCart');
    // cartItems = JSON.parse(cartItems);
    let outlineContainer = document.querySelector('.outline-display');
    // let cartCost = localStorage.getItem('totalCost');
    if (outlineContainer) {
        outlineContainer.innerHTML = '';
        Object.values(courses).map(course => {
            outlineContainer.innerHTML += `
            <div class="row px-5">
                <div class="col-lg-4 d-none d-lg-block px-2">
                    <div class="course-box d-flex flex-column text-center">
                        <div class="course-title text-center">
                            <a href="#" class="blue-link f-15 f-bold text-decoration-none">${course.name}</a>
                        </div>
                        <div class="course-duration text-center">
                            <p>${course.period}</p>
                        </div>
                        <div class="course-img text-center">
                            <img src="./images/${course.tag}.png" alt="${course.tag}-banner">
                        </div>
                        <div class="course-price text-center mb-0">
                            <p class="text-md-center course-title">R${course.price} Excl Vat</p>
                        </div>
                        <div class="course-add text-center mb-4">
                            <a href="#" class="btn btn-outline-primary btn-blue-outline btn-md small text-capitalize" id="add-cart">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col lg-8 px-2">
                    <div class="main-title mb-5">
                        <h2>Course Outline</h2>
                    </div>
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs modules-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#pre-work" role="tab" aria-controls="home" aria-selected="true">Pre-work</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#module1" role="tab" aria-controls="profile" aria-selected="false">Module 1</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#module2" role="tab" aria-controls="messages" aria-selected="false">Module 2</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="settings-tab" data-toggle="tab" href="#module3" role="tab" aria-controls="settings" aria-selected="false">Module 3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="settings-tab" data-toggle="tab" href="#module4" role="tab" aria-controls="settings" aria-selected="false">Module 4</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="settings-tab" data-toggle="tab" href="#master" role="tab" aria-controls="settings" aria-selected="false">Master Class Electives</a>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content module-tab-cont">
                        <div class="tab-pane active fade show sub-tab-body" id="pre-work" role="tabpanel" aria-labelledby="home-tab">
                            <div class="block-text bg-light-blue p-5 mb-5">
                                <div class="title mb-4">
                                    <h4 class="f-bold">Pre-Work</h4>
                                </div>
                                <p class="mb-0">
                                    ${course.prework}
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane" id="module1" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="block-text bg-light-blue p-5 mb-5">
                                <div class="title mb-4">
                                    <h4 class="f-bold">Module 1</h4>
                                </div>
                                <p class="mb-0">
                                    ${course.mod1}
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane" id="module2" role="tabpanel" aria-labelledby="messages-tab">
                            <div class="block-text bg-light-blue p-5 mb-5">
                                <div class="title mb-4">
                                    <h4 class="f-bold">Module 2</h4>
                                </div>
                                <p class="mb-0">
                                    ${course.mod2}
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane" id="module3" role="tabpanel" aria-labelledby="settings-tab">
                            <div class="block-text bg-light-blue p-5 mb-5">
                                <div class="title mb-4">
                                    <h4 class="f-bold">Module 3</h4>
                                </div>
                                <p class="mb-0">
                                    ${course.mod3}
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane" id="module4" role="tabpanel" aria-labelledby="settings-tab">
                            <div class="block-text bg-light-blue p-5 mb-5">
                                <div class="title mb-4">
                                    <h4 class="f-bold">Module 4</h4>
                                </div>
                                <p class="mb-0">
                                    ${course.mod4}
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane" id="master" role="tabpanel" aria-labelledby="settings-tab">
                            <div class="block-text bg-light-blue p-5 mb-5">
                                <div class="title mb-4">
                                    <h4 class="f-bold">Master Class Electives</h4>
                                </div>
                                <p class="mb-0">
                                    ${course.mce}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
    

        
    }
}

displayCart();



































