import models from '../db/index.js';
import { Router } from 'express';
import { 
	extracDoc,
	sortByTimestamp,
	mapImagesToObj
} from '../utils/index.js';

const router = Router();

const retrievePostsHandler = async (req, res) => {
	try {
		const arrPosts = await models.Post.find();
		const arrUsers = await models.User.find();
		const posts = extracDoc(arrPosts);
		const users = extracDoc(arrUsers);
		const mapped = mapImagesToObj(users, posts)
		const sorted = sortByTimestamp(mapped);
		res.status(200).send(sorted);
	} catch (error) {
		res.status(500).send(error);
	}
};

router.get('/posts', retrievePostsHandler);

export default router;