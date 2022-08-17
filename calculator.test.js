const calculator = require('./calculator');

describe('add function', () => {
    test('add function exists', () => {
        expect(calculator.add).toBeDefined();
    })
    test('argument passed is an integer', () => {
        expect(typeof calculator.add(5, 2)).toBe('number');
      });
      
      test('adds 5 + 2 to equal 7', () => {
        expect(calculator.add(5, 2)).toBe(7);
      })
});


describe('subtract function', () => {
  test('subtract function exists', () => {
    expect(calculator.subtract).toBeDefined();
})
test('argument passed is an integer', () => {
    expect(typeof calculator.subtract(5, 2)).toBe('number');
  });
  
  test('subtracts 5 - 2 to equal 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  })
});


describe('divide function', () => {
    test('divide function exists', () => {
        expect(calculator.divide).toBeDefined();
    })
    test('arguments passed is an integer', () => {
        expect(typeof calculator.divide(5, 2)).toBe('number');
      });
      
      test('division 5 / 2 to equal 2.5', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
      })  
});


describe('multiply function', () => {
    test('multiply function exists', () => {
        expect(calculator.multiply).toBeDefined();
    })
    test('arguments passed is an integer', () => {
        expect(typeof calculator.multiply(5, 2)).toBe('number');
      });
      
      test('multiply 5 / 2 to equal 2.5', () => {
        expect(calculator.multiply(5, 2)).toBe(10);
      })
});
