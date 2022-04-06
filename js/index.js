const operators = ['+', '-', '*', '/'];
const displayValue = [];

function insert(algarism) {
    const currentValue = document.getElementById('result').innerHTML;
    displayValue.push(algarism);
    console.log(displayValue)
    document.getElementById('result').innerHTML = currentValue + algarism;
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

    const index = -1;
    console.log('displayValue>>', displayValue);
    const lastChar = displayValue ? displayValue.at(index) : '';
    console.log('lastChar>>', lastChar);
    if (operators.includes(lastChar)) {

        switch (displayValue) {
            case displayValue.includes('11'): return displayValue = 2;
            case '111': return displayValue = 3;
            case '15': return displayValue = 4;
            case '51': return displayValue = 6;
            case '511': return displayValue = 7;
            case '5111': return displayValue = 8;
            case '110': return displayValue = 9;
            case '101': return displayValue = 11;
            case '1011': return displayValue = 12;
            case '10111': return displayValue = 13;
        }
    }
    return displayValue;
}

function setOperation(operation) {
    const operators = ['+', '-', '*', '/'];
    const index = -1;
    const lastChar = operation.at(index);
    if (operators.includes(lastChar)) return lastChar;
    return '';
}


function romantoAlgarism(numeroRomano){
    let romano = numeroRomano;
    let map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    let resultado = 0;

    if (romano.length){
        resultado+=map[romano[romano.length-1]];
    }
    for (let i= romano.length - 1; i > 0; i--){
        if(map[romano[i-1]] < map[romano[i]]) {
            resultado-=map[romano[i-1]];
        }else{
            resultado+=map[romano[i-1]];
        }
    }
    console.log(`${numeroRomano} em decimal é ${resultado}`);
}



function algarismotoRoman(arabicNumber){

    let numeroseNumerais = [
        {numero: 1000, romano: 'M'}, //0
        {numero: 900, romano: 'CM'}, //1
        {numero: 500, romano: 'D'},  //2
        {numero: 400, romano: 'CD'}, //3
        {numero: 100, romano: 'C'},  //4
        {numero: 90, romano: 'XC'},  //5
        {numero: 50, romano: 'L'},   //6
        {numero: 40, romano: 'XL'},  //7
        {numero: 10, romano: 'X'},   //8
        {numero: 9, romano: 'IX'},   //9
        {numero: 5, romano: 'V'},    //10
        {numero: 4, romano: 'IV'},   //11
        {numero: 1, romano: 'I'}     //12
    ];

    let letraromana = '';
    let numero = arabicNumber;
    for(let i=0; i < numeroseNumerais.length; i++){
        if(numeroseNumerais[i].numero <= numero){    // 18 - 10 = 8
            numero = numero - numeroseNumerais[i].numero;
                            //10        -   10
            letraromana = letraromana + numeroseNumerais[i].romano;
                            //''      + 'X'
            i--
        }
    }

    console.log(`O número ${arabicNumber} é ${letraromana} em Letra Romana`);

}
