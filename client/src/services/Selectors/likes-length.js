const likesLength = (likes) => {
	if (!likes.length) { return null }
	const { length } = likes;
	return `(${length})`;
}

export default likesLength;