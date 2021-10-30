import models from '../db/index.js';
import { Router } from 'express';
import { 
	extracDoc,
	mapImagesToObj
} from '../utils/index.js';

const router = Router();

const retrieveCommentsHandler = async (req, res) => {
	try {
		const arrComments = await models.Comment.find();
		const arrUsers = await models.User.find();
		const users = extracDoc(arrUsers);
		const comments = extracDoc(arrComments);
		const mappedComments = mapImagesToObj(users, comments);
		res.status(200).send(mappedComments);
	} catch (error) {
		res.status(500).send(error);
	}
};

router.get('/comments', retrieveCommentsHandler);

export default router;