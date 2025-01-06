const paragraph = document.querySelector('p');
paragraph.textContent = 'this is news content';
paragraph.style.color = 'blue';
paragraph.style.display = 'flex';
paragraph.style.fontSize = '3rem';
paragraph.style.justifyContent='center';

//header styling
const header = document.querySelector('header');
header.style.backgroundColor ='black';
header.style.display ='flex';   
header.style.justifyContent='space-evenly';

// Create style element
const styleReset = document.createElement('style');

// Add CSS reset rules
styleReset.textContent = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`;

// Append to head
document.head.appendChild(styleReset);


//button styling
