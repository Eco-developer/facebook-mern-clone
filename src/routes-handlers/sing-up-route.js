import bcrypt from 'bcryptjs';
import pusher from '../pusher/index.js';
import models from '../db/index.js';
import { Router } from 'express';
import {
	emailPattern, 
	passwordPattern
} from '../const/patterns.js';
import { LOAD_USER } from '../const/action-types.js';

const validate = (email, password) => {
	const emailValidator = new RegExp(emailPattern);
	const passwordValidator = new RegExp(passwordPattern);
	return emailValidator.test(email) && passwordValidator.test(password);
}

const router = Router();

const signUpHandler = async (req, res) => {
	if (!validate(req.body.email, req.body.password)) {
		return res.status(400).send('email or passaword are invalids')
	}
	let user = await models.User.findOne({email: req.body.email});
	if (user) {
		return res.status(400).send('User with this email address already exist')
	}
	try {
		const hashPassword = await bcrypt.hash(req.body.password, 8);
		user = new models.User({...req.body, password: hashPassword});
		await user.save();
		const signedUser = await models.User.findOne({email: req.body.email});
		const { password, ...rest } = signedUser._doc;
		pusher.trigger("facebook-channel", "trigger", {
			type: LOAD_USER,
  			payload: {
  				displayName: `${rest.name} ${rest.lastname}`,
				displayPhoto: rest.displayPhoto,
				country: rest.country,
				state: rest.state,
				_id: rest._id,
  			},
		});
		res.status(201).send(rest);
	} catch (error) {
		return res.status(500).send('something went wrong')
	}

};

router.post('/', signUpHandler);

export default router;