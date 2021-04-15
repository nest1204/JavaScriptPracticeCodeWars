/*
    So, we're going to sum every two numbers one-by-one from the end of the string 
    and keeping a remainder for the next couple of numbers
*/

function add(a, b) {
    let aArr = a.split("");
    let bArr = b.split("");
    let numMain;
    let numExtra = 0;
    let finalNumStr = "";

    // making arrays the same length
    while(aArr.length > bArr.length) {
        bArr.unshift("0");
    }
    while(aArr.length < bArr.length) {
        aArr.unshift("0");
    }

    for(let i = aArr.length; i > 0; i--) {
        // sum of two numbers and a remainder 
        let tempNum = (parseInt(aArr[i - 1]) + parseInt(bArr[i - 1]) + parseInt(numExtra)).toString();
        
        // the first number array is going to be the number that is changing
        if(tempNum.length > 1) {
            numExtra = tempNum[0];
            numMain = tempNum[1];
        } else {
            numExtra = 0;
            numMain = tempNum[0];
        }

        aArr[i - 1] = numMain;

        // if the final number is 1 digit longer than the original, we're adding the last remainder in the front
        if(i === 1 && numExtra !== 0) {
            aArr.unshift(numExtra);
            break;
        }
        
    }

    aArr.forEach(element => {
        finalNumStr = finalNumStr + element;
    });

    return finalNumStr;
}


// Testing
(function () {
    console.assert(add("1", "1") === "2");
    console.assert(add("123", "456") === "579");
    console.assert(add("888", "222") === "1110");
    console.assert(add("1372", "69") === "1441");
    console.assert(add("12", "456") === "468");
    console.assert(add("101", "100") === "201");
    console.assert(add('63829983432984289347293874', '90938498237058927340892374089') === "91002328220491911630239667963")
})();