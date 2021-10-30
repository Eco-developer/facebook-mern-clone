import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import { DELETE_STORY } from '../const/action-types.js';

const router = Router();

const deleteStoryHandler = async (req, res) => {
	const { 
		params : { 
			storyId
		} 
	} = req;
	try {
		await models.Story.deleteOne({_id: storyId});
		pusher.trigger("facebook-channel", "trigger", {
			type: DELETE_STORY,
  			payload: storyId
		});
		res.status(200).send('deleted');
	} catch (error) {
		res.status(500).send(error);
	}
}

router.delete('/story/:storyId', deleteStoryHandler);

export default router;