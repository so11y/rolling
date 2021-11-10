import where from '../where';

test('test function where', () => {
	const truthy = jest.fn();
	const falsy = jest.fn();
	where(true, truthy, falsy);
	expect(truthy).toBeCalledTimes(1);
});
