// Make Generators
function* makeGenerator() {
    // yield 10;
    // yield 20;
    // yield 30;
    // yield 40;
    // yield 50;
    let i = 1;
    while (true) {
        let reset = yield i++;
        if (reset) {
            i = 1;
        }
    }
}

// Using Generators
const dataGenerate = makeGenerator();
// console.log(dataGenerate.next().value);
console.log(dataGenerate.next());
console.log(dataGenerate.next());
console.log(dataGenerate.next());
console.log(dataGenerate.next());
console.log(dataGenerate.next());
console.log(dataGenerate.next(true));       //Reset Generators
console.log(dataGenerate.next());
console.log(dataGenerate.next());
