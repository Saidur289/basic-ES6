// example - 1
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);
// example - 2
let p = {job: 'web developer'};
let q = p;
// console.log(p, q);
// q = {job: 'backend'};
// console.log(p, q);
q.job = 'front end';
console.log(p, q);