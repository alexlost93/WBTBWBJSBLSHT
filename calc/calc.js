let firstInput = "";
let secondInput = "";
let output;
let operator = "";
// let isMoreThanOneDot = false;
// const regexPattern = "/^D$/gi";
let inputField = document.getElementById("inputField");

const buttonsInput = document
    .querySelectorAll(".knopkaDigit, .knopka")
    .forEach((item) => {
        item.addEventListener("click", function (event) {
            if (inputField.value != "0" && inputField.value != operator && output === undefined) {
                inputField.value += item.getAttribute("data-attr");
            } else {
                inputField.value = item.getAttribute("data-attr");
            }
        });
    });

const operatorInput = document
    .querySelectorAll(".operator, .lastOperator")
    .forEach((item) => {
        item.addEventListener("click", function (event) {
            if (item.getAttribute("data-attr") === "+") {
                if (firstInput === "") {
                    firstInput = parseInt(inputField.value);
                    console.log(firstInput + " First Input filled");
                }
                inputField.value = "";
                operator = "+";
                console.log("Operator is " + operator);
                console.log("Input field after operator: " + inputField.value);
            } else if (item.getAttribute("data-attr") === '-') {
                if (firstInput === "") {
                    firstInput = parseInt(inputField.value);
                    console.log(firstInput + " First Input filled");
                }
                inputField.value = '';
                operator = '-';
                console.log('Operator is ' + operator);
                console.log('Input field after operator: ' + inputField.value);
            } else if (item.getAttribute("data-attr") === '*') {
                if (firstInput === "") {
                    firstInput = parseInt(inputField.value);
                    console.log(firstInput + " First Input filled");
                }
                inputField.value = '';
                operator = '*';
                console.log('Operator is ' + operator);
                console.log('Input field after operator: ' + inputField.value);
            } else if (item.getAttribute("data-attr") === '/') {
                if (firstInput === "") {
                    firstInput = parseInt(inputField.value);
                    console.log(firstInput + " First Input filled");
                }
                inputField.value = '';
                operator = '/';
                console.log('Operator is ' + operator);
                console.log('Input field after operator: ' + inputField.value);
            }

            if (item.getAttribute("data-attr") === "=") {
                secondInput = parseInt(inputField.value);
                console.log("second: " + secondInput);
                inputField.value = result(firstInput, operator, secondInput);
            }
        });
    });

const result = (first, operator, second) => {
    switch (operator) {
        case "+":
            output = first + second;
            break;
        case "-":
            output = first - second;
            break;
        case "*":
            output = first * second;
            break;
        case "/":
            output = first / second;
            break;
    }
    console.log('result is: ' + output)
    return output;
};

const clearInput = document.querySelector('.clear').addEventListener('click', function (event) {
    if (event) {
        inputField.value = '';
        firstInput = '';
        secondInput = '';
        output = '';
    }
})

// ПЫТАЛСЯ СДЕЛАТЬ ПРОВЕРКУ НА ТОЧКИ, НЕ ВЫШЛО :()
//         if (item.dataAttr = '.') {
//             if (inputField.value.match(regexPattern)) {
//                 isMoreThanOneDot = true;
//             }
//         }

//         if (isMoreThanOneDot = false) {
//             inputField.value += item.getAttribute('data-attr');
//         }
//     });
// });

//
