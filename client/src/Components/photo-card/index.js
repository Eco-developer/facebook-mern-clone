import PhotoCardBase from '../photo-card-base/index.js';
import { connect } from 'react-redux';
import { setExpandedPost } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleExpandedPost: (data) => dispatch(setExpandedPost(data))
	};
};

const PhotoCardContainer = ({size, photo=null, InnerComponent=null, handleExpandedPost}) => {

	if (!photo || typeof photo !== 'object') {return null}

	const data = {
		postId: photo._id,
		name: photo.user_name,
		timestamp: photo.createdAt,
		postUrl: photo.post_image,
		avatarSrc: photo.user_avatar,
		description: photo.description,
		comments: photo.comments,
		userId: photo.user_id,
		comments_id: photo.comments_id,
		likes: photo.likes,
	};
	const onHandleExpandedPost = () => {
		handleExpandedPost(data);
	};

	return (
		<PhotoCardBase
			photo={data}
			size={`${size} rounded`}
			InnerComponent={InnerComponent}
			onClickImage={onHandleExpandedPost}
		/>
	)
}

const PhotoCard = connect(
	null,
	mapDispatchToProps
)(PhotoCardContainer);

export default PhotoCard;