// function stopWatch(){
//     let counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }
// const watch1 = stopWatch()
// console.log(watch1());
// console.log(watch1());
function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
    
}
const liveServer = kitchen();
console.log(liveServer());
console.log(liveServer());
console.log(liveServer());