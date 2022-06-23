const capitalize = require('../capitalize');

test('capitalize isaiah', () => {
    expect(capitalize('isaiah')).toMatch('Isaiah');
});