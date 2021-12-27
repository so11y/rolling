import runners from '../runners';

test('test function runners', () => {
	const callback = jest.fn();
	runners(3, callback);
	expect(callback).toBeCalledTimes(3);
});
