
// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing 
// Make a variable called height and width from the same properties on our canvas. Deconstr
// const width = canvas.width;
// const height = canvas.height;

const { width, height } = canvas;

//Create a random x & y starting points on the canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;


ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a drawing function

function draw({key}){
//increment hue
hue += 10;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
//Begin the path 
    ctx.beginPath();
    ctx.moveTo(x,y);
//Move x & y depending on what user does
    switch (key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
            case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
            case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
            case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
            default:
                break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write a handler for the keys
function handleKey(e){
    if (e.key.includes('Arrow')){
        e.preventDefault();
        draw({ key:e.key });
    }
}
   

// Clear/shake function

function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() {
        console.log('Done the shaking');
        canvas.classList.remove('shake');
    }, 
    {once: true}
    );
}

// Listen for arrow keys

window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);