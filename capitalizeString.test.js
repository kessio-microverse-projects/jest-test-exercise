const capitalizeString = require('./capitalizeString');

test('add function exists', () => {
    expect(capitalizeString).toBeDefined();
})
test('First letter of string to be capitalized', () => {
    expect(capitalizeString('welcome')).toEqual('W');
})