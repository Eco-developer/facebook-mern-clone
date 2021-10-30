import session from 'express-session';
import MongoStore from 'connect-mongo';
import 'dotenv/config';

const sessionConfig = session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 30
	}
})

export default sessionConfig;