function solution(input, markers) {

    let finalString = "";

    let arrayNewLines = input.split("\n");

    // markers.forEach(element => {
    //     let temp = input.split(element);
    //     finalString = finalString + temp[0];       
    // });

    // arrayNewLines.forEach(element => {
    //     markers.forEach(elementMarker => {
    //         if(element.includes(elementMarker)) {
    //             let temp = element.toString().split(elementMarker);
    //             element = temp[0];
    //         }
    //     });
    // });

    for(let i = 0; i < arrayNewLines.length; i++) {
        for(let y = 0; y < markers.length; y++) {
            if(arrayNewLines[i].includes(markers[y])) {
                let temp = arrayNewLines[i].toString().split(markers[y]);
                // arrayNewLines[i] = temp;
                finalString = finalString + temp;
            } else {
                if (y = (markers.length - 1)) {
                    finalString = finalString + arrayNewLines[i];
                }
            }
        }
    }
    console.log(arrayNewLines);

    return finalString;
};



// Testing
function checkComments(input, markers, expected) {
    var actual;
    actual = solution(input, markers);
    return console.assert(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
};

checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
