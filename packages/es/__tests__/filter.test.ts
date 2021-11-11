import filter from '../filter';

test('test filter', () => {
	expect(filter([1, 2, 3], (item: number) => item === 1)).toHaveLength(1);
});
