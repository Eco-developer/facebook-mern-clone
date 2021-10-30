import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
	{
		sender: {
			type: String,
			required: true,
			trim: true,
		},
		reciver: {
			type: String,
			required: true,
			trim: true,
		},
		text: {
			required: true,
			type: String,
			trim: true,
		},
	},
	{ timestamps: true }
);

const Message = mongoose.model("Messages", messageSchema);

export default Message;