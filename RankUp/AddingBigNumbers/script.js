function add(a, b) {
    let aArr = a.split("");
    let bArr = b.split("");
    let numMain;
    let numExtra = 0;

    // making arrays the same length
    while(aArr.length > bArr.length) {
        bArr.unshift("0");
    }
    while(aArr.length < bArr.length) {
        aArr.unshift("0");
    }

    for(let i = aArr.length; i > 0; i--) {
        // Problem here. Not sure what's wrong
        let tempNum = (parseInt(aArr[i]) + parseInt(bArr[i]) + numExtra); //.toString();
        if(tempNum.length > 1) {
            numExtra = tempNum[0];
            numMain = tempNum[1];
        } else {
            numExtra = 0;
            numMain = tempNum[0];
        }

        aArr[i] = numMain;



        

        // if(i === 1 && numExtra !== 0) {

        // }
        
    }


    console.log(aArr);
    console.log(bArr);


}



// Testing
(function () {
    console.assert(add("59", "49") === "108");
    console.assert(add("1", "1") === "2");
    console.assert(add("123", "456") === "579");
    console.assert(add("888", "222") === "1110");
    console.assert(add("1372", "69") === "1441");
    console.assert(add("12", "456") === "468");
    console.assert(add("101", "100") === "201");
    console.assert(add('63829983432984289347293874', '90938498237058927340892374089') === "91002328220491911630239667963")
})();