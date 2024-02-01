// sticky navbar
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// owl carousel of landing page
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
});

//splide js slider for clubs
function updateHorizontalSplidePerPage() {
  var screenWidth = window.innerWidth;
  var perPage =
    screenWidth < 768 ? 1 : screenWidth < 992 ? 2 : screenWidth < 1200 ? 3 : 5;
  return perPage;
}

// Initialize horizontal slider
var horizontalSplide = new Splide(".horizontal-splide", {
  perPage: updateHorizontalSplidePerPage(),
  focus: 0,
  type: "loop",
  arrows: false,
  autoplay: true,
});

horizontalSplide.mount();


// Update the number of visible slides when the window resizes
window.addEventListener("resize", function () {
  horizontalSplide.options.perPage = updateHorizontalSplidePerPage();
  horizontalSplide.refresh();
});

// Initialize testimonial slider
var testimonialSplide = new Splide(".testimonial-splide", {
  type: "loop",
  arrows: false,
  pagination: false,
  autoplay: true,
  perPage: 3,
  perMove: 1,
  breakpoints: {
    576: {
      perPage: 1,
    },
  },
});

testimonialSplide.mount();

// counter
// Initialize counters when the respective section comes into view
function initCounters() {
  // Define the counters with their respective end values and durations
  animateCounter("studentsCounter", 500, 1000);
  animateCounter("teachersCounter", 45, 1000);
  animateCounter("clubsCounter", 10, 1000);
  animateCounter("yearsCounter", 20, 1000);
}

function animateCounter(target, end, duration) {
  let current = 0;
  let increment = end > 0 ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / end));
  let element = document.getElementById(target);
  let timer = setInterval(function () {
    current += increment;
    element.innerText = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Use Intersection Observer to check when the section is in view
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the section is in view, initialize counters
      initCounters();
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe the target section
const target = document.querySelector(".home-news-content");
observer.observe(target);

// lightbox imageGallery page
$(document).ready(function () {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
});
