const stringLength = (string) => {
    if(string.lenght < 1){
         return "Less than 1";
     }else if(string.length > 10){
         return "String should not be longer than 10 characters"
    }else{
    return string.length;
    }
}

module.exports = stringLength;

