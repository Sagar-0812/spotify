// const paragraph = document.querySelector('p');
// paragraph.textContent = 'this is news content';
// paragraph.style.color = 'blue';
// paragraph.style.display = 'flex';
// paragraph.style.fontSize = '3rem';
// paragraph.style.justifyContent='center';

//header styling
const head = document.querySelector('header');
head.style.backgroundColor ='black';
head.style.height = '50%'
head.style.width ='100%'
head.style.display ='flex';   
head.style.justifyContent='space-evenly';

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
const butt = document.querySelector('.b'); // Fix: Use 'button' instead of 'but'
butt.style.color = 'blue'; // Sets the text color of the button to blue
butt.style.backgroundColor = 'pink'; // Sets the text color of the button to blue
butt.style.height = '50px';
butt.style.width = '100px';
butt.style.margin = '20px 0px';

//button2
let tub = document.querySelector('.login'); // This also selects the same <button>
tub.style.backgroundColor = 'red'; // Fix: No parentheses for 'backgroundColor'
tub.style.color ='white'
tub.style.height = '50px';
tub.style.width = '100px';
tub.style.margin = '20px 0px';

//textbox styling
let txt = document.querySelector('.text');
txt.style.height = '50px';
txt.style.width = '100px';
txt.style.margin = '20px 0px';

//svg's styling
let sgv = document.querySelector('.spoti');
sgv.style.margin = '10px 0px';
let vsg = document.querySelector('.spot');
vsg.style.margin = '10px 0px';

