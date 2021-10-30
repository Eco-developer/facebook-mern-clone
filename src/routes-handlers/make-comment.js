import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import { SET_COMMENT } from '../const/action-types.js';

const router = Router();

const makeCommentHandler = async (req, res) => {
	const { body } = req;
	try {
		const comment = new models.Comment({...body})
		await comment.save();
		const currentUser = await models.User.findOne({_id: body.user_id})
		pusher.trigger("facebook-channel", "trigger", {
			type: SET_COMMENT,
  			payload: {
  				...comment._doc, 
  				user_avatar: currentUser.displayPhoto,
  			},
		});
		res.status(201).send('ok');
	} catch (error) {
		res.status(500).send(error.message);
	}
}

router.post('/', makeCommentHandler);

export default router;