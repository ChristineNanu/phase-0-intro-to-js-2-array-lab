// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
console.log(cats);
function destructivelyPrependCat(Kitty) {
  cats.unshift(Kitty)
}
 
function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat(Milo) {
  cats.shift(Milo);
}
function appendCat(Whisky) {
  
  return [...cats, Whisky]; // return the new array
}



function prependCat(Joe) {
  return [Joe, ...cats]
}








function removeLastCat() {
  const newCatsArray = cats.slice(0, -1); // make a copy of the cats array without the last cat object
  return newCatsArray; // return the new array
}

function removeFirstCat() {
  const newCatsArray = cats.slice(1); // make a copy of the cats array without the first cat object
  return newCatsArray; // return the new array
}







