# A to ZZ
AtoZZ allows you to get all the alphabets from A to ZZ, ZZZ, ZZZZ... through numbers.
That is, using AtoZZ, you can use functions that return things like the examples below.
- 0 -> A
- 1 -> B
- 2 -> C
...
- 24 -> Y
- 25 -> Z
- 26 -> AA
- 27 -> AB
- 28 -> AC
...
- 50 -> AY
- 51 -> AZ
- 52 -> BA
- 53 -> BB
- 54 -> BC

(Like numbering columns in Excel)

## Usage

#### Installation
Execute command below on terminal:
```bash
npm install atozz
```

###### Forward: `require("atozz")(...).forward(...)`
- Forward is made to generate `string` from `index`.
- You can generate `array` and `string` with `index`.

> `forward(index: number)`
> `=> { index: number, arr: string[], rev:string[], str: string }`
( `rev` is reversed array of `arr`, `str` is `arr.join("")` )

Example code:
```js
// require("atozz") = (letters) => { forward, backward }

// require("atozz")("ABCDEFGHIJLMNOPQRSTUVWXYZ")
// The default value for letters is "ABCDEFGHIJKLMNOPQRSTUVWXYZ", so you can omit it like: require("atozz")()
const atozz = require("atozz")();

// Example use 1
atozz.forward(0) // { index: 0, arr: ["A"], rev: ["A"], str: "A" }
atozz.forward(27) // { index: 27, arr: ["A","B"], rev: ["B","A"], str: "AB" }
atozz.forward(28) // { index: 28, arr: ["A","C"], rev: ["C","A"], str: "AC" }
// In the above example, what we most want to use is `str`.
// Consider the example below:

// Example use 2
atozz.forward(0).str // A
atozz.forward(1).str // B
atozz.forward(2).str // C
// ...
atozz.forward(26).str // AA
atozz.forward(27).str // AB
// ...


// The above example was for "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
// You can change the letters whatever you want
// The example below is for "ABC".
const atozz2 = require("atozz")("ABC");

atozz2.forward(0).str // A
atozz2.forward(1).str // B
atozz2.forward(2).str // C
atozz2.forward(3).str // AA
atozz2.forward(4).str // AB
atozz2.forward(5).str // AC
atozz2.forward(6).str // BA
atozz2.forward(7).str // BB
atozz2.forward(8).str // BC
// ...

// arrays also possible for letters
const atozz3 = require("atozz")(["a","A","b","B"]);
atozz3.forward(0).str // a
atozz3.forward(1).str // A
atozz3.forward(2).str // b
atozz3.forward(3).str // B
atozz3.forward(4).str // aa
atozz3.forward(5).str // aA
atozz3.forward(6).str // ab
// ...
```

###### Backward `require("atozz")(...).backward(...)`
- Backward is made to get `index` from generated `string`.
> `backward(str: string||string[])`
> `=> { index: number, arr: string[], rev: string[], str: string }`

Example code:
```js
const atozz = require("atozz")("acdkluy"); // random letters

// random index number
let index = 4869388;

let forward = atozz.forward(index).str;
let backward = atozz.backward(forward).index;
console.log(forward, backward == index); // true(=correct)
```

## Thanks
Thanks to read this document!
The code wasn't that too hard to write, but it seems like it'll be very useful!
I hope you all code without errors :)
