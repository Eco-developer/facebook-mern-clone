import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import { handleEdit } from '../utils/index.js';
import { UPDATE_USER_PROFILE } from '../const/action-types.js';

const router = Router();

const editUserProfileHandler = async (req, res) => {
	const { 
		params : { userId },
		body
	} = req;
	try {
		const user = await models.User.findOne({_id: userId});
		const updatedUser = handleEdit(body, user);
		await updatedUser.save();
		pusher.trigger("facebook-channel", "trigger", {
			type: UPDATE_USER_PROFILE,
			update_profile_type: body.type,
  			payload: userId,
		});
		res.status(200).send('ok');
	} catch (error) {
		res.status(500).send(error);
	}
}

router.put('/profile/:userId', editUserProfileHandler);

export default router;