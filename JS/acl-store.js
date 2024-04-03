document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.querySelector('.cart-list');
    const cartTotal = document.getElementById('cart-total');
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const clearCartBtn = document.querySelector('.clear-cart');
    const checkoutBtn = document.querySelector('.checkout');
    const cartSidebar = document.getElementById('cartSidebar');

    let cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const price = parseFloat(button.getAttribute('data-price'));
            const name = button.parentElement.querySelector('.card-title').textContent;
            const item = {
                name: name,
                price: price
            };

            cartItems.push(item);
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(listItem);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    openCartBtn.addEventListener('click', function () {
        cartSidebar.classList.add('show');
    });

    closeCartBtn.addEventListener('click', function () {
        cartSidebar.classList.remove('show');
    });

    clearCartBtn.addEventListener('click', function () {
        cartItems = [];
        updateCart();
    });

    checkoutBtn.addEventListener('click', function () {
        const totalPrice = parseFloat(cartTotal.textContent);
        if (totalPrice === 0) {
            alert('Your cart is empty. Please add some items before checkout.');
        } else {
            alert(`Thank you for your purchase! Total price: $${totalPrice.toFixed(2)}`);
            cartItems = [];
            updateCart();   
            cartSidebar.classList.remove('show');
        }
    });
});

// Function to show only products with the selected category
function filterProducts(category) {
    const productCards = document.querySelectorAll('#myProducts');
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener for category links
const categoryLinks = document.querySelectorAll('.category-link');
categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = link.getAttribute('data-category');
        filterProducts(category);
    });
});

// JavaScript function to hide/show the navbar on scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-90px"; // Adjust the height of the navbar as needed
    }
    prevScrollpos = currentScrollPos;
}


const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});