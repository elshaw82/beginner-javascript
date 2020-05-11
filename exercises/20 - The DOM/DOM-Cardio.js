// Make a div

const div = document.createElement('div');


// add a class of wrapper to it

div.classList.add('wrapper');

// put it into the body

document.body.appendChild(div);

// make an unordered list

const unorderedList = `<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

div.innerHTML = unorderedList;
 console.log(div);

 // create an image

const img = document.createElement('img');

// set the source to an image
img.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60';


// set the width to 250

img.width = 500;

// add a class of cute

img.classList.add('cute');

// add an alt of Cute Puppy

img.alt = 'Mmm coffee';

// Append that image to the wrapper

div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const myCoffeeDiv = `
<div class='myDiv'>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
 </div>` 
 ;

 
const ulElement = div.querySelector('ul');
console.log(unorderedList);

// put this div before the unordered list from above

ulElement.insertAdjacentHTML('beforebegin',myCoffeeDiv );

// add a class to the second paragraph called warning

const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph

myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
const html = `
<div class="playerCard">
<h2>${name} - ${age}</h2>
<p>Their height is ${height} and ${age} years old. In Dog years this person would be 
${age * 7}. That would be a tall dog!</p>
<button class="delete" type ="button">&times; delete</button>
</div>
`;
return html;
}

generatePlayerCard('elaine', 12, 150);

// have that function return html that looks like this:


// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards

let cardsHTML = generatePlayerCard('Elaine', 12, 150);
cardsHTML = cardsHTML + generatePlayerCard('Dylan', 3, 150);
cardsHTML = cardsHTML + generatePlayerCard('Peter', 40, 150);
cardsHTML = cardsHTML + generatePlayerCard('Hairball', 35, 150);
console.log(cardsHTML);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(e) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.parentElement.remove();
    console.log('DELETE CARD! TO DO!')
}


// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));


