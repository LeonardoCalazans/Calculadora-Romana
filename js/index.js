const numeroseNumerais = [
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
const operators = ['+', '-', '*', '/'];
const displayValue = [];

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
    const hasOperator = displayValue.at(operatorIndex);
    const algarismosRomano = displayValue.slice(0, operatorIndex).join('');
    const algarismosRomano2 = displayValue.slice(operatorIndex + 1, displayValue.length).join('');
    const algarismosArabicos = convertToArabicNumber(algarismosRomano);
    const algarismosArabicos2 = convertToArabicNumber(algarismosRomano2);
    const resultadoArabico = eval(algarismosArabicos + hasOperator + algarismosArabicos2);
    const resultadoRomano = convertToRoman(resultadoArabico);
    const innerArabico = `${algarismosArabicos} ${hasOperator} ${algarismosArabicos2} = ${resultadoArabico}`;
    const innerRomano = `${algarismosRomano} ${hasOperator} ${algarismosRomano2} = ${resultadoRomano}`;
    const decimalList = document.getElementById('listaDeCalculosDecimais');
    const romanoList = document.getElementById('listaDeCalculosRomanos');
    romanoList.innerHTML += `<li>${innerRomano}</li>`;
    decimalList.innerHTML += `<li>${innerArabico}</li>`;
    //Esvaziando o array
    clean();
}

function convertToRoman(arabicNumber){
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

    return letraromana;

}

function convertToArabicNumber(numeroRomano){
    let romano = numeroRomano;
    const map = {
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
    return resultado;
}
