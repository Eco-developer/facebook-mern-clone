import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import Comment from './models/commenstModel.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import Story from './models/storyModel.js';
import Message from './models/messageModel.js';
import Notification from './models/notificationModel.js';
import 'dotenv/config';

Grid.mongo = mongoose.mongo;

const mongooseHeader = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
}

const gridfsConn = mongoose.createConnection(process.env.MONGO_URI, mongooseHeader);

export let gfsBucket;

const gridfsConnCallback = () => {
	gfsBucket = Grid(gridfsConn.db, mongoose.mongo);
	gfsBucket.collection('images')
};

export const connectDb = () => {
	return (
		gridfsConn.once('open', gridfsConnCallback),
		mongoose.connect(process.env.MONGO_URI, mongooseHeader)
		)
};

const models = { 
	User,
	Post,
	Story,
	Comment,
	Message,
	Notification,
};

export default models;