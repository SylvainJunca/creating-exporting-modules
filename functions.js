// function that makes an array from input
var array = [];

function numberListMaker (num) {
  array.push(num);
  return array;
}

// console.log(numberListMaker(3))
// console.log(numberListMaker(4))
// console.log(numberListMaker(2))


// an array sorter
function sort() {
  return array.sort((a,b) => a - b);
}

function listSort() {
  return sort();
}


module.exports = {
  numberListMaker: numberListMaker,
  listSort: listSort
}