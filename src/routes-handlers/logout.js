import models from '../db/index.js';
import { Router } from 'express';

const router = Router();

const logoutHandler = async (req, res) => {
	try {
		req.logout();
		res.status(200).send('ok');
	} catch (error){
		res.status(500).send(error);
	}
	
}

router.get('/', logoutHandler);

export default router;