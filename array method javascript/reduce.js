const arr1 = [1,2,3,4,5];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log("reducer=", arr1.reduce(reducer));


const reduceShow = arr1.reduce( (val, i) => val + i );
console.log("reduceShow", reduceShow);


const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 50 },
    { name: 'Computer', price: 300 },
    { name: 'Keyboard', price: 20 },
    { name: 'Mouse', price: 5 },
    { name: 'VGA', price: 10 },
    { name: 'PS5', price: 45 },
]

const total = items.reduce((currTotal, item) => {
    return item.price + currTotal;
}, 0);

console.log("reduce item price", total);





