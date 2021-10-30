import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { SET_MESSAGE } from '../const/action-types.js';
import { Router } from 'express';

const router = Router();

const makeMessageHandler = async (req, res) => {
	const { body } = req;
	try {
		const message = new models.Message({...body})
		await message.save();
		pusher.trigger("facebook-channel", "trigger", {
			type: SET_MESSAGE,
  			payload: {...message._doc}
		});
		res.status(201).send('ok');
	} catch (error) {
		res.status(500).send(error);
	}
}

router.post('/', makeMessageHandler);

export default router;