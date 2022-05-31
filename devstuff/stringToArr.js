const initString = 'A roza upala na lapu azora';

const strToArrFunc = (incomeStr) => {
    let spaceSign = ' ';
    return incomeStr.split(spaceSign);
}

console.log(strToArrFunc(initString));