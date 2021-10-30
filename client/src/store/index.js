import { 
	createStore, 
	combineReducers, 
	applyMiddleware 
} from 'redux';
import createSagaMiddleware from "redux-saga";
import * as reducers from '../reducers/index.js';
import apiGetSaga from '../sagas/apiGetSaga.js';

const initialiseSagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	userData: reducers.userDataReducer,
	users: reducers.usersReducer,
	appLoading: reducers.loadingAppReducer,
	user: reducers.userReducer,
	header: reducers.headerReducer,
	expandedPost: reducers.expandedPostReducer,
	storyIndexes: reducers.expandedStoryReducer,
	posts: reducers.postsReducer,
	stories: reducers.storiesReducer,
	rePost: reducers.rePostReducer,
	comments: reducers.commentsReducer,
	messages: reducers.messagesReducer,
	resipientTarget: reducers.resipientTargetReducer,
	profileLoading: reducers.loadingProfileReducer,
	notifications: reducers.notificationsReducer,
});

//const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
	rootReducer,
	applyMiddleware(initialiseSagaMiddleware)	
);

initialiseSagaMiddleware.run(apiGetSaga);

export default store;