function insert(algarism) {
    const currentValue = document.getElementById('result').innerHTML;
    const displayValue = currentValue + algarism;
    const operation = setOperation(algarism);
    const newValue = verifyCurrentDisplay(displayValue);
    console.log('display>>', displayValue);
    console.log('operation>>', operation);
    console.log('newValue>>', newValue);
    document.getElementById('result').innerHTML = newValue + operation;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
    var resultValue = document.getElementById('result').innerHTML;
    console.log(resultValue)
    if (resultValue) {
        const result = document.getElementById('result').innerHTML = eval(resultValue);
        const list = document.getElementById('listaDeCalculosDecimais')
        list.innerHTML = `<li> ${resultValue} = ${result} <li>` + list.innerHTML;
        console.log(list)
        return result
    }
    else {
        document.getElementById('result').innerHTML = "Nada..."
    }
}

function verifyCurrentDisplay(displayValue) {
    const operators = ['+', '-', '*', '/'];
    const index = -1;
    console.log('displayValue>>', displayValue);
    const lastChar = displayValue ? displayValue.at(index) : '';
    console.log('lastChar>>', lastChar);
    if(operators.includes(lastChar)) {

        switch (displayValue) { 
            case displayValue.includes('11')    : return displayValue = 2;
            case '111'   : return displayValue = 3;
            case '15'    : return displayValue = 4;
            case '51'    : return displayValue = 6;
            case '511'   : return displayValue = 7;
            case '5111'  : return displayValue = 8;
            case '110'   : return displayValue = 9;
            case '101'   : return displayValue = 11;
            case '1011'  : return displayValue = 12;
            case '10111' : return displayValue = 13;
        }
    }
    return displayValue;
}

function setOperation(operation) {
    const operators = ['+', '-', '*', '/'];
    const index = -1;
    const lastChar = operation.at(index);
    if(operators.includes(lastChar)) return lastChar;
    return '';
}

