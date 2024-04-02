// JavaScript for initializing the carousel
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('product-carousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2500, // Set the interval between slide transitions (in milliseconds)
        wrap: true // Enable wrapping of slides (i.e., go from last to first slide and vice versa)
    });
});

// JavaScript function to start the counter animation when the element comes into view
function startCounters() {
    const counters = document.querySelectorAll('.count');

    const options = {
        threshold: 0.6 // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetCount = parseInt(target.getAttribute('data-target'));
                const updateCount = () => {
                    const count = parseInt(target.innerText);
                    const increment = targetCount / 100; // Increase the number of increments for a smoother animation
                    if (count < targetCount) {
                        target.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 10); // Adjust the duration of each increment (milliseconds)
                    } else {
                        target.innerText = targetCount;
                    }
                };
                updateCount();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Call the function when the page is fully loaded
window.addEventListener('load', startCounters);



// JavaScript function to hide/show the navbar on scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-75px"; // Adjust the height of the navbar as needed
    }
    prevScrollpos = currentScrollPos;
}


const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});
