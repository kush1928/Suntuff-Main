// Initialize Locomotive Scroll only if it hasn't been initialized yet
if (!window.locomotiveScrollInitialized) {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    window.locomotiveScrollInitialized = true;
}

// Page 4 animation - only run on index page
function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    if (!elemC) return; // Exit if not on index page
    
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}

// Swiper animation - only run if swiper exists
function swiperAnimation() {
    var swiperElement = document.querySelector(".mySwiper");
    if (!swiperElement) return; // Exit if no swiper on page
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

// Menu animation - run on all pages
function menuAnimation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.menu-close');

    if (menuToggle && mobileMenu && menuClose) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
}

// Loader animation - run on all pages
function loaderAnimation() {
    var loader = document.querySelector("#loader");
    if (!loader) return; // Exit if no loader on page
    
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
}

// Initialize animations based on page content
document.addEventListener('DOMContentLoaded', function() {
    // Only run page4Animation on index page
    if (document.querySelector("#elem-container")) {
        page4Animation();
    }
    
    // Run swiper animation if swiper exists
    if (document.querySelector(".mySwiper")) {
        swiperAnimation();
    }
    
    // Always run these animations
    menuAnimation();
    loaderAnimation();

    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    // Add active class on hover for interactive elements
    document.querySelectorAll('a, button, .product-card, .team-card, .value-card, .stat-card, .cta-button, .menu-toggle, .menu-close').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,  // Number of slides visible at once
    spaceBetween: 30,  // Space between slides
    loop: true,       // Infinite loop
    autoplay: {
        delay: 1000,  // Delay between transitions (in ms)
        disableOnInteraction: false, // Continue autoplay after user interaction
        reverseDirection: true, // Scroll to the right instead of left
    },
    speed: 2000,     // Transition speed (in ms)
});

