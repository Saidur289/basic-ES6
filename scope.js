// example - 1
function add(a, b){
    const total = a + b;
    if(b>5){
        const sum = 25 + a + b;
    }
    else{
        const sum = 5 + a + b;
        // const curren = sum;
        var curren = sum;
    }
    // console.log(curren);
    return total;
}
add(2, 3)
// example - 2
// for(var i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log('outside', i);
// example - 2
print5();
// print10();
function print5(){
    console.log('inside', 5);
}
const print10 = function(){
    console.log('inside', 10);
}
