function drawChessBoard () {
    const hashSign = '#';
    const whiteSpace = ' ';
    let someString = '';

    for (let i = 1; i <= 8; i++) {            //row amount
        for (let j = 1; j <= 8; j++) {        // symbols amount per row
            if (i % 2 !== 0) {
                if (j % 2 !== 0 && j % 8 !== 0) {
                    someString += hashSign;
                } else if (j % 2 === 0 && j % 8 !== 0){
                    someString += whiteSpace;
                } else if (j % 8 === 0 ) {
                    someString = someString +whiteSpace + '\n';
                }
            } else {
                if (j % 2 !== 0 && j % 8 !== 0) {
                   someString += whiteSpace;
                } else if (j % 2 === 0 && j % 8 !== 0){
                    someString += hashSign;
                } else if (j % 8 === 0 && i !== 8) {
                    someString = someString + hashSign + '\n';
                } else if (j % 8 === 0 && i === 8) {
                    someString = someString + hashSign;
                }
            }
        }
    }
    console.log(someString)
}

drawChessBoard()