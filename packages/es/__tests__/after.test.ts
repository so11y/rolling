import after from '../after';
import { bindMockThis, mockThis } from '../jest/index';
import runners from '../runners';

test('test function after', () => {
	const callback = jest.fn();
	const runner = after(2, callback);
	const bindhaveThisRunner = bindMockThis(mockThis, runner);
	runners(3, () => bindhaveThisRunner());
	expect(callback).toBeCalledTimes(1);
	expect(callback.mock.instances[0]).toBe(mockThis);
});
