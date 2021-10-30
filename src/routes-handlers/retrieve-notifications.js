import models from '../db/index.js';
import { Router } from 'express';
import { 
	extracDoc,
	mapUserInfoToNotification
} from '../utils/index.js';

const router = Router();

const retrieveNotificationsHandler = async (req, res) => {
	try {
		const arrNotifications = await models.Notification.find();
		const arrUsers = await models.User.find();
		const users = extracDoc(arrUsers);
		const notifications = extracDoc(arrNotifications);
		const mappedNotifications = mapUserInfoToNotification(users, notifications).filter((notification) => notification.user.user_id !== `${req.user._id}`);

		res.status(200).send(mappedNotifications);
	} catch (error) {
		res.status(500).send(error);
	}
};

router.get('/notifications', retrieveNotificationsHandler);

export default router;