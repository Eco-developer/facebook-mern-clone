import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
	{
		user_name: {
			type: String,
			required: true,
			trim: true,
		},
		user_id: {
			type: String,
			required: true,
			trim: true,
		},
		post_image: {
			type: String,
			trim: true,
			default: '',
		},
		description: {
			type: String,
			trim: true,
			default: '',
		},
		user_avatar: {
			type: String,
			trim: true,
			default: '',
		},
		comments_id: {
			unique: true,
			type: String,
			required: true,
			trim: true,
		},
		likes: {
			type: Array,
			default: [],
		},
		location: {
			type: String,
			trim: true,
			default: '',
		}
	},
	{ timestamps: true }
);

const Post = mongoose.model("Posts", postSchema);

export default Post;