'use strict';

var allRecipes = [];
var selectedRecipes = [];
//push all selected recipes into an array
//check to see if a recipe is already selected in the event listener
//how to let someone unselect a recipe? splice or slice?

function Recipe(name, ingredients, quantity) {
  this.name = name;
  this.ingredients = ingredients;
  this.quantity = quantity;
}

//buttons for dinner selections
var elBC = document.getElementById('broccoli-chevre');
elBC.addEventListener('click', clickedBC);

function clickedBC(event) {
  event.preventDefault();
  broccoliChevreSoup.generateShoppingList();
}

var elSHM = document.getElementById('superhero-muffins');
elSHM.addEventListener('click', clickedSHM);

function clickedSHM(event) {
  event.preventDefault();
  superHeroMuffins.generateShoppingList();
}

var elSausageM = document.getElementById('sausage-minestrone');
elSausageM.addEventListener('click', clickedSausageM);

function clickedSausageM(event) {
  event.preventDefault();
  sausageMinestrone.generateShoppingList();
}

var elVeggieFR = document.getElementById('veggie-fried-rice');
elVeggieFR.addEventListener('click', clickedVeggieFR);

function clickedVeggieFR(event) {
  event.preventDefault();
  veggieFriedRice.generateShoppingList();
}

// RECIPES: Add new recipe here

var broccoliChevreSoup = new Recipe('Broccoli Chevre Soup', [
  'unsalted butter', 'yellow onion', '2 carrots',
  'sea salt', '3 cloves garlic', '4 cups veggie broth',
  '2 heads broccoli', '1 bay leaf', 'black pepper',
  'tahini', '4 oz chevre'], '1');
allRecipes.push(broccoliChevreSoup);

var superHeroMuffins = new Recipe('Superhero Muffins', [
  'almond meal', 'rolled oats', 'cinnamon',
  'nutmeg', 'baking soda', 'sea salt',
  'walnuts', 'chocolate chips', '3 eggs',
  '1 zucchini', '2 carrots', 'unsalted butter',
  'maple syrup', 'vanilla extract'
], 1);
allRecipes.push(superHeroMuffins);

var sausageMinestrone = new Recipe('Sausage Minestrone', [
  '1 lb spicy Italian sausage', '3 ribs celery', '3 carrots',
  '1 yellow onion', '3 cloves garlic', 'oregano',
  'sea salt', '8 cups veggie broth', '3 zucchini',
  '14 oz diced tomatoes', '14 oz cannelli beans', '3 cups penne',
  'Parmesan'
], 1);
allRecipes.push(sausageMinestrone);

var veggieFriedRice = new Recipe('Veggie Fried Rice', [
  'Saffron oil', '2 cloves garlic', 'ginger',
  'red pepper flakes', '6 cups chopped vegetables', 'sea salt',
  '4 cups brown rice', 'soy sauce', '2 eggs',
], 1);

// END RECIPES

//generate shopping list

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

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";    // make the element a checkbox
    checkbox.name = "slct[]";      // give it a name we can check on the server side
    ingredient.prepend(checkbox);
  }

  //run through ingredients array
};

// broccoliChevreSoup.generateShoppingList();
// superHeroMuffins.generateShoppingList();
// sausageMinestrone.generateShoppingList();
// veggieFriedRice.generateShoppingList();