const date = new Date();
const getDay = date.getDay();
console.log("getDay", getDay);

// Note: In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
console.log("show day", day);