const numbersAndNumerals = [
    { number: 1000000, roman: 'M_' },
    { number: 900000, roman: 'CM_' },
    { number: 800000, roman: 'DCCC_' },
    { number: 700000, roman: 'DCC_' },
    { number: 600000, roman: 'DC_' },
    { number: 500000, roman: 'D_' },
    { number: 400000, roman: 'CD_' },
    { number: 300000, roman: 'CCC_' },
    { number: 200000, roman: 'CC_' },
    { number: 100000, roman: 'C_' },
    { number: 90000, roman: 'XC_' },
    { number: 80000, roman: 'LXXX_' },
    { number: 70000, roman: 'LXX_' },
    { number: 60000, roman: 'LX_' },
    { number: 50000, roman: 'L_' },
    { number: 40000, roman: 'XL_' },
    { number: 30000, roman: 'XXX_' },
    { number: 20000, roman: 'XX_' },
    { number: 10000, roman: 'X_' },
    { number: 9000, roman: 'IX_' },
    { number: 8000, roman: 'VIII_' },
    { number: 7000, roman: 'VII_' },
    { number: 6000, roman: 'VI_' },
    { number: 5000, roman: 'V_' },
    { number: 4000, roman: 'MV_' },
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
    if (decimalNumber >= 4000000) {
        alert('Resultado acima de 4.000.000 milhões, muito alem da tabela.')
        return 'Tabela estourada';
    }
    numbersAndNumerals.forEach((element) => {
        while (number >= element.number) {
            romanNumeral += element.roman;
            number -= element.number;
        }
    });
    return romanNumeral;
}
