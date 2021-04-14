function solution(input, markers) {

    let inputArr = input.split("\n");                           // dividing lines in a string to different array elements
    let finalString = "";
    let inclCount = 0;
    

    for(let i = 0; i < inputArr.length; i++) {

        let tempLine = inputArr[i];
        inclCount = 0;

        for(let y = 0; y < markers.length; y++) {               // stripping comments one by one

            if(tempLine.includes(markers[y])) {

                let tempArr =  tempLine.split(markers[y]);
                finalString = finalString + tempArr[0];
                finalString = finalString.trim();

                if(i < (inputArr.length - 1)) {
                    finalString = finalString + "\n"; 
                }
            } 
        }

        for(let y = 0; y < markers.length; y++) {               // Checking if the current line has any markers
            if(tempLine.includes(markers[y])) {
                inclCount++;
            }
        }

        if (inclCount === 0) {                                  // If current line doesn't have any markers, we append it to the finalString
            finalString = finalString + tempLine;
            finalString = finalString.trim();
            if(i < (inputArr.length - 1)) {
                finalString = finalString + "\n"; 
            }
        }        
    }

    return finalString;
}



// Testing
function checkComments(input, markers, expected) {
    var actual;
    actual = solution(input, markers);
    return console.assert(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
};

checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")




// let finalString = "";

    // let arrayNewLines = input.split("\n");

    // // markers.forEach(element => {
    // //     let temp = input.split(element);
    // //     finalString = finalString + temp[0];       
    // // });

    // // arrayNewLines.forEach(element => {
    // //     markers.forEach(elementMarker => {
    // //         if(element.includes(elementMarker)) {
    // //             let temp = element.toString().split(elementMarker);
    // //             element = temp[0];
    // //         }
    // //     });
    // // });

    // for(let i = 0; i < arrayNewLines.length; i++) {
    //     for(let y = 0; y < markers.length; y++) {
    //         if(arrayNewLines[i].includes(markers[y])) {
    //             let temp = arrayNewLines[i].toString().split(markers[y]);
    //             // arrayNewLines[i] = temp;
    //             finalString = finalString + temp;
    //         } else {
    //             if (y = (markers.length - 1)) {
    //                 finalString = finalString + arrayNewLines[i];
    //             }
    //         }
    //     }
    // }
    // console.log(arrayNewLines);

    // return finalString;