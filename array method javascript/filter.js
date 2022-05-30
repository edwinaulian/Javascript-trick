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

const filterItem = items.filter((item) => {
    return item.price >= 100;
});

console.log("item > = 100 is", filterItem);


var itemsData = [1,24,2,23,0,234,0, undefined,false,NaN,null, 32,23];
console.log(itemsData.filter(val => Boolean(val) == true));