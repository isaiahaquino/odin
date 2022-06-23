const Calculator = require('../Calculator');

test('add 1 + 3', () => {
    expect(Calculator.add(1,3)).toBe(4);
});

test('subtract 5 - 2', () => {
    expect(Calculator.subtract(5,2)).toBe(3);
});

test('multiply 5 * 9', () => {
    expect(Calculator.multiply(5,9)).toBe(45);
});

test('divide 64 / 8', () => {
    expect(Calculator.divide(64,8)).toBe(8);
});