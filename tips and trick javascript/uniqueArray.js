const users = ["Rani", "Edwin", "Annisa", "Rani", "Anna", "Rahma", "Dinda", "Anna"];

const unique = Array.from(new Set(users));

console.log("not unique", users);
console.log("unique with new set", unique);


console.log("unique with filter", users.filter((item, index, array) => array.indexOf(item) == index ? item : ''));