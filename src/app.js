// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    document.querySelector('.btn-patty').classList.add("active");

  } else {
    patty.style.display = "none";
    document.querySelector(".btn-patty").classList.remove("active")
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
    document.querySelector(".btn-cheese").classList.add("active");
  } else{
    cheese.style.display = "none";
    document.querySelector(".btn-cheese").classList.remove("active");
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
    document.querySelector(".btn-tomatoes").classList.add("active");
    
  } else {
    tomato.style.display ="none";
    document.querySelector(".btn-tomatoes").classList.remove("active");
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  if(state.Onions){
    onion.style.display="inherit";
    document.querySelector(".btn-onions").classList.add("active");
  } else {
    onion.style.display="none";
    document.querySelector(".btn-onions").classList.remove("active");
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if(state.Lettuce){
    lettuce.style.display="inherit";
    document.querySelector(".btn-lettuce").classList.add("active");
  }else{
    lettuce.style.display="none";
    document.querySelector(".btn-lettuce").classList.remove("active");
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick =function(){
  state.Cheese= !state.Cheese;
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick =function(){
  state.Tomatoes= !state.Tomatoes;
  renderAll();
}


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick =function(){
  state.Onions= !state.Onions;
  renderAll();
}


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick =function(){
  state.Lettuce= !state.Lettuce;
  renderAll();
}


//Challenge 1 - Add/Remove the class active to the buttons based on state



//Challenge 2 - Render only the items selected in the ingredients board based on the state
const renderIngredientsBoard = ()=>{
  for(const item in state){
const ingredient = document.getElementsByClassName("items")
for(const element of ingredient){
  if(item==element.innerHTML){
    if(state[item]) element.style.display="inherit"
    else element.style.display="none"
  }
}
  }
  }

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
let renderPrice=()=>{
  let total =20;
  for(let item in state){
    if(state[item]){
      total+=ingredients[`${item}`];
    }
  }
  document.querySelector(".price-details").innerHTML=`INR ${total}`
}