import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import { UPDATE_POST } from '../const/action-types.js';

const router = Router();

const LikePostHandler = async (req, res) => {
	const { 
		params : { 
			postId,
			userId,
		},
	} = req;
	try {
		const post = await models.Post.findOne({_id: postId});
		if (!post.likes.includes(userId)) {
			const updatedLikes = [...post.likes, userId];
			post.likes = updatedLikes;
		} else {
			const updatedLikes = post.likes.filter(id => id !== userId);
			post.likes = updatedLikes;
		}
		
		post.save();
		pusher.trigger("facebook-channel", "trigger", {
			type: UPDATE_POST,
  			payload: {
  				likes: post._doc.likes,
  				_id: postId,
  			}
		});
		res.status(200).send(post._doc.likes);
	} catch (error) {
		res.status(500).send(error);
	}
}

router.put('/likepost/:postId-:userId', LikePostHandler);

export default router;