import models from '../db/index.js';
import { Router } from 'express';
import { 
	extracDoc,
	sortByTimestamp,
	mapImagesToObj
} from '../utils/index.js';

const router = Router();

const retrieveStoriesHandler = async (req, res) => {
	try {
		const arrStories = await models.Story.find();
		const arrUsers = await models.User.find();
		const stories = extracDoc(arrStories);
		const users = extracDoc(arrUsers);
		const mapped = mapImagesToObj(users, stories)
		const sorted = sortByTimestamp(mapped).reverse();
		res.status(200).send(sorted);
	} catch (error) {
		res.status(500).send(error);
	}
};

router.get('/stories', retrieveStoriesHandler);

export default router;