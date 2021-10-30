import mongoose from 'mongoose';

const storySchema = mongoose.Schema(
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
		story_img: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{ timestamps: true }
);

const Story = mongoose.model("Stories", storySchema);

export default Story;