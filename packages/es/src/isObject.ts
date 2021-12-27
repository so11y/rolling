const isObject = (key: unknown): key is Record<string, any> => {
	return typeof key === 'object';
};

export default isObject;
