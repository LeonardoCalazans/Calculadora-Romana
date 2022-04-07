import { convertToDecimal } from './modules/convertToDecimal.js';
import { convertToRoman } from './modules/convertToRoman.js';

const displayValue = [];
const operators = ['+', '-', '*', '/'];

const cleanButtom = document.getElementById('clean');
cleanButtom.addEventListener('click', clean);

const backButtom = document.getElementById('back');
backButtom.addEventListener('click', back);

const calculateButtom = document.getElementById('calculate');
calculateButtom.addEventListener('click', calculate);

document.addEventListener('click', insert);

function insert(algarism) {
    let value = algarism.path[0].innerText;
    if (value === 'C' || value === 'D' || value === 'M' || value === 'L' || value === 'X' || value === 'V' || value === 'I' || value === '+' || value === '-' || value === '/' || value === '*') {
        displayValue.push(value);
        document.getElementById('result').innerHTML = displayValue.join('');
    }
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

    showRomanResultList.innerHTML = `<li>${romanDisplay}</li>` + showRomanResultList.innerHTML;
    showDecimalResultList.innerHTML = `<li>${decimalDisplay}</li>` + showDecimalResultList.innerHTML;
    clean();
}
