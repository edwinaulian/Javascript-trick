let str = "? edwin auliano ?nugraha ?";
str = str.replace(/^([?]*)/g, '')
str = str.replace(/([?]*)/g, '')
str = str.replace(/([?]*)$/g, '')
console.log('replace = ', str);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log("show replace = ", newText);

//NOTE:
// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
// By default, the replace() method replaces only the first match:

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text2 = "Please visit Microsoft!";
let newText2 = text2.replace(/MICROSOFT/i, "W3Schools");
console.log("show replace = ", newText2);

//To replace all matches, use a regular expression with a /g flag (global match):
let text3 = "Please visit Microsoft and Microsoft!";
let newText3 = text3.replace(/Microsoft/g, "W3Schools");
console.log("show replace = ", newText3);


let komatotitik = ('500,000'.replace(/,/g, '.'));
console.log('koma to titik =', komatotitik);

