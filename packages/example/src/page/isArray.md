# isArray

### 判断是否是数组类型

``` typescript

test('test types isArray', () => {
	expect(isArray([])).toBeTruthy();
	expect(isArray(1)).toBeFalsy();
});

```


### 属性

| 参数 | 说明 | 类型 | 默认值  |
| ---- | ---- | ---- | ------- |
| `v`  | 值   | any  | `false` |