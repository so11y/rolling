const delay = (time: number) => {
	return new Promise((v) => setTimeout(v, time));
};

export default delay;
