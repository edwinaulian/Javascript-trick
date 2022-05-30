const date = new Date();
const getMonth = date.getMonth();
console.log("getMonth", getMonth);

// Note: In JavaScript, the first month (January) is month number 0, so December returns month number 11.

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months = month[date.getMonth()];
console.log("months", months);