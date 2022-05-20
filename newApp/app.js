//есть текст инпут
// есть кнопка
// есть окно результата
// инпут принимает число, кнопка делает факториал числа и отдаёт в в окно

//переписац

let inputStr = document.getElementById('inputID');
let btn = document.getElementById('btnID');
let output = document.getElementById('textOutput');
console.log(inputStr);
console.log(btn);
console.log(output);

inputStr.addEventListener('change', getVal);
btn.addEventListener('click', buttonPress);

function getVal() {
    inputStr = document.getElementById('inputID').value;
    console.log('Input string changed to ' + inputStr);
}

function buttonPress() {
    let mid = 1;
    console.log(parseInt(inputStr) + ' parsedVar!');
    for (let i = inputStr; i >= 1; i--) {
        mid *= i;
        console.log(mid);  
    }
    output.value = mid;
}

/*
Выводы:

- доставая через querySelector или getElementByClassName, я достаю коллекцию, после чего не происходит навешивание eventListener'a с ошибкой,
мол, не функция ето;
- контекст выполнения стрелочной функции и FD-функции разный, первая выполняется в момент описания выражения, т.е. имеет своё место в структуре,
когда FD можно позвать где угодно из-за того, что она компилируется вперёд батьки.
- изначально я пошёл считать факториал правильно, а ты меня сбил >:(
*/


