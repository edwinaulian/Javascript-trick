// reference => https://blog.bitsrc.io/how-to-compare-objects-in-javascript-f4eafef807fc
const user = {
    "uid": 12345,
    "name": "Edwin Auliano",
    "loc": "NG"
}

// console.log("show", Object.keys(user));
// console.log("uid :", user['uid']);
// console.log("name :", user['name']);
// console.log("loc :", user['loc']);

const a = { "name": "simon", "age": 5, "loc": 'NG', "sex": "male" }
const b = { "name": "ugorji", "age": 6, "loc": 'NG', "sex": "male" }
const c = { "name": "okorie", "age": 7, "loc": 'NG', "sex": "male" }
const d = { "name": "simon", "age": 5, "loc": 'NG', "sex": "male" }
const e = ['object Object'];

const newValue = [
    { "name": "simon", "age": 5, "loc": 'NG', "sex": "male" }
]
const oldValue = [
    { "name": "simon", "age": 7, "loc": 'NG', "sex": "male" }
]

const arrNewName = newValue.map(element => element.name);
const arrOldName = oldValue.map(element => element.name);

const arrNewAge = newValue.map(element => element.age);
const arrOldAge = oldValue.map(element => element.age);

const arrNewSex = newValue.map(element => element.sex);
const arrOldSex = oldValue.map(element => element.sex);

const isObject = (obj) => {
    return (Object.prototype.toString.call(obj) === '[object Object]');
}

function compareObject(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        console.log("object is invalid");
        return false;
    }

    let len = null;
    //check if they're of thesame length
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
    } else {
        len = Object.keys(obj1).length; //use any length
    }

    let i = 0;
    let match = 0; //store number of matched properties
    let matchVal = {};
    Object.keys(obj1).forEach(i => {
        //check if values with the same keys are equal
        if (obj1[i] === obj2[i]) {
            match++; //increment the variable
            //append key and value to the variable
            matchVal[i] = obj1[i];
        }
    });

    console.log(matchVal); //show the matched properties
    //check if the number of properties matched = the length of the object
    if (match === len) {
        return true;
    }

    return false;
}

const correspondingEquality = (arrNew, arrOld) => {
    let res = 0;
    for (let i = 0; i < arrOld.length; i++) {
        if (arrNew[i] !== arrOld[i]) {
            console.log("data berubah");
            continue;
        } else {
            console.log("data tetap / tidak berubah");
        }
        res++;
    }
    return res;
};

// console.log(compareObject(b, c));
// console.log(compareObject(a, d));
// console.log(compareObject(e, a));
console.log('Name', arrNewName, arrOldName);
console.log('Age', arrNewAge, arrOldAge);
console.log('Sexa', arrNewSex, arrOldSex);

console.log("compare", correspondingEquality(arrNewAge, arrOldAge))