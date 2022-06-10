const {
    add,
    sub,
    mul,
    div,
    mod,
    arr,
    obj,
    exp,
    sqrt,
    fact
} = require('../src/script/main');
describe('name section test', () => {
    test('add', () => {
        expect(add(1, 2)).toBe(3);
    })
    it('sub', () => {
        expect(sub(1, 1)).toBeLessThan(1)
    })
});