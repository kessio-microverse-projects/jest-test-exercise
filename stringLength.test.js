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




