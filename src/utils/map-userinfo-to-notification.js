const mapUserInfoToNotification = (arrSrc, arrTarget) => {
	if (!arrTarget.length) {
		return []
	}
	const newArr = arrTarget.map((entity) => {
		const { 
			displayPhoto,
			name, 
			lastname, 
		} = arrSrc.find(entityTarget => `${entityTarget._id}` === entity.user_id);
		const newEntity = { 
			type: entity.type,
			target: entity.target,
			timestamp: entity.createdAt,
			user: {
				user_id: entity.user_id,
				user_avatar: displayPhoto,
				user_name: `${name} ${lastname}`,
			},
		};
		return newEntity;
	})
	return newArr;
}

export default mapUserInfoToNotification;