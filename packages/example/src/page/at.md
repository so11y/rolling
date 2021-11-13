# at

### 选取数组中的指定下标

``` typescript

test('test Array at', () => {
	const arr = ['a', 'b', 'c', 'd'];
	expect(at(arr, 1)).toBe('b');
	expect(at(arr, -2)).toBe('c');
});


```


### 属性

| 参数    | 说明 | 类型  | 默认值 |
| ------- | ---- | ----- | ------ |
| `arr`   | -    | `any` | -      |
| `index` | -    | `any` | -      |