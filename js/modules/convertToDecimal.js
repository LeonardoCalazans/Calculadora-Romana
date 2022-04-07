import { convertToRoman } from "./convertToRoman.js";

export function convertToDecimal(roman) {
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

    const verifyInput = convertToRoman(result);
    if (verifyInput !== roman){
        return alert(`Inserção inválida, valor esperado: ${verifyInput} valor inserido: ${roman}`);
    }

    return result;
}