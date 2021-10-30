const mapPostsToArr = (arrSrc, arrTarget) => {
	if (!arrTarget.length) {
		return []
	}
	const newArr = arrTarget.map((postId) => {
		const obj = arrSrc.find(entity => postId === entity._id);
		return obj;
	})
	return newArr;
}

export default mapPostsToArr;