function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log('Buzz');
        } else console.log(i);
    }
}

fizzBuzz();


/* for numbers that only divides on 3 and 5

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else console.log(i);
    }
}

fizzBuzz();
*/