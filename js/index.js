
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
    const romanNumeral2 = displayValue.slice(operatorIndex + 1, displayValue.length).join('');

    const arabicNumber = convertToArabicNumber(romanNumeral);
    const arabicNumber2 = convertToArabicNumber(romanNumeral2);

    const arabicResult = eval(arabicNumber + operator + arabicNumber2);
    const romanResult = convertToRoman(arabicResult);

    const arabicDisplay = `${arabicNumber} ${operator} ${arabicNumber2} = ${arabicResult}`;
    const romanDisplay = `${romanNumeral} ${operator} ${romanNumeral2} = ${romanResult}`;

    const showDecimalResultList = document.getElementById('listaDeCalculosDecimais');
    const showRomanResultList = document.getElementById('listaDeCalculosRomanos');
    
    showRomanResultList.innerHTML += `<li>${romanDisplay}</li>`;
    showDecimalResultList.innerHTML += `<li>${arabicDisplay}</li>`;
    //Esvaziando o array
    clean();
}

function convertToRoman(arabicNumber){
    let romanNumeral = '';
    let number = arabicNumber;
    numbersAndNumerals.forEach( (element) => {
        while(number >= element.number){
            romanNumeral += element.roman;
            number -= element.number;
        }
    });
    return romanNumeral;
}

function convertToArabicNumber(romanNumeral){
    let roman = romanNumeral;
    const map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    let result = 0;

    roman.split('').forEach( (element, index) => {
        if(map[roman[index-1]] < map[element]){
            result -= map[element];
        }
        result += map[element];
    });

    return result;
}

const displayValue = [];
const operators = ['+', '-', '*', '/'];
const numbersAndNumerals = [
    {number: 1000, roman: 'M'}, 
    {number: 900, roman: 'CM'}, 
    {number: 500, roman: 'D'},  
    {number: 400, roman: 'CD'}, 
    {number: 100, roman: 'C'},  
    {number: 90, roman: 'XC'},  
    {number: 50, roman: 'L'},   
    {number: 40, roman: 'XL'},  
    {number: 10, roman: 'X'},   
    {number: 9, roman: 'IX'},   
    {number: 5, roman: 'V'},    
    {number: 4, roman: 'IV'},   
    {number: 1, roman: 'I'}     
];
