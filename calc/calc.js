let inputField = document.querySelector('input');
const btnArr = document.querySelectorAll('button');
let resultString = '';

console.log('inputField is ' + inputField);
console.log('btnArr is ' + btnArr[0]);
console.log('someStr is ' + resultString);

console.log(btnArr.length);

btnArr.forEach(addEvents);

function addEvents(button) {
    button.addEventListener('click', clickFn);
    console.log('1');
    function clickFn() {
        let val = button.getAttribute('data-attr');
        console.log(val);
        if (val === '=') {
            inputField.value = eval(resultString);
            resultString = '';
            return;
        } else if (val === 'c') {
            resultString = '';
        } else {
            resultString += val;
        }
        inputField.value = resultString;
    }
}
