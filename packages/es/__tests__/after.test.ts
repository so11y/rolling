import after from '../after';
import { bindMockThis, mockThis } from '../jest/index';
import runners from '../runners';

test('test function after', () => {
	const callback = jest.fn();
	const runner = after(2, callback);
	//给runner绑定mockThis指向
	const bindhaveThisRunner = bindMockThis(mockThis, runner);
	//循环执行绑定完成的回调函数3次
	runners(3, () => bindhaveThisRunner());
	//期望callback只执行了一次
	expect(callback).toBeCalledTimes(1);
	//判断callback的this指向mockThis
	expect(callback.mock.instances[0]).toBe(mockThis);
});
