import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { SET_POST } from '../const/action-types.js';
import { Router } from 'express';

const router = Router();

const uploadPostHandler = async (req, res) => {
	const { body } = req;
	const post = new models.Post({...body})
	try {
		const postId = post._id;
		await post.save();
		pusher.trigger("facebook-channel", "trigger", {
			type: SET_POST,
  			payload: {...post._doc}
		});
		res.status(201).send(postId);
	} catch (error) {
		res.status(500).send(error)
	}
}

router.post('/post', uploadPostHandler);

export default router;