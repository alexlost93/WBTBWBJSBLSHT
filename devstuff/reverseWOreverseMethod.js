// function reverseArr (someArr) {
//     let newArr = [];

//     for (let i = 0; i < someArr.length; i++) {
//         newArr.unshift(someArr[i]);
//     }
//     console.log(newArr);
// }

// reverseArr([1, 'b', null, 184, '------']);

// function reverseSameArray (someArr) {
//     for (let i = someArr.length -1; i >= 0; i--) {
//         someArr.unshift(someArr[i]);
//         someArr.pop(someArr[i+1]);        
//     } 
//     console.log(someArr);
//     return someArr;
// }

// to be continued
function reverseSameArray (someArr) {
    const initLength = someArr.length;
    console.log(initLength);
    for (let i = 0; i < someArr.length; i++) {
        someArr.unshift(someArr[i]);
        i++;
    }
    console.log(someArr.length)

    for (let i = someArr.length - 1; i === initLength; i--) {
        someArr = someArr.pop();
    }
    console.log(someArr);
}

reverseSameArray([1, 2, 3, 4, 5]);