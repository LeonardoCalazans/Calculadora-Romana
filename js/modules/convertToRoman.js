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

export function convertToRoman(decimalNumber) {
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
