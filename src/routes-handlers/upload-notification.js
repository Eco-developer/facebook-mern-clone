import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import { SET_NOTIFICATION } from '../const/action-types.js';

const router = Router();

const uploadNotificationHandler = async (req, res) => {
	const { body } = req;
	
	try {
		const notification = new models.Notification({...body})
		await notification.save();
		const currentUser = await models.User.findOne({_id: body.user_id})
		pusher.trigger("facebook-channel", "trigger", {
			type: SET_NOTIFICATION,
  			payload: {
  				type: notification._doc.type,
				target: notification._doc.target,
				timestamp: notification._doc.createdAt,
				user: {
					user_id: body.user_id,
					user_avatar: currentUser.displayPhoto,
					user_name: `${currentUser.name} ${currentUser.lastname}`,
				}
  			}
		});
		res.status(201).send('ok');
	} catch (error) {
		res.status(500).send(error);
	}
}

router.post('/notification', uploadNotificationHandler);

export default router;