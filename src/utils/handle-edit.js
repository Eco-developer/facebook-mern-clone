import * as TYPES from '../const/edit-profile-types.js';

const handleEdit = (action, user) => {
	switch(action.type) {
		case TYPES.PROFILE_PICTURE: {
			user.displayPhoto = action.newProfilePicture;
			return user;
		}
		case TYPES.PROFILE_BACKGROUND_PICTURE: {
			user.profile_background_picture = action.newProfileBackgroundPicture;
			return user;
		}
		case TYPES.PROFILE_PHOTOS: {
			const updatedPhotos = [...user.photos, action.photoId]
			user.photos = updatedPhotos;
			return user;
		}
		default:
			return user;
	}
}

export default handleEdit;