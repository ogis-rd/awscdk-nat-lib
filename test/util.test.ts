import * as util from '../src/util';

describe('function checkTypeBySymbol', () => {
  const FOO_SYMBOL = Symbol.for('Foo');
  class Foo {
    constructor() {
      Object.defineProperty(this, FOO_SYMBOL, { value: true });
    }
  }

  test('true if the type matches the symbol', () => {
    expect(util.checkTypeBySymbol(new Foo(), FOO_SYMBOL)).toBe(true);
  });

  test.each([
    undefined,
    null,
    true,
    100,
    'string',
    Symbol(),
  ])('false if %p', (x) => {
    expect(util.checkTypeBySymbol(x, FOO_SYMBOL)).toBe(false);
  });
});
