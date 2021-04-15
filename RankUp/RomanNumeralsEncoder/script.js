function solution(number){

    let numStrArr = number.toString().split("");
    numStrArr = numStrArr.reverse();
    let finalNumStr = "";
    
    for(let i = numStrArr.length - 1; i >= 0; i--) {
        let currentNum = parseInt(numStrArr[i]);

        switch (i) {
            case 0:                                     // 1, 5, 10
                finalNumStr = finalNumStr + romanConvert("I", "V", "X", currentNum);
                break;
            case 1:                                     // 10, 50, 100
                finalNumStr = finalNumStr + romanConvert("X", "L", "C", currentNum);
                break;     
            case 2:                                     // 100, 500, 1000
                finalNumStr = finalNumStr + romanConvert("C", "D", "M", currentNum);
                break;   
            case 3:                                     // 1000, 5000, 10000
                finalNumStr = finalNumStr + romanConvert("M", "V", "X", currentNum);
                break; 
        }
    }

    return finalNumStr;
}


const romanConvert = function (one, five, ten, currentNum) {
    let returningString = "";

    if(currentNum < 4) {
        for(let y = 0; y < currentNum; y++) {
            returningString = one + returningString;
        }

    } else if(currentNum === 4) {
        returningString = one + five + returningString;

    } else if(currentNum >= 5 && currentNum <= 8) {
        for(let y = 5; y < currentNum; y++) {
            returningString = one + returningString;
        }
        returningString = five + returningString;
    } else if(currentNum === 9) {
        returningString = one + ten + returningString;
    }
    
    return returningString;
};




// Testing
(function () {
    // should handle small numbers
    console.assert(solution(1) === 'I', '1 should, "I"')
    console.assert(solution(2) === 'II', '2 should, "II"')
    console.assert(solution(3) === 'III', '3 should, "III"')
    console.assert(solution(4) === 'IV', '4 should, "IV"')
    console.assert(solution(5) === 'V', '5 should, "V"')
    console.assert(solution(8) === 'VIII', '8 should, "VIII"')
    console.assert(solution(9) === 'IX', '9 should, "IX"')
    console.assert(solution(10) === 'X', '10 should, "X"')
    console.assert(solution(11) === 'XI')
    console.assert(solution(19) === 'XIX')
    console.assert(solution(22) === 'XXII')
    console.assert(solution(15) === 'XV')
    
    // should handle large numbers
    console.assert(solution(1000) === 'M', '1000 should, "M"')
    console.assert(solution(1001) === 'MI', '1001 should, "MI"')
    console.assert(solution(1990) === 'MCMXC', '1990 should, "MCMXC"')
    console.assert(solution(2007) === 'MMVII', '2007 should, "MMVII"')
    console.assert(solution(2008) === 'MMVIII', '2008 should, "MMVIII"')
})();