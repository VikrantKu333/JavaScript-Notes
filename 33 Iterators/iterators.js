const animal = ['Cat', 'Tiger', 'Rat', 'Horse', 'Dog'];
console.log(animal);

//Make Iterators
function makeIterator(values_Iterator) {
    let nextIndex = 0;
    //Return An Object
    return {
        next: function () {
            if (nextIndex < values_Iterator.length) {
                //Return Below Object
                return {
                    value: values_Iterator[nextIndex++],
                    done: false
                }
            } else {
                //Return Below Object with only done
                return {
                    done: true
                }
            }
        }
    }
}

//Using Iterators
const dataIterate = makeIterator(animal);
console.log(dataIterate.next());
// console.log(dataIterate.next().value);
console.log(dataIterate.next());
console.log(dataIterate.next());
console.log(dataIterate.next());
console.log(dataIterate.next());
console.log(dataIterate.next());
console.log(dataIterate.next());
console.log(dataIterate.next());
