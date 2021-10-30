const deletePhoto = (user, postId) => {
	if (user.photos.includes(postId)) {
		const updatedPhotos = user.photos.filter(id => id !== postId);
		user.photos = updatedPhotos;
	}
	return user;
}

export default deletePhoto;