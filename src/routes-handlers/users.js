import models from '../db/index.js';
import { Router } from 'express';

const router = Router();

const usersHandler = async (req, res) => {
	try {
		const users = await models.User.find();
		const secureUsers = users.map(user => {
			const {name, lastname, displayPhoto, _id, country, state} = user._doc;
			const newUser = {
				displayName: `${name} ${lastname}`,
				displayPhoto,
				country,
				state,
				_id,
			}
			return newUser;
		})
		res.status(200).send(secureUsers);
	} catch (error){
		res.status(500).send(error);
	}
}

router.get('/', usersHandler);

export default router;