import isArray from '../isArray';

test('test isArray', () => {
  expect(isArray([])).toBeTruthy();
  expect(isArray(1)).toBeFalsy();
});
