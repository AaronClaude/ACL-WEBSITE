// JavaScript for initializing the carousel
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('product-carousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Set the interval between slide transitions (in milliseconds)
        wrap: true // Enable wrapping of slides (i.e., go from last to first slide and vice versa)
    });
});
