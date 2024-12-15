// Generate random stars on the page
function createStars() {
    const numberOfStars = 150;  // Number of stars to generate
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 1; // Random star size (1 to 4px)
        const positionX = Math.random() * 100 + 'vw'; // Random position across the screen
        const positionY = Math.random() * 100 + 'vh'; // Random position vertically
        const duration = Math.random() * 2 + 2; // Animation duration (2 to 4 seconds)
        const delay = Math.random() * 5; // Random animation delay
        
        // Apply styles dynamically to each star
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = positionX;
        star.style.top = positionY;
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = delay + 's';
        
        // Append the star to the body
        document.body.appendChild(star);
    }
}

// Call createStars when the page loads
window.onload = createStars;
