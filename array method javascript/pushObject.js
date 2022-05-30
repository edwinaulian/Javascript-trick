let arr = [
    { 'actionPlan': 'edwin', 'reason': 'Auliano', 'targetDate': '23/06/2022' },
    { 'actionPlan': 'team', 'reason': 'tur', 'targetDate': '23/06/2021' },
];

console.log("sebelum di tambah data", arr);

let tempData = [];

let data = { 'actionPlan': 'luna', 'reason': 'yea', 'targetDate': '23/06/2021' }

for (let index = 1; index < arr.length; index++) {
    if (arr != null || arr != undefined) {
        tempData.push(data);
    }
}
data = tempData;

// console.log("sesudah di tambah data", arr.concat(tempData));
console.log("sesudah di tambah data", [...arr, ...tempData]);