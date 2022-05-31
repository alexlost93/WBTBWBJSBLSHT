function min (a, b) {
    if (a - b > 0) {
        console.log(b);
    } else if (a - b === 0) {
        console.log('Numbers are equal, sir.');
    } else {
        console.log(a);
    }
}

min (58, 58);