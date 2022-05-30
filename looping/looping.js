const arr = [10, 12, 15, 21, 90, 56];
for (let i=0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(`index: ${i}, element ${[arr[i]]}`);
    }, 3000);
}