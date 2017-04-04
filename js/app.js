'use strict';

var allRecipes = [];
var selectedRecipes = [];
//push all selected recipes into an array
//check to see if a recipe is already selected in the event listener
//how to let someone unselect a recipe? splice or slice?

function Recipe(recipes) {
  this.name = recipes.name;
  this.ingredients = recipes.ingredients;
  this.quantity = recipes.quantity;
}

recipes.forEach(function(i){
  allRecipes.push(new Recipe(i));
});

//buttons for dinner selections
//generateShoppingList() functions won't work with the code refactored
var elBC = document.getElementById('broccoli-chevre');
elBC.addEventListener('click', clickedBC);

function clickedBC(event) {
  event.preventDefault();
  broccoliChevreSoup.generateShoppingList();
  selectedRecipes.push(broccoliChevreSoup);
}

var elSHM = document.getElementById('superhero-muffins');
elSHM.addEventListener('click', clickedSHM);

function clickedSHM(event) {
  event.preventDefault();
  superHeroMuffins.generateShoppingList();
  selectedRecipes.push(superHeroMuffins);
}

var elSausageM = document.getElementById('sausage-minestrone');
elSausageM.addEventListener('click', clickedSausageM);

function clickedSausageM(event) {
  event.preventDefault();
  sausageMinestrone.generateShoppingList();
  selectedRecipes.push(sausageMinestrone);
}

var elVeggieFR = document.getElementById('veggie-fried-rice');
elVeggieFR.addEventListener('click', clickedVeggieFR);

function clickedVeggieFR(event) {
  event.preventDefault();
  veggieFriedRice.generateShoppingList();
  selectedRecipes.push(veggieFriedRice);
}

var elSweetSour = document.getElementById('sweet-sour-chicken');
elSweetSour.addEventListener('click', clickedSweetSour);

function clickedSweetSour(event) {
  event.preventDefault();
  sweetSourChicken.generateShoppingList();
  selectedRecipes.push(sweetSourChicken);
}

// Generates shopping list
// Function is a prototype method of the Recipe constructor
// Adds ingredients checklist to the DOM
Recipe.prototype.generateShoppingList = function() {
  var recipeList = document.getElementById('recipes');
  var recipeName = document.createElement('h2');

  recipeList.textContent = '';        // this code clears out the list if the button is pushed again
  recipeName.textContent = this.name;
  recipeList.appendChild(recipeName);

  var ingredient;
  for (var i = 0; i < this.ingredients.length; i++) {
    ingredient = document.createElement('li');
    ingredient.textContent = this.ingredients[i];
    recipeList.appendChild(ingredient);

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';    // make the element a checkbox
    checkbox.name = 'slct[]';      // give it a name we can check on the server side
    checkbox.className += 'selection';
    ingredient.prepend(checkbox);

    // checkedIngredient()'
    // if (this.checked) {
    //   $(input).css('textDecoration', 'line-through');
    // } else {
    //   $(input).css('textDecoration', 'none');
    // }
  }

  //run through ingredients array
};