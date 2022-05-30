var items = [12, 548, 'a', 2, 5478, 'foo', 8852, , 'Doe', 2154, 119];
const beforespplce = items.length; // return 11 
const fr = items.splice(3, 1);
const itemsshow = items.length; // return 10 

console.log("before remove an item", beforespplce);
console.log("after remove an item", itemsshow);