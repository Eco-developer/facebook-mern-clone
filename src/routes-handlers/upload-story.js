import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { SET_STORY } from '../const/action-types.js';
import { Router } from 'express';

const router = Router();

const uploadStoryHandler = async (req, res) => {
	const { body } = req;
	
	try {
		const story = new models.Story({...body})
		await story.save();
		const currentUser = await models.User.findOne({_id: body.user_id})
		pusher.trigger("facebook-channel", "trigger", {
			type: SET_STORY,
  			payload: {
  				...story._doc,
  				user_avatar: currentUser.displayPhoto,
  			}
		});
		res.status(201).send('ok');
	} catch (error) {
		res.status(500).send(error)
	}
}

router.post('/story', uploadStoryHandler);

export default router;