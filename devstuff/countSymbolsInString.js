function countBs(someString, charToSearch) {
    let amount = 0;
    for (let i = 0; i < someString.length; i++) {
        if (someString.charAt(i) === charToSearch) {
            amount++;
        }
    }
    if (amount === 1 ) {
        console.log('There is only ' + amount + ' symbol here');    
    } else if (amount > 1){
        console.log('There are ' + amount + ' symbols here');
    } else {
        console.log('Nothing here, my lord');
    }
}

countBs('Booze, broads and beelzebub', 'b');