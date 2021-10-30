const mapImagesToObj = (arrSrc, arrTarget) => {
	if (!arrTarget.length) {
		return []
	}
	const newArr = arrTarget.map((entity) => {
		const { displayPhoto } = arrSrc.find(entityTarget => `${entityTarget._id}` === entity.user_id);
		const newEntity = { 
			...entity,
			user_avatar: displayPhoto,
		};

		return newEntity;
	})
	return newArr;
}

export default mapImagesToObj;