// переменная, в которой инициализируется функция, 
// "стартует" первой

const a = {color: 'black', kmg: 10};

const newFunc = (var1) => {
    let copiedKeys = Object.keys(var1);
    console.log(copiedKeys.length);
    console.log(copiedKeys);
    let newObj = {};
    for (let key in var1){
        newObj[key] = var1[key];
        console.log(key);
    }
    return newObj;
}

let changedB = newFunc(a);

changedB.color = 'purple';
changedB.kmg = 500;

console.log(a, changedB);
