import models from '../db/index.js';
import { Router } from 'express';

const router = Router();

const deleteStoryHandler = async (req, res) => {
	const { 
		params : { 
			storyId
		} 
	} = req;
	try {
		await models.Story.deleteOne({_id: storyId});
		res.status(200).send('deleted');
	} catch (error) {
		res.status(500).send(error);
	}
}

router.delete('/story/:storyId', deleteStoryHandler);

export default router;