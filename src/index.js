import sessionConfig from './session/index.js';
import routes from './routes-handlers/index.js';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import path from 'path';
import { connectDb } from './db/index.js';
import { Strategy } from 'passport-local';
import {
	localStrategyCallback,
	serializeCallback,
	deSerializeCallback,
} from './passaport-callbacks/index.js';
import 'dotenv/config';
;
const app = express();

//Midlewares:
if (process.env.NODE_ENV === 'development') {
	app.use(cors({origin: 'http://localhost:3000/', credentials: true}));
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(sessionConfig);

// Passport

app.use(passport.initialize());
app.use(passport.session());

const options = {
	usernameField: 'email',
	passwordField: 'password',
};

passport.use(new Strategy(options, localStrategyCallback));
passport.serializeUser(serializeCallback);
passport.deserializeUser(deSerializeCallback);

//Routes:

app.use('/api/v2/sign-up', routes.signUpRouter);
app.use('/api/v2/users', routes.usersRouter);
app.use('/api/v2/login', routes.loginRouter);
app.use('/api/v2/upload', routes.uploadImageRouter);
app.use('/api/v2/upload', routes.uploadPostRouter);
app.use('/api/v2/upload', routes.uploadStoryRouter);
app.use('/api/v2/upload', routes.uploadNotificationRouter);
app.use('/api/v2/retrieve', routes.retrievePostsRouter);
app.use('/api/v2/retrieve', routes.retrieveStoriesRouter);
app.use('/api/v2/retrieve', routes.retrieveImageRouter);
app.use('/api/v2/retrieve', routes.retrieveCommentsRouter);
app.use('/api/v2/retrieve', routes.retriveMessagesRouter);
app.use('/api/v2/retrieve', routes.retrieveNotificationsRouter);
app.use('/api/v2/comment', routes.commentRouter);
app.use('/api/v2/user', routes.userRouter);
app.use('/api/v2/authuser', routes.authUserRouter);
app.use('/api/v2/message', routes.messagesRouter);
app.use('/api/v2/edit', routes.editUserProfileRouter);
app.use('/api/v2/edit', routes.editPostRouter);
app.use('/api/v2/edit', routes.likePostRouter);
app.use('/api/v2/delete', routes.deletePostRouter);
app.use('/api/v2/delete', routes.deleteStoryRouter)
app.use('/api/v2/logout', routes.logoutRouter);

if (process.env.NODE_ENV === 'production') {
	const dir = __dirname.replace('src', '').replace('build', '');
	app.use(express.static(path.join(dir, '/client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(dir, 'client', 'build', 'index.html'));
	})

} else {
	app.get('/', (req, res) => {
		res.send('facebook-clone server development');
	});
}

//Config:

const PORT = process.env.PORT || 4040;

connectDb().then(async () => {
	app.listen(PORT)
});