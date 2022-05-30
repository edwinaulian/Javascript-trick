let startAt = performance.now();

// here u would exe your crazy good taht might al loong long time
for (let i = 0; i < 21920; i++) {
    console.log(i);
}
let endAt = performance.now();

console.log(`${endAt - startAt} took miliseconds to exe`);