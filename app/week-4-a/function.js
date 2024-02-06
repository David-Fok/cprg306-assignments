function add(a, b) {
  return a + b;
}
//add can be called anywhere in the file
add(4, 5);

const addVar = function (a, b) {
  return a + b;
};
//addVar only can be called after it is defined
addVar(4, 5);

// => function
const addArrow = (a, b) => {
  return a + b;
};

// omit return and curly braces
const addArrowAbbrev = (a, b) => a + b;

addArrowAbbrev(4, 5);

// higher order function
function getOp(op) {
  if (op === "add") {
    return (a, b) => a + b;
  }
  if (op === "sub") {
    return (a, b) => a - b;
  }
}
//function returns a function
const myAdd = getOp("add");
myAdd(4, 5);
// 9
const hahaha = getOp("sub");
hahaha(4, 5);
// -1

//no name function
((a, b) => a + b)(4, 5);
// 9

//---------------------------------------------

//&& - and
let a = true;
let b = false;
if (a && b) {
  console.log("a and b are true");
} else {
  console.log("a and b are not both true");
}

//
let f1 = () => {
  console.log("f1");
  return false;
};
let f2 = () => {
  console.log("f2");
  return true;
};
if (f1() && f2()) {
  console.log("f1 and f2 are true");
} else {
  console.log("f1 and f2 are not both true");
}
//because f1 is false, f2 is not called
