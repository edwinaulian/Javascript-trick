// Shift => For remove at the first elemet if array / mengahpus element / data awal dalam array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log('sebelum data terakhir di hapus',fruits)
let text = fruits.shift();
console.log("sesudah data terakhir di hapus", fruits);

let arr = [
    { 'actionPlan': 'edwin', 'reason' : 'Auliano' , 'targetDate': '23/06/2022' },
    { 'actionPlan': 'team', 'reason' : 'tur' , 'targetDate': '23/06/2021' },
];

console.log('sebelum data terakhir di hapus',arr)
let text2 = arr.shift();
console.log("sesudah data terakhir di hapus", arr);

