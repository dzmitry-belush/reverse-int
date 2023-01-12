module.exports = function reverse (n) {
// function reverse (n) { // selftest
    let reversed = 0;
    let reversedStr = '';

    let number = Math.abs(n);
    let numberStr = number.toString();

    for (let i = 0; i < numberStr.length; i++) {
        reversedStr = `${numberStr[i]}${reversedStr}`
    }

    reversed = Number(reversedStr);

    console.log(typeof reversed, reversed);
    return reversed;
}

// reverse(-54321); // selftest