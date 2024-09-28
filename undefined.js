// example - 1
let first ;
// console.log(first);
// example - 2
function second(a, b){
    const total = a + b;
}
const result = second(1, 2);
// console.log(result);
// example - 3
function third(a, b, c){
    const total = a + b + c;
    console.log(a, b, c);
}
// third(2);
// example - 4
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total);
// example - 5
const fifth = {id: 2, job: 'developer'};
// console.log(fifth.id, fifth.salary);
// example - 6
const sixth = [3, 4, 65];
// console.log(sixth[0], sixth[12]);
// example - 7
// example - 8
delete sixth[0];
console.log(sixth[0]);
// example - 9
const eight = undefined;
console.log(eight);
// null and undefined typeof 
console.log(typeof null);
console.log(typeof undefined);
// example - 10
const ten = null;
console.log(ten);