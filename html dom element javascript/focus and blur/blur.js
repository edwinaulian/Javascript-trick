const btnFocus = document.getElementById('btn-focus');
const btnBlur = document.getElementById('btn-blur');

btnFocus.addEventListener('click', () => {
    const myText = document.getElementById("myText").focus();
    return myText;
});

btnBlur.addEventListener('click', () => {
    const myText = document.getElementById("myText").blur();
    return myText;
})