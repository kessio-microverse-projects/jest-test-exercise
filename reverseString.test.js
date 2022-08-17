const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
})

test('String to be reversed', () => {
    expect(reverseString('Hello')).toEqual('olleh');
  });