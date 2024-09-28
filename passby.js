// example - 1
let num1 = 6;
let num2 = 7;
function multyply(a, b){
    a = 30;
    return a * b;
}
console.log(num1);
console.log(multyply(num1, num2));
console.log(num1);// primitive value  not change .
// example - 2
let student1 = {name: 'jolil', partner: 'borsha'};
let student2 = {name: 'Sahid', partner: 'Anika'}
function makeMovie(couple1, couple2){
    couple1.name = 'ananta';
    couple2.name = 'mim'
}
console.log(student1, student2);
console.log(makeMovie(student1, student2));
console.log(student1, student2);
