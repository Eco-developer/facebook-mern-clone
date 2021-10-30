import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import { UPDATE_POST } from '../const/action-types.js';

const router = Router();

const editPostHandler = async (req, res) => {
	const { 
		params : { postId },
		body : { newDescription },
	} = req;
	try {
		const post = await models.Post.findOne({_id: postId});
		post.description = newDescription;
		await post.save();
		pusher.trigger("facebook-channel", "trigger", {
			type: UPDATE_POST,
  			payload: {
  				description: newDescription,
  				_id: postId,
  			}
		});
		res.status(200).send(newDescription);
	} catch (error) {
		res.status(500).send(error);
	}
}

router.put('/post/:postId', editPostHandler);

export default router;