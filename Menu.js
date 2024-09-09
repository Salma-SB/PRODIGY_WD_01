// Select all elements with the class 'menu-item'
const menuItems = document.querySelectorAll('.menu-item');

// Function to change the color on hover
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Change background color and add padding and border radius on hover
        item.style.backgroundColor = '#f0f0f0';
        item.style.cursor='pointer';
        item.style.color='#f76b8a';
        item.style.padding = '8px 8px'; // Increase padding on hover to expand the background
        item.style.borderRadius = '30px'; // Apply a border-radius of 30px for rounded corners
    });

    item.addEventListener('mouseout', () => {
        // Reset background color and padding when not hovering
        item.style.color='';
        item.style.backgroundColor = ''; // Reset background color
        item.style.padding = ''; // Reset padding to default
    });
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navi');
    const section2 = document.getElementById('section2');
    const menuList = document.querySelector('nav ul'); // Selector for the `<ul>` in the nav

    window.addEventListener('scroll', () => {
        const section2Top = section2.offsetTop; // Get the top position of section2
        const scrollPosition = window.scrollY; // Get the current scroll position

        // Change navbar and menu background color based on scroll position
        if (scrollPosition >= section2Top) {
            navbar.style.backgroundColor = 'rgb(21, 29, 73)'; // Change navbar color when scrolled past section2
            menuList.style.backgroundColor = 'rgb(21, 29, 73)'; // Change menu background color when scrolled past section2
        } else {
            navbar.style.backgroundColor = ''; // Reset navbar color when above section2
            menuList.style.backgroundColor = ''; // Reset menu background color when above section2
        }
    });
});

// Toggle the menu visibility when the menu icon is clicked
document.querySelector('.bx-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu'); // Selector for the menu `<ul>`
    menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});
