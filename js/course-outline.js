'use strict';

let viewCourse = document.querySelectorAll("#view-course");

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

let frontEnd1 = new course("Become a Front-End Developer","frontend-dev", "4 Week course - In classroom", 10000, "All you need to have done beforehand, is create a few accounts with websites like Github, Gmail, CodePen and LinkedIn so that you can hit the ground running on Day 1.", "Welcome to The Maven Academy. This is the beginning of your journey to becoming a world-class developer. This course will take you through the information as though you're starting a new job as a frontend web developer. Learn 'on the job' and up-skill in both the core aspects of HTML, CSS & Javascript, as well as being a useful team member at your first job.", "We need intro In this module, you'll learn about the fundamentals of every web page: HTML & CSS. Using these 2 technologies, you'll see how to create beautiful components and layouts to create your very own site. You'll also learn how to keep a log of every change to your files, through Git, and how to safely store your code on Github. here…", "In this module, you'll discover the power of your first programming language — Javascript. You'll learn core concepts and techniques to make your website more dynamic and interactive.", "By phase 3, you will be familiar with Javascript in the front-end. So now it's time to see how Javascript can also be a powerful back-end. Using Node.js, we'll explore how Javascript can power a server, and how you can easily add functionality to your system with the Node Package Manager.", "We take you the extra mile in our standard curriculum, but for those that want to go even further beyond that—check out our Master Class Electives.");
let fullStack1 = new course("Become a Full Stack Developer","full-stack-dev", "12 week course - In classroom", 26000, "You don’t have to understand everything about the MEAN stack to dive in to the introductory tutorial. Your initial challenge will be to build Google’s official “Tour of Heroes” app. Don’t worry! We’re going to explain the hard parts in great detail during your course.", "You’ve completed the Tour of Heroes tutorial as your pre-work; now we’ll build upon that together as a class with a “Tour of Students” app. We’ll review some core concepts in HTML, JS, and CSS to make sure they’re fresh, then jump into HTML5 advanced features, TypeScript, and SCSS to give your code superpowers.", "Get ready to jump into the deep end! Our detailed study of Angular will simulate a real-world onboarding experience, just as you may expect to experience when you’re hired and beginning your first job with Angular. You’ll look over an Angular app running in production, and dissect it piece by piece as you build it back up from the ground up as a class. You’ll make the leap from your Tour of Students app to the production-grade final solution where you’ll add yourself to the database as a Maven Academy Alumni for all the world to see!","Node.js is a powerful back end environment, and you’ll learn everything you need to support your Angular app with a back end server running the Express framework, MongoDB with the Mongoose ORM, and a REST API you can be proud of.", "Cutting your teeth in new territory, you’ll be asked to change how certain parts of the app behave, as well as adding new features on your own. This is when the going gets tough, but don’t worry! Your instructors will guide you through everything you need to prepare for a self-sufficient mindset as you prepare to graduate and enter the workforce.", "Cutting your teeth in new territory, you’ll be asked to change how certain parts of the app behave, as well as adding new features on your own. This is when the going gets tough, but don’t worry! Your instructors will guide you through everything you need to prepare for a self-sufficient mindset as you prepare to graduate and enter the workforce.", "We take you the extra mile in our standard curriculum, but for those that want to go even further beyond that—check out our Master Class Electives.");
let javaSpring1 = new course("Become a Java Spring Boot Developer","spring-boot-dev", "12 week course - In classroom ", 26000, "You don’t have to understand everything about the MEAN stack to dive in to the introductory tutorial. Your initial challenge will be to build Google’s official “Tour of Heroes” app. Don’t worry! We’re going to explain the hard parts in great detail during your course.", "You’ve completed the Tour of Heroes tutorial as your pre-work; now we’ll build upon that together as a class with a “Tour of Students” app. We’ll review some core concepts in HTML, JS, and CSS to make sure they’re fresh, then jump into HTML5 advanced features, TypeScript, and SCSS to give your code superpowers.", "Get ready to jump into the deep end! Our detailed study of Angular will simulate a real-world onboarding experience, just as you may expect to experience when you’re hired and beginning your first job with Angular. You’ll look over an Angular app running in production, and dissect it piece by piece as you build it back up from the ground up as a class. You’ll make the leap from your Tour of Students app to the production-grade final solution where you’ll add yourself to the database as a Maven Academy Alumni for all the world to see!","Node.js is a powerful back end environment, and you’ll learn everything you need to support your Angular app with a back end server running the Express framework, MongoDB with the Mongoose ORM, and a REST API you can be proud of.", "Cutting your teeth in new territory, you’ll be asked to change how certain parts of the app behave, as well as adding new features on your own. This is when the going gets tough, but don’t worry! Your instructors will guide you through everything you need to prepare for a self-sufficient mindset as you prepare to graduate and enter the workforce.", "Cutting your teeth in new territory, you’ll be asked to change how certain parts of the app behave, as well as adding new features on your own. This is when the going gets tough, but don’t worry! Your instructors will guide you through everything you need to prepare for a self-sufficient mindset as you prepare to graduate and enter the workforce.", "We take you the extra mile in our standard curriculum, but for those that want to go even further beyond that—check out our Master Class Electives." );


let courses1 = [fullStack1,frontEnd1, javaSpring1];

for (let i = 0; i < viewCourse.length; i++){
    viewCourse[i].addEventListener('click', ($event) => {
        $event.preventDefault();
        setCourse(courses1);
    })
}

function setCourse(course) {
    for (let i = 0; i < viewCourse.length; i++) {
      let course1 = viewCourse[i];   
    }
    course = course1;
}


function displayCourse() {
    let outlineContainer =  document.querySelector('.outline-display');
    for (let i = 0; i < courses1.length; i++) {
        let course = courses1[i]; 
        if (outlineContainer) {
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
            
        } 
    }

}

displayCourse();





































