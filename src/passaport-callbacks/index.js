import bcrypt from 'bcryptjs';
import models from '../db/index.js';

const localStrategyCallback = async (email, password, callback) => {
	try {		
		const user = await models.User.findOne({email});
		if (!user) { 			
			return callback(null, false,  { message: "Incorrect useremail", type: 'email'})
		}

		const { 
			password: userPassword, 
			name, 
			lastname, 
			displayPhoto,
			_id, ...rest
		} = user.toObject();
		const isValid = await bcrypt.compare(
			password,
			userPassword
		)
		if (!isValid) {
			return callback(null, false,  { message: "Incorrect password", type: 'password'})
		}
		const secureUser = {
			displayName: `${name} ${lastname}`,
			displayPhoto,
			_id,
		}

		return callback(null, secureUser);

	} catch (error) {
		return callback(
			null, 
			false, 
			{statusCode: 400, message: error.message}
		)
	}
}

const serializeCallback = (user, done) => {
	done(null, user._id)
}

const deSerializeCallback = (id, done) => {
	models.User.findOne({_id: id}, (error, user) =>{
		const { 
			name, 
			lastname, 
			displayPhoto,
			_id,
		} = user
		const secureUser = {
			displayName: `${name} ${lastname}`,
			displayPhoto,
			_id,
		}
		done(error, secureUser)
	})
}

export {
	localStrategyCallback,
	serializeCallback,
	deSerializeCallback,
};