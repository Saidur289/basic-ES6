// function greetings(greetingsHandler, name){
//     greetingsHandler(name);
// }
// function handler1(name){
//     console.log('good morning', name);
// }
// function handler2(name){
//     console.log('good evening', name);
// }
// function handler3(name){
//     console.log('good night', name);
// }
// greetings(handler1, 'saidur');
// greetings(handler2, 'rahman');
// greetings(handler3, 'Riaj');
function greetings(greetingsHandler, name){
    greetingsHandler(name);
}
function handler1(name){
    console.log('good morning', name);
}
function handler2(name){
    console.log('good evening', name);
}
function handler3(name){
    console.log('good night', name);
}
greetings(handler1, 'saidur');
greetings(handler2, 'sahid');
greetings(handler3, 'virat');