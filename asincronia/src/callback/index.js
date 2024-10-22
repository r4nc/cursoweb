function sum(num1, num2){
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2,2, sum))

//setTimeout(funcion(){lo que hara},tiempo que demorara)
setTimeout(function(){
    console.log('Hola Javascript')
}, 2000)

//setTimeout(funcion, tiempo, variables)
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Kevin')

function runCode(name){
    console.log(`Hola, ${name}, Saluda al mundo`)
}

Window.setTimeout(runCode, 2000, 'Kevin')