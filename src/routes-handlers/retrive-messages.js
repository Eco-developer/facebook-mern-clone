import models from '../db/index.js';
import { Router } from 'express';
import { extracDoc } from '../utils/index.js';

const router = Router();

const retrieveMessagesHandler = async (req, res) => {
	try {
		const arrMessages = await models.Message.find();
		const messages = extracDoc(arrMessages);		
		const uId = `${req.user._id}`;
		const filtered = messages.filter(message => message.sender === uId || message.reciver === uId)
		res.status(200).send(filtered);
	} catch (error) {
		res.status(500).send(error);
	}
};

router.get('/messages', retrieveMessagesHandler);

export default router;