function sumOfRange(start, end, step) {
    let arr = [];
    let sum = 0;
    step = step || 1;
    if (step !== null || step !== undefined) {
        for (let i = start; i <= end; i+=step) {
            arr.push(i);
            sum+=i;
        }
    }
    
    console.log(arr);
    console.log(sum)
}

sumOfRange(2, 19, 3);