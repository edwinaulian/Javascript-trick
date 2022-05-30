var numbers = [5, 458, 120, -215, 228, 400, 122205, -85411];
var minInNumbers = Math.min.apply(Math, numbers);
var maxInNumbers = Math.max.apply(Math, numbers);
console.log("minInNumbers", minInNumbers);
console.log("maxInNumbers", maxInNumbers);