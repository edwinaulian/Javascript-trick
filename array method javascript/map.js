let arr = [
    { 'actionPlan': 'edwin', 'reason' : 'Auliano' , 'targetDate': '23/06/2022' },
    { 'actionPlan': 'team', 'reason' : 'tur' , 'targetDate': '23/06/2021' },
];
// let map = arr.map(val => {
//     console.log("show map string", val.actionPlan);
// })
const actionPlan = arr.map(element => element.actionPlan);
const reason = arr.map(element => element.reason);
const targetDate = arr.map(element => element.targetDate);

console.log("actionPlan", actionPlan);
console.log("reason", reason);
console.log("targetDate", targetDate);

let arr2 = [1, 2, 3, 4, 5];
let map2 = arr2.map(val => {
    console.log("show map number", val * 2);
})