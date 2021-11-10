import isArray from '../isArray';

test('test Array isArray', () => {
  expect(isArray([])).toBeTruthy();
  expect(isArray(1)).toBeFalsy()
});
