import mapPostsToArr from '../map-posts-to-arr/index.js'
import mapCommentsToPosts from './map-comments-to-posts.js';

const mapPostsToPhotos = (photos, posts, comments) => {
	const mappedPosts = mapCommentsToPosts(posts, comments);
	const mappedPhotos = mapPostsToArr(mappedPosts, photos);
	return mappedPhotos;
};

export default mapPostsToPhotos;