let arr = ['edwin', 'ariel', 'evans', 'says'];
let some = arr.some(val => val === 'edwin');
console.log("show some true =", some );


let arr2 = [12, 5, 8, 1, 4].some(x => x > 14); // true
console.log('show some false', arr2 );