function duplicateCount(text){

    text = text.toLowerCase();

    let indexOfFirst;
    let indexForDeletion;
    let numberOfDuplicates = 0;

    // empty string
    if (text.length === 0) {
        return 0;
    }
    
    const lettersArray = text.split("");
    
    let lettersArrayDouble = lettersArray.slice();

    // Going through every letter in lettersArray
    lettersArray.forEach((item) => {
        indexOfFirst = lettersArrayDouble.indexOf(item);

        //changing the current letter in the double array to check if it still has a letter like this in the array
        lettersArrayDouble[indexOfFirst] = -1;

        if (lettersArrayDouble.includes(item)) {
            ++numberOfDuplicates;

            // removing all the instances of the current repeating letter from the double array 
            do {
                indexForDeletion = lettersArrayDouble.indexOf(item);
                lettersArrayDouble.splice(indexForDeletion, 1, -1);
            } while (lettersArrayDouble.includes(item))
        }

    });

    return numberOfDuplicates;
}


testing();



// Testing
function testing() {
    console.assert(duplicateCount("") === 0);
    console.assert(duplicateCount("abcde") === 0);
    console.assert(duplicateCount("aabbcde") === 2);
    console.assert(duplicateCount("Indivisibility") === 1);
    console.assert(duplicateCount("Indivisibilities") === 2, "characters may not be adjacent");
};


