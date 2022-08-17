const capitalizeString = (string) => {
    const stringArray =  string.split('');
    return stringArray[0].toUpperCase();

}
//console.log(capitalizeString('kessio'))
module.exports = capitalizeString;