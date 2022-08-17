const  reverseString = (string) => {
    return string
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
}
//console.log(reverseString('hello'))
module.exports = reverseString;