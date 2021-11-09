const isArray = <T = any>(v: unknown): v is Array<T> => Array.isArray(v);

export default isArray;
