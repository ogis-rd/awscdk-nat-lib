/**
 * @returns `true` if the `x` is an `s`
 */
export function checkTypeBySymbol(x: any, s: symbol) {
  return x !== null && typeof (x) === 'object' && s in x;
}
