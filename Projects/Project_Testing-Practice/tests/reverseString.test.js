const reverseString = require('../reverseString');

test('reverse "hello world"', () => {
    expect(reverseString("hello world")).toMatch("dlrow olleh");
});