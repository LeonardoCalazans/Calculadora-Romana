
function insert(algarism) {
    const currentValue = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = currentValue + algarism;
    displayValue.push(algarism);
}

function clean() {
    document.getElementById('result').innerHTML = "";
    displayValue.splice(0, displayValue.length);
}

function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
    displayValue.pop();
}

function calculate() {

    const operatorIndex = displayValue.findIndex(value => operators.includes(value));
    const operator = displayValue.at(operatorIndex);

    const romanNumeral = displayValue.slice(0, operatorIndex).join('');
    const romanSecondNumeral = displayValue.slice(operatorIndex + 1, displayValue.length).join('');

    const decimalNumber = convertToDecimal(romanNumeral);
    const decimalSecondNumber = convertToDecimal(romanSecondNumeral);

    const decimalResult = eval(decimalNumber + operator + decimalSecondNumber);
    const romanResult = convertToRoman(decimalResult);

    const decimalDisplay = `${decimalNumber} ${operator} ${decimalSecondNumber} = ${decimalResult}`;
    const romanDisplay = `${romanNumeral} ${operator} ${romanSecondNumeral} = ${romanResult}`;

    const showDecimalResultList = document.getElementById('listaDeCalculosDecimais');
    const showRomanResultList = document.getElementById('listaDeCalculosRomanos');

    showRomanResultList.innerHTML += `<li>${romanDisplay}</li>`;
    showDecimalResultList.innerHTML += `<li>${decimalDisplay}</li>`;
    //Esvaziando o array
    clean();
}

function convertToRoman(decimalNumber) {
    let romanNumeral = '';
    let number = decimalNumber;
    numbersAndNumerals.forEach((element) => {
        while (number >= element.number) {
            romanNumeral += element.roman;
            number -= element.number;
        }
    });
    return romanNumeral;
}

function convertToDecimal(roman) {
    let result = 0;
    let romanTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    result += romanTable[roman[roman.length - 1]];

    for (let i = roman.length - 1; i > 0; i--) {
        if (romanTable[roman[i - 1]] < romanTable[roman[i]]) {
            result -= romanTable[roman[i - 1]];
        } else {
            result += romanTable[roman[i - 1]];
        }
    }

    return result;
}

const displayValue = [];
const operators = ['+', '-', '*', '/'];
const numbersAndNumerals = [
    { number: 1000, roman: 'M' },
    { number: 900, roman: 'CM' },
    { number: 500, roman: 'D' },
    { number: 400, roman: 'CD' },
    { number: 100, roman: 'C' },
    { number: 90, roman: 'XC' },
    { number: 50, roman: 'L' },
    { number: 40, roman: 'XL' },
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' }
];
