// Select button element
const button = document.querySelector('button');

// Add click event listener
button.addEventListener('click', () => {
    // Change button style on click
    button.style.backgroundColor = '#1DB954';
    button.style.transform = 'scale(0.98)';
    
    // Add transition effect
    button.style.transition = 'all 0.3s ease';
    
    // Reset button style after click
    setTimeout(() => {
        button.style.backgroundColor = '#333';
        button.style.transform = 'scale(1)';
    }, 200);
});