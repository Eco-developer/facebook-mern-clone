import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
	{
		user_id: {
			type: String,
			required: true,
			trim: true,
		},
		user_name: {
			type: String,
			required: true,
			trim: true,
		},
		text: {
			required: true,
			type: String,
			trim: true,
		},
		comments_id: {
			type: String,
			trim: true,
		},
		replies_id: {
			type: String,
			trim: true,
		},
		isComment: {
			required: true,
			type: Boolean,
		}
	},
	{ timestamps: true }
);

const Comment = mongoose.model("Coments", commentSchema);

export default Comment;