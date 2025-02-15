const atozz = require("./src/atozz.js")("acdkluy"); // random letters

// random index number
let index = 4869388;

let forward = atozz.forward(index).str;
let backward = atozz.backward(forward).index;
console.log(forward, backward == index); // true(=correct)