const stringLength = require('./stringLength');

test('stringLength function exists', () => {
    expect(stringLength).toBeDefined();
})
test('Get string length', () => {
    expect(stringLength('welcome')).toEqual(7);
  });

  test('argument is a string', () => {
    expect(typeof 'welcome').toBe('string');
  });

  test('string length greater than 1', () => {
    expect(stringLength('welcome')).toBeGreaterThan(1);
})
test('string length less than 10', () => {
    expect(stringLength('welcome')).toBeLessThan(10);
})


 /* test('overcome is a string', () => {
    expect(typeof 'overcome').toBe('string');
  });

  test('comedown is a string', () => {
    expect(typeof 'comedown').toBe('string');
  });
  

test('string length less than 10', () => {
    const string = "welcome"
    expect(string.length).toBeLessThan(10);
})
test('string length less than 10', () => {
    const string = "overcome"
    expect(string.length).toBeLessThan(10);
})

test('string length greater than 1', () => {
    let string = "comedown"
    expect(string.length).toBeGreaterThan(1);
})
  */

