function arrayDiff(a, b) {
    let aCopy = a.slice();
  
    b.forEach(element => {
        while (aCopy.includes(element)) {
          aCopy.splice(aCopy.indexOf(element), 1);
        }
    });
  
    console.log(aCopy);
    return aCopy;
  }
  