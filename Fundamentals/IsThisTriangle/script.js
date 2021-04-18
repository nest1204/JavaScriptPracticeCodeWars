function isTriangle(a, b, c) {
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return true;
    }

    return false;
}

testing();

// Testing
function testing() {
  console.assert(isTriangle(1,2,2) === true);
  console.assert(isTriangle(7,2,2) === false);
};