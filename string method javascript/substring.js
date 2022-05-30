var link = '/home/loan/loanApproval?taskId=221';
var showsubstring = link.substring(0, 23);
console.log('substring = ', showsubstring);


var tgl = '05/2019'
var showTgl = tgl.substring(3, 7);
console.log('subsrting tgl', showTgl);


let val = '0001-800002-360';
console.log('val 1', val.substring(0, 4));
console.log('val 2', val.substring(5, 11));
console.log('val 3', val.substring(12, 15));