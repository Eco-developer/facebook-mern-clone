import Post from '../Post/index.js';
import { 
	filterByUserId,
	mapCommentsToPosts
} from '../../services/Selectors/index.js';
import { connect } from 'react-redux';
import {v4 as uuid} from 'uuid';

const mapStateToProps = (state) => (
	{ 
		posts: state.posts, 
		comments: state.comments
	}
)

const PostsBase = ({posts, comments, userFilter=''}) => {
	const mappedPosts = mapCommentsToPosts(
		posts,
		comments
	)
	const filtered = userFilter ? filterByUserId(mappedPosts, userFilter) : mappedPosts;
	return (
		filtered.length ? filtered.map(({_id, user_name, user_id, user_avatar, likes, post_image, description, comments_id, comments, createdAt}) => (
			<Post
				key={uuid()}
				postId={_id}
				name={user_name}
				timestamp={createdAt}
				likes={likes}
				postUrl={post_image}
				avatarSrc={user_avatar}
				description={description}
				comments={comments}
				userId={user_id}
				comments_id={comments_id}
			/>
		)) : null
	)
}

const Posts = connect(mapStateToProps)(PostsBase);

export default Posts;