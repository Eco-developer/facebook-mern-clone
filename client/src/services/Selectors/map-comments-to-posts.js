const arrToObjCallback = (obj, prop, isCommentGroup=false) => {
	if (!obj[prop.comments_id]) {
		obj[prop.comments_id] = {
			comments_id: prop.comments_id,
			allComments: [],
			isCommentGroup,
		};
	}
	obj[prop.comments_id].allComments.push(prop)
	return obj;
}

const convertArrToObj = (arr) => {
	if (!arr.length) {
		return {};
	}
	const arrOnlyReplies = arr.filter(item => !item.isComment);

	const arrOnlyComments = arr.filter(item => item.isComment);
	const repliesGroup = arrOnlyReplies.reduce((obj, prop) => arrToObjCallback(obj, prop), {});

	const mappedComments = arrOnlyComments.map(item => ({...item, replies: repliesGroup[item.replies_id] || {}}))
	const commentsGroup = mappedComments.reduce((obj, prop) =>arrToObjCallback(obj, prop, true), {});
	return commentsGroup;
}

const mapObjToArr = (arr, obj) => {
	if (!obj) {
		return arr;
	}
	const mapObjToArrCallback = (item) => (
		{...item, comments: obj[item.comments_id] || {}}
	)

 	const newArr = arr.map(mapObjToArrCallback);
 	return newArr
}

const mapCommentsToPosts = (arrPosts, arrComments) => {
	const obj = convertArrToObj(arrComments);
	const arr = mapObjToArr(arrPosts, obj);
	return arr;
}

export default mapCommentsToPosts;