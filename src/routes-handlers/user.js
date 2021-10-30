import models from '../db/index.js';
import { Router } from 'express';
const router = Router();

const userHandler = async (req, res) => {
	const { params : { userId } } = req
	try {
		const user = await models.User.findOne({_id: userId});
		const { password, name, lastname, ...rest } = user._doc;
		const secureUser = { ...rest, displayName: `${name} ${lastname}`}
		res.status(200).send(secureUser);
	} catch (error) {
		res.status(500).send(error);
	}
}

router.get('/:userId', userHandler);

export default router;