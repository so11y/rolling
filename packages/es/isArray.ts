const isArray = <T = unknown>(v: unknown): v is Array<T> => Array.isArray(v);

export default isArray;
