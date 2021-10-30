import models from '../db/index.js';
import { Router } from 'express';

const router = Router();

const authUserHandler = async (req, res) => {
	try {
		if (req.isAuthenticated()) {
			res.status(200).send(req.user);
		} else {
			res.status(200).send(null);
		}
	} catch (error) {
		res.status(500).send(error);
	}
	
}

router.get('/', authUserHandler);

export default router;