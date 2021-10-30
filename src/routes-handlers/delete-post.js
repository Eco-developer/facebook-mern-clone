import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import { deletePhoto } from '../utils/index.js';
import { DELETE_POST } from '../const/action-types.js';

const router = Router();

const deletePostHandler = async (req, res) => {
	const { 
		params : { 
			postId,
			userId
		} 
	} = req;
	try {
		await models.Post.deleteOne({_id: postId});
		const user = await models.User.findOne({_id: userId});
		const updatedUser = deletePhoto(user, postId);
		await updatedUser.save()
		pusher.trigger("facebook-channel", "trigger", {
			type: DELETE_POST,
  			payload: postId
		});
		res.status(200).send('deleted');
	} catch (error) {
		res.status(500).send(error);
	}
}

router.delete('/post/:postId-:userId', deletePostHandler);

export default router;