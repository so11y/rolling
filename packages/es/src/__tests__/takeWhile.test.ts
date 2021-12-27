import takeWhile from '../takeWhile';

test('test Array takeWhile', () => {
	const users = [
		{ user: 'barney', active: false },
		{ user: 'fred', active: false },
		{ user: 'pebbles', active: true }
	];

	const e1 = takeWhile(users, (item) => item.active);
	expect(e1).toEqual([{ user: 'pebbles', active: true }]);
});
