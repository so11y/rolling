import chunk from '../chunk';

test('test Array chunk', () => {
	const arr = [ 'a', 'b', 'c', 'd' ];
	expect(chunk(arr, 2)).toEqual([ [ 'a', 'b' ], [ 'c', 'd' ] ]);
	expect(chunk(arr, 3)).toEqual([ [ 'a', 'b', 'c' ], [ 'd' ] ]);
});
