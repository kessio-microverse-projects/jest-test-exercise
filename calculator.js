class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;

    }

    static add(a, b) {
       const addition = new Calculator(a, b);
       return addition.a + addition.b
    

    }
    static subtract(a, b) {
        const subtraction = new Calculator(a, b);
        return subtraction.a - subtraction.b
       
    }
    static divide(a, b) {
        const division = new Calculator(a, b);
        return division.a / division.b
        
    }
    static multiply(a, b) {
        const multiplication = new Calculator(a, b);
        return multiplication.a * multiplication.b
        
    }
   
}
/*console.log(Calculator.add(5, 2))  //7
console.log(Calculator.subtract(5, 2))  // 3
console.log(Calculator.divide(5, 2)) // 2.5
console.log(Calculator.multiply(5, 2)) // 10
*/

module.exports = Calculator;