function reverseString(string) {
    let newStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newStr = newStr.concat(string[i]);
    }
    return newStr;
}

module.exports = reverseString;