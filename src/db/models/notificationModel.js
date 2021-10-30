import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema(
	{
		user_id: {
			type: String,
			required: true,
			trim: true,
		},
		target: {
			type: String,
			trim: true,
			default: '',
		},
		type: {
			required: true,
			type: String,
			trim: true,
		},	
	},
	{ timestamps: true }
);

const Notification = mongoose.model("Notifications", notificationSchema);

export default Notification;