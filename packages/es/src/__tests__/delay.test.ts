import delay from '../delay';
test('test function delay', (done) => {
	jest.useFakeTimers();
	const callback = jest.fn();
	delay(1000)
		.then(callback)
		.then(() => {
			expect(callback).toHaveBeenCalledTimes(1);
			done();
		});
	jest.runOnlyPendingTimers();
});
