import models from '../db/index.js';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import { Router } from 'express';

const router = Router();

const loginHandler = async (req, res, next) => {
	try {
		passport.authenticate('local', (err, user, info) => {
			if (err || !user) {
				return res.status(401).send(info);
			}
			req.logIn(user, (err) =>{
				res.status(200).send(req.user);
				next()
			})
		})(req, res, next);
	} catch (error) {
		res.status(500).send(error);
	}
};

router.post('/', loginHandler);

export default router;