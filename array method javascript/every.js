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

const everymethode = items.every((value) => {
    return value.price <= 10000;
});

console.log("show every tue", everymethode);