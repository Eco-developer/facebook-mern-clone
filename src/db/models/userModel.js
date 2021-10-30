import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		lastname: {
			type: String,
			required: true,
			trim: true,
		},
		civil_state: {
			type: String,
			trim: true,
			default: '',
		},
		photos: {
			type: Array,
			default: [],
		},
		email: {
			unique: true,
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		country: {
			type: String,
			required: true,
			trim: true,
		},
		state: {
			type: String,
			trim: true,
			default: '',
		},
		phone_number: {
			type: String,
			trim: true,
			default: '',
		},
		displayPhoto: {
			type: String,
			default: '',
		},
		profile_background_picture: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;