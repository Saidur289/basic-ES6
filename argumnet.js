function addNum(num1, num2){
    let sum = 0;
    const args = [...arguments];
    for(const item of args){
        sum = sum + item;
    }
    return sum;
}
const output = addNum(5, 5, 7, 8, 2);
console.log(output);
