const commentsLength = (commentsGroup) => {
	if (!commentsGroup.allComments) {return null}
	const { length } = commentsGroup.allComments;
	const count = commentsGroup.allComments.map((comment) => comment?.replies?.allComments?.length || 0).reduce((total, current) => total + current, length)
	return count <= 0 || count === undefined ? null : `(${count})`;
}

export default commentsLength;